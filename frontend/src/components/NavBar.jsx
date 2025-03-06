import React from "react";
import { Input } from "@material-tailwind/react";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import bagImage from "../assets/bag.png";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={bagImage} alt="Bag Logo" className="w-10 h-10" />
          <span className="text-lg font-bold text-gray-800">ShopEase</span>
        </Link>

        {/* Search Bar - Gizlenebilir Mobilde */}
        <div className="hidden md:flex relative min-w-[300px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search products..."
            containerProps={{ className: "w-full" }}
            className="pl-9 border-gray-300 placeholder:text-gray-400 focus:border-blue-500"
          />
        </div>

        {/* Sağ Taraf - Butonlar */}
        <div className="flex items-center gap-4">

          {/* Location */}
          <div className="hidden lg:flex items-center gap-2 border px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <MdLocationPin className="text-gray-600 text-xl" />
            <div>
              <strong className="block text-sm">Delivery Address</strong>
              <span className="text-xs text-gray-500">Add Address</span>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="text-gray-700 text-xl border p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <SlBasket />
          </Link>

          {/* Account - Mobilde Menü Olacak */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-gray-800 text-lg border px-3 py-2 rounded-lg hover:bg-gray-100">
              <FaUser />
              <span className="hidden md:inline">Account</span>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Link to="/login" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Login
              </Link>
              <Link to="/register" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Register
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Mobil için Arama Çubuğu */}
      <div className="md:hidden mt-4 px-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            containerProps={{ className: "w-full" }}
            className="pl-9 border-gray-300 placeholder:text-gray-400 focus:border-blue-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
