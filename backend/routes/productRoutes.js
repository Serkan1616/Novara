import express from "express";
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts); // Fetch all products
router.get("/:id", getProductById); // Fetch a single product
router.post("/", createProduct); // Add a new product
router.put("/:id", updateProduct); // Update a product
router.delete("/:id", deleteProduct); // Delete a product

export default router;
