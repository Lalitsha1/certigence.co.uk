import ErrorHandler from "../middlewares/error.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userModel.js";
import twilio from "twilio";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";
import crypto from "crypto";
import { send } from "process";

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// REGISTER
export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, phone, password, verificationMethod } = req.body;

    if (!name || !email || !phone || !password || !verificationMethod) {
        return next(new ErrorHandler("Please enter all fields", 400));
    }

    // Validate phone number in E.164 format (+[country code][number])
    const isPhoneValid = /^\+[1-9]\d{1,14}$/.test(phone);
    if (!isPhoneValid) {
        return next(new ErrorHandler("Please enter a valid phone number in international format (e.g., +14155552671)", 400));
    }


    const existingUser = await User.findOne({
        $or: [
            { email, accountVerified: true },
            { phone, accountVerified: true }
        ]
    });

    if (existingUser) {
        return next(new ErrorHandler("User already exists with this email or phone number", 400));
    }

    const unverifiedAttempts = await User.find({
        $or: [
            { email, accountVerified: false },
            { phone, accountVerified: false }
        ]
    });

    if (unverifiedAttempts.length >= 3) {
        return next(new ErrorHandler("Too many attempts. Try again later.", 400));
    }

    const user = await User.create({ name, email, phone, password });
    const verificationCode = await user.generateVerificationCode();
    await user.save();

    try {
        await sendVerificationCode(email, phone, verificationCode, verificationMethod);
        res.status(200).json({
            success: true,
            message: "Registered. Please verify your email or phone."
        });
    } catch (error) {
        return next(new ErrorHandler("Failed to send verification code", 500));
    }
});

// SEND VERIFICATION CODE
async function sendVerificationCode(email, phone, verificationCode, method) {
    const formattedCode = verificationCode.toString().split("").join(" ");

    if (method === "email") {
        const message = generateEmailTemplate(verificationCode);
        await sendEmail({ email, subject: "Your Verification Code", message });
    } else if (method === "phone") {
        await client.messages.create({
            body: `Your verification code is: ${formattedCode}. It will expire in 10 minutes.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: phone
        });
    } else {
        throw new Error("Invalid verification method.");
    }
}

// EMAIL TEMPLATE
function generateEmailTemplate(code) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Email Verification Code</title>
        <style>
            body {
                background-color: #f0f8ff;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                padding: 20px;
                margin: 0;
            }
            .email-container {
                max-width: 500px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                border-top: 8px solid #4CAF50;
            }
            h1 {
                color: #4CAF50;
                text-align: center;
                font-size: 24px;
                margin-bottom: 20px;
            }
            p {
                font-size: 16px;
                color: #333;
                line-height: 1.5;
            }
            .code {
                display: block;
                width: fit-content;
                margin: 20px auto;
                padding: 12px 24px;
                background-color: #e8f5e9;
                color: #2e7d32;
                font-size: 22px;
                font-weight: bold;
                border-radius: 6px;
                letter-spacing: 4px;
                border: 2px dashed #81c784;
                text-align: center;
            }
            .footer {
                font-size: 12px;
                color: #888;
                text-align: center;
                margin-top: 30px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <h1>Email Verification</h1>
            <p>Hello!</p>
            <p>Your verification code is:</p>
            <span class="code">${code}</span>
            <p>This code will expire in <strong>10 minutes</strong>.</p>
            <p>If you did not request this code, you can safely ignore this email.</p>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Your Company Name
            </div>
        </div>
    </body>
    </html>
    `;
}

// VERIFY OTP
export const verifyOTP = catchAsyncError(async (req, res, next) => {
    const { email, phone, otp } = req.body;

    if (!otp || (!email && !phone)) {
        return next(new ErrorHandler("Please provide OTP and either email or phone", 400));
    }

    const query = phone
        ? { phone, accountVerified: false }
        : { email, accountVerified: false };

    const user = await User.findOne(query).sort({ createdAt: -1 });

    if (!user) {
        return next(new ErrorHandler("No unverified user found", 404));
    }

    if (user.verificationCode !== Number(otp)) {
        return next(new ErrorHandler("Invalid OTP", 400));
    }

    const currentTime = Date.now();
    const expiryTime = new Date(user.verificationCodeExpires).getTime();

    if (currentTime > expiryTime) {
        return next(new ErrorHandler("OTP expired. Request a new one.", 400));
    }

    user.accountVerified = true;
    user.verificationCode = null;
    user.verificationCodeExpires = null;

    await user.save({ validateModifiedOnly: true });

    sendToken(user, 200, "Account verified successfully", res);
});

// LOGIN
export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter email and password", 400));
    }

    const user = await User.findOne({ email, accountVerified: true }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
        return next(new ErrorHandler("Invalid email or password", 400));
    }

    sendToken(user, 200, "Login successful", res);
});

// LOGOUT
export const logout = catchAsyncError(async (req, res, next) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "Logged out successfully"
    });
});

// GET ALL USERS
export const getAllUsers = catchAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    });
});

export const getUser = catchAsyncError(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user
    });
})

// forget password
export const forgetPassword = catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({
        email: req.body.email,
        accountVerified: true
    });
    if (!user) {
        return next(new ErrorHandler("User not found with this email", 404));
    }
    const resetToken = user.generateResetPasswordToken();
    await user.save({ validateBeforSave: false });

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

    const message = `
    <h1>Reset Your Password</h1>
    <p>Click the link below to reset your password:</p>
    <a href="${resetPasswordUrl}" target="_blank">${resetPasswordUrl}</a>
    <p>This link is valid for 30 minutes.</p>
    `;

    try {
        await sendEmail({
            email: user.email,
            subject: "Password Reset Request",
            message
        });
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} with reset instructions`
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler("Email could not be sent. Try again later.", 500));
    }
});


export const resetPassword = catchAsyncError(async (req, res, next) => {
    const { token } = req.params;
    const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpires: { $gt: Date.now() }// gt means greater than
    });
    if (!user) {
        return next(new ErrorHandler("Reset password token is invalid or has expired", 400));
    }
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Passwords do not match", 400));
    }

    user.password = await req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    sendToken(user, 200, "Password reset successful", res);
})

