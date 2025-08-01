import Category from "../models/category.js";

// Create Category (admin only)
export const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Categories (public)
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({ message: "Success", categories });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Category (admin only)
export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.json({
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Category (admin only)
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
