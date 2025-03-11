import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

// card cardHeader cardBody cardFooter ekle

const ProductCard = () => {
    return (
        <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
            <div className="card flex flex-col items-center justify-center rounded-2xl cursor-pointer shadow-[3px_3px_10px_rgba(0,0,0,0.1)] hover:shadow-[10px_10px_10px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                <div className="cardHeader w-full h-40 sm:h-60 relative rounded-t-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                        alt="card-image"
                        className="h-full w-full object-cover rounded-2xl"
                    />
                </div>
                <div className="cardBody flex flex-col items-center justify-center">
                    <div className="my-2 sm:my-4 flex items-center justify-center text-xl sm:text-2xl cursor-pointer">
                        <h4 className="text-gray-900 hover:text-gray-500">Apple AirPods</h4>
                    </div>
                    <div className="m-2 sm:m-3">
                        <p className="text-sm sm:text-lg">With plenty of talk and listen time...</p>
                    </div>
                    <div className="flex flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2 sm:space-x-3 text-yellow-500 mb-2 sm:mb-4">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                        </div>
                    </div>
                </div>
                <div className="test flex items-center justify-between gap-8">
                    <p className="mr-2 sm:mr-5 text-sm sm:text-base"> $95.00</p>
                    <button className="bg-gray-500 hover:bg-gray-200 hover:ease-in-out p-2 sm:p-5 m-1 sm:m-2 rounded-lg cursor-pointer text-xs sm:text-base">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;