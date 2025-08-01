import express from "express";
import * as categoryController from "../controllers/categoryController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post("/", auth, categoryController.createCategory);
router.put("/:id", auth, categoryController.updateCategory);
router.delete("/:id", auth, categoryController.deleteCategory);

export default router;
