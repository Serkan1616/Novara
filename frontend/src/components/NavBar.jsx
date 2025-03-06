import React from "react";
import {
  Input
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import bagImage from '../assets/bag.png';


const NavBar = () => {
  return (

    <div className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 lg:px-4 lg:py-4 bg-transparent flex sm:flex-col md:flex-row lg:flex-row items-center  text-blue-gray-900 w-[250]  justify-center gap-10" >

      {/* <div ><FaCanadianMapleLeaf /></div> */}
      <div>
        <img
          src={bagImage}
          alt="Bag"
          className="w-10 h-10" // Width ve Height ile boyutlandırma
        />
      </div>

      <div className="relative min-w-[288px] flex items-center gap-3">
        {/* Search Icon */}
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-gray-300" />
        {/* Search Input */}
        <Input
          type="search"
          placeholder="Search"
          containerProps={{
            className: "w-full",
          }}
          className="pl-9 !border-t-blue-gray-300 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>



      <div className="flex  items-center justify-between gap-4">
        {/* Location Section */}
        <div className="grid grid-cols-[auto_1fr] items-center gap-2 border p-2 rounded-lg cursor-pointer hover:bg-gray-100">
          {/* Location Icon */}
          <MdLocationPin className="text-black-500 text-xl" />

          {/* Address Texts */}
          <div>
            <strong className="block text-sm">Delivery Address</strong>
            <span className="text-xs text-gray-500">Add Address</span>
          </div>
        </div>


        {/* User basket */}
        <a href="#" className="text-gray-700 text-xl">
          <SlBasket />
        </a>

        <div className="grid grid-cols-[auto_1fr] grid-rows-2 gap-x-2 items-center">
          {/* User Icon */}
          <FaUser className="text-gray-700 text-xl row-span-2" />

          {/* Hesabım Linki */}
          <a href="#" className="text-sm font-medium text-gray-800">
            Account
          </a>
          {/* Giriş Yap & Kayıt Ol Linkleri */}
          <div className="flex gap-2 text-xs text-gray-600">
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Register</a>
          </div>
        </div>
      </div>
    </div>



  );
}

export default NavBar