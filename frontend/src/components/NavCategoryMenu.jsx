import React, { useState, useEffect, useRef } from "react";
import { FcElectronics } from "react-icons/fc";
import { FaBaby, FaCar, FaShopify, FaPersonCircleQuestion } from "react-icons/fa6";
import { IoLogoGameControllerB, IoMdWatch } from "react-icons/io";
import { MdOutlineSportsTennis } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";

const categories = [
    { name: "Fashion", icon: <FaShopify /> },
    { name: "Electronic", icon: <FcElectronics /> },
    { name: "Home & Life", icon: <SiHomebridge /> },
    { name: "Mother & Baby", icon: <FaBaby /> },
    { name: "Personal Care", icon: <FaPersonCircleQuestion /> },
    { name: "Jewelry & Watches", icon: <IoMdWatch /> },
    { name: "Sports & Outdoors", icon: <MdOutlineSportsTennis /> },
    { name: "Book, Music, Movie, Game", icon: <IoLogoGameControllerB /> },
    { name: "Automotive & Motorcycle", icon: <FaCar /> },
];

const NavCategoryMenu = () => {
    // Sidebar'ın görünürlüğünü kontrol eden state
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Sidebar açma/kapama fonksiyonu
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Sidebar dışında bir yere tıklanıp tıklanmadığını kontrol etmek için useRef kullanıyoruz.
    const sidebarRef = useRef(null);

    useEffect(() => {
        // Eğer sidebar açık ise, dışarıya tıklanma olayını kontrol ediyoruz
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false); // Sidebar dışına tıklanırsa sidebar kapanır
            }
        };

        // Event listener'ı component mount olduktan sonra ekliyoruz
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup function: component unmount olduğunda event listener'ı temizliyoruz
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <div>
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
                    className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
                        isSidebarOpen ? "translate-x-0" : "translate-x-full"
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
                                <li
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-3 bg-white rounded-md shadow-sm cursor-pointer text-sm hover:bg-gray-200 transition-all duration-200 ease-in-out"
                                >
                                    <span className="text-lg">{category.icon}</span>
                                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* <nav className="bg-gray-100 py-2 hidden lg:block"> */}
                {/* Kategoriler (Yalnızca large ekranlar için) */}
                <nav className="py-2 hidden lg:block">
                    <ul className="max-w-7xl mx-auto flex justify-between gap-4 px-4">
                        {categories.map((category, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-center justify-center gap-2 px-3 py-2 bg-white rounded-md shadow-sm cursor-pointer text-sm hover:bg-gray-200 transition-all duration-200 ease-in-out"
                            >
                                <span className="text-2xl">{category.icon}</span>
                                <span className="text-sm font-medium text-gray-700">{category.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavCategoryMenu;
