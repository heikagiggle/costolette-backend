import express from "express";

import auth from "../middleware/auth.js";
import {
  registerUser,
  adminLogin,
  getUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", adminLogin);
router.get("/me", auth, getUserProfile);

export default router;
