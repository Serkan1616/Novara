import React from "react";
import { FcElectronics } from "react-icons/fc";
import { FaBaby } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { MdOutlineSportsTennis } from "react-icons/md";
import { IoMdWatch } from "react-icons/io";
import { SiHomebridge } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";

const NavCategoryMenu = () => {

    return (
        <>
            <div>
                <ul className="flex flex-row sm:flex-col md:flex-row lg-flex-row xl:flex-row  2xl:flex-row items-center justify-between p-4 bg-gray-200 gap-5">
                    <li className="flex flex-row "><FaShopify className="mx-1"/>
                    Fashion</li>
                    <li className="flex items-center flex-row"><FcElectronics  className="mx-1"/>Electronic</li>
                    <li className="flex items-center flex-row"><SiHomebridge className="mx-1"/>
                    Home & Life</li>
                    <li className="flex items-center  flex-row"><FaBaby className="mx-1"/>Mother & Baby</li>
                    <li className="flex items-center flex-row"><FaPersonCircleQuestion className="mx-1"/>
                    Personal Care</li>
                    <li className="flex items-center flex-row"><IoMdWatch className="mx-1"/>
                    Jewelry & Watches</li>
                    <li className="flex items-center flex-row"><MdOutlineSportsTennis className="mx-1"/>
                    Sports & Outdoors</li>
                    <li className="flex items-center flex-row"><IoLogoGameControllerB className="mx-1"/>
                    Book, Music, Movie, Game</li>
                    <li className="flex items-center flex-row"><FaCar className="mx-1"/>Automotive & Motorcycle</li>
                </ul>
            </div>

        </>
    );
}

export default NavCategoryMenu;