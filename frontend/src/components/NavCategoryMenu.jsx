import React, { useState, useEffect, useRef } from "react";
import { FcElectronics } from "react-icons/fc";
import { FaBaby, FaCar, FaShopify, FaPersonCircleQuestion } from "react-icons/fa6";
import { IoLogoGameControllerB, IoMdWatch } from "react-icons/io";
import { MdOutlineSportsTennis } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";
import { Link } from 'react-router-dom';

const categories = [
    { name: "Fashion", icon: <FaShopify />, slug: "fashion" },
    { name: "Electronic", icon: <FcElectronics />, slug: "electronic" },
    { name: "Home & Life", icon: <SiHomebridge />, slug: "home-life" },
    { name: "Mother & Baby", icon: <FaBaby />, slug: "mother-baby" },
    { name: "Personal Care", icon: <FaPersonCircleQuestion />, slug: "personal-care" },
    { name: "Jewelry & Watches", icon: <IoMdWatch />, slug: "jewelry-watches" },
    { name: "Sports & Outdoors", icon: <MdOutlineSportsTennis />, slug: "sports-outdoors" },
    { name: "Book, Music, Movie, Game", icon: <IoLogoGameControllerB />, slug: "entertainment" },
    { name: "Automotive & Motorcycle", icon: <FaCar />, slug: "automotive" },
];

const NavCategoryMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <div className="bg-white/90 backdrop-blur-sm border-b mt-[88px]  md:mt-[20px]">
            <div className="py-5 relative flex items-center justify-center">
                {/* "Categories" butonu (Mobil ve Orta ekranlar için) */}
                <button
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={toggleSidebar}
                >
                    <span className="font-medium">Categories</span>
                </button>

                {/* Sidebar */}
                <div
                    ref={sidebarRef}
                    className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="p-4 space-y-4">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-xl text-gray-700 hover:text-gray-900 focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            &times;
                        </button>
                        <ul className="flex flex-col gap-3">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/category/${category.slug}`}
                                        className="w-full flex items-center gap-3 p-3 rounded-xl
                                            text-gray-700 hover:bg-gray-100 active:bg-gray-200
                                            transition-all duration-200"
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        <span className="text-xl">{category.icon}</span>
                                        <span className="font-medium">{category.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <nav className="py-2 hidden lg:block">
                    <ul className="max-w-7xl mx-auto flex justify-between gap-4 px-4">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link
                                    to={`/category/${category.slug}`}
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl
                                        hover:bg-gray-100 active:bg-gray-200 group
                                        transition-all duration-200 min-w-[100px]"
                                >
                                    <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                                        {category.icon}
                                    </span>
                                    <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
                                        {category.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavCategoryMenu;
