// server/utils/sendToken.js

export const sendToken = async (user, statusCode, message, res) => {
  const token = await user.generateToken();

  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000), // Days to ms
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "Strict",
    })
    .json({
      success: true,
      message,
      token,
      user,
    });
};
