import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, default: 0, min: 0, max: 5 },
    category: { type: String, required: true },
    countInStock: { type: Number, required: true, default: 0 },
}, { timestamps: true });


// Product
const Product = mongoose.model("Product", productSchema);

export default Product;