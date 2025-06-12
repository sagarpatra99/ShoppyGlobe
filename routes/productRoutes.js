import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// GET /products - Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from MongoDB
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.post("/", (req, res) => {
  const { name, price, description, category } = req.body;

  if (!name || !price || !description || !category) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  // You would normally save to DB here. For now, return success message.
  res.status(201).json({ message: "Product created", product: req.body });
});

export default router;
