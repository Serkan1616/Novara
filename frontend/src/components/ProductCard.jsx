import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const renderRatingStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const totalStars = [];

        for (let i = 0; i < fullStars; i++) {
            totalStars.push(<FaStar key={`full-${i}`} />);
        }

        if (halfStar) {
            totalStars.push(<FaStarHalf key="half" />);
        }

        return totalStars;
    };

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        // 🔹 `_id` alanını kontrol edelim çünkü ürün verisi bu alanı içeriyor
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
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <div className="card h-[450px] flex flex-col rounded-2xl cursor-pointer shadow-[3px_3px_10px_rgba(0,0,0,0.1)] hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out">
                <Link to={`/product/${product._id}`}>
                    <div className="w-full h-48 flex-shrink-0 rounded-t-2xl">
                        <img
                            src={"src" + product.image || defaultImage}
                            alt={product.name}
                            className="w-full h-full object-contain rounded-t-2xl"
                        />
                    </div>
                </Link>

                <div className="flex-1 flex flex-col p-4">
                    <div className="h-14 mb-2">
                        <h4 className="text-gray-900 hover:text-gray-500 text-lg font-medium line-clamp-2">
                            {product.name}
                        </h4>
                    </div>

                    <div className="h-12 mb-2">
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                        </p>
                    </div>

                    <div className="h-6 flex items-center text-yellow-400 mb-2">
                        {renderRatingStars(product.rating)}
                    </div>

                    <div className="h-12 mt-auto flex items-center justify-between">
                        <p className="text-lg font-semibold">${product.price}</p>
                        <button
                            onClick={handleAddToCart}
                            className="bg-gray-500 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm text-white hover:text-gray-800 transition duration-200"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
