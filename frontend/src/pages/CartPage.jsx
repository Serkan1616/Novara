import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from "@material-tailwind/react";
import NavBar from '../components/NavBar';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Footer from '../components/Footer';
import Cart from "../components/Cart";

const CartPage = () => {
    return (
        <div>
            <NavBar />
            <NavCategoryMenu />
            <Cart />
            <Footer />
        </div>
    );
};

export default CartPage;
