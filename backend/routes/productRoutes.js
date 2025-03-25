import express from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", getProducts); // Fetch all products
router.get("/:id", getProductById); // Fetch a single product
router.post("/", createProduct); // Add a new product
router.put("/:id", updateProduct); // Update a product
router.delete("/:id", deleteProduct); // Delete a product

router.get('/category/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const products = await Product.find({ category: category });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
