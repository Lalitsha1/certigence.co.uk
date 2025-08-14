// server/routes/userRouter.js

import express from "express";
import {
  register,
  getAllUsers,
  verifyOTP,
  login,
  logout,
  getUser,
  forgetPassword,
  resetPassword,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

/**
 * @route   POST /api/v1/user/register
 * @desc    Register new user
 * @access  Public
 */
router.post("/register", register);

/**
 * @route   POST /api/v1/user/otp-verification
 * @desc    Verify OTP for email or phone verification
 * @access  Public
 */
router.post("/otp-verification", verifyOTP);

/**
 * @route   GET /api/v1/user/all
 * @desc    Get all users
 * @access  Public (You can restrict with auth later)
 */
router.get("/all", getAllUsers);

/**
 * @route   POST /api/v1/user/login
 * @desc    User login
 * @access  Public
 */
router.post("/login", login);

/**
 * @route   GET /api/v1/user/logout
 * @desc    Logout user
 * @access  Private
 */
router.get("/logout", isAuthenticated, logout);


router.get("/me", isAuthenticated, getUser)

router.post("/password/forgot", forgetPassword )


router.put("/password/reset/:token", resetPassword )


export default router;
