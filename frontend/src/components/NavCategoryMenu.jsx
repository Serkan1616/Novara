import React from "react";
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
    return (
        <nav className="bg-gray-100 py-2">
            <ul className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-3 px-4">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 bg-white rounded-md shadow-sm cursor-pointer text-sm hover:bg-gray-200 transition-all duration-150"
                    >
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-xs font-medium text-gray-700">{category.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavCategoryMenu;
