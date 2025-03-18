import React from "react";
import { Link } from "react-router-dom";

const SimilarProductCard = ({ product }) => {
    return (
        <Link
            to={`/product/${product._id}`}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
        >
            <img
                src={"../src" + product.image}
                alt={product.name}
                className="w-16 h-16 object-contain rounded-md"
            />
            <div>
                <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-500">${product.price}</p>
            </div>
        </Link>
    );
};

export default SimilarProductCard;
