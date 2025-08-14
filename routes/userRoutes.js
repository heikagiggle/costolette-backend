import express from "express";

import auth from "../middleware/auth.js";
import {
  registerUser,
  adminLogin,
  getUserProfile,
  sendOtp,
  verifyOtp,
  resetPasswordWithOtp,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", adminLogin);
router.get("/me", auth, getUserProfile);
router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPasswordWithOtp);

export default router;
