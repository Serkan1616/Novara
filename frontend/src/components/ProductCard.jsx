import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const ProductCard = ({ product }) => {
    // Helper function to display rating stars
    const renderRatingStars = (rating) => {
        const fullStars = Math.floor(rating); // Number of full stars
        const halfStar = rating % 1 !== 0; // Check if there's a half star
        const totalStars = [];

        // Push full stars
        for (let i = 0; i < fullStars; i++) {
            totalStars.push(<FaStar key={`full-${i}`} />);
        }

        // Push half star if exists
        if (halfStar) {
            totalStars.push(<FaStarHalf key="half" />);
        }

        // Return the full set of stars
        return totalStars;
    };

    // Helper function to truncate text
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <div className="card h-[450px] flex flex-col rounded-2xl cursor-pointer shadow-[3px_3px_10px_rgba(0,0,0,0.1)] hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out">
                {/* Product Image - Fixed height */}
                <div className="w-full h-48 flex-shrink-0 rounded-t-2xl">
                    <img
                        src={"src" + product.image || defaultImage}
                        alt={product.name}
                        className="w-full h-full object-contain rounded-t-2xl"
                    />
                </div>

                {/* Product Details - Flex grow to fill space */}
                <div className="flex-1 flex flex-col p-4">
                    {/* Title - Fixed height */}
                    <div className="h-14 mb-2">
                        <h4 className="text-gray-900 hover:text-gray-500 text-lg font-medium line-clamp-2">
                            {product.name}
                        </h4>
                    </div>
                    
                    {/* Description - Fixed height */}
                    <div className="h-12 mb-2">
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                        </p>
                    </div>

                    {/* Rating - Fixed height */}
                    <div className="h-6 flex items-center text-yellow-400 mb-2">
                        {renderRatingStars(product.rating)}
                    </div>
                    
                    {/* Price and Button - Fixed height */}
                    <div className="h-12 mt-auto flex items-center justify-between">
                        <p className="text-lg font-semibold">${product.price}</p>
                        <button className="bg-gray-500 hover:bg-gray-200 px-3 py-2 rounded-lg text-sm text-white hover:text-gray-800 transition duration-200">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
