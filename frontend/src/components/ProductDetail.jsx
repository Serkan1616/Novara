import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetail = ({ product }) => {
    // 🛒 Sepete Ekleme Fonksiyonu
    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const productExists = existingCart.find(item => item._id === product._id);

        if (productExists) {
            productExists.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(existingCart));

        alert(`"${product.name}" has been added to your cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 my-0">

            {/* Ürün Görseli */}
            <div className="flex justify-center">
                <img
                    src={"../src" + product.image || defaultImage}
                    alt={product.name}
                    className="w-full max-h-[500px] object-contain rounded-lg shadow-md"
                />
            </div>

            {/* Ürün Bilgileri */}
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-700">Description</h2>
                    <p className="text-md text-gray-600 mt-2">{product.description}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-700">Category</h2>
                    <p className="text-md text-gray-600 mt-2">{product.category || 'Uncategorized'}</p>
                </div>

                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-black-500">${product.price}</p>

                    {/* Sepete Ekle Butonu */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-gray-500 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm text-white hover:text-gray-800 transition duration-200"
                    >
                        <FaShoppingCart className="text-lg " />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
