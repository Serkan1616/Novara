import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from "@material-tailwind/react";
import NavBar from '../components/NavBar';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Footer from '../components/Footer';
import Address from "../components/Adress";

const AddresPage = () => {
    return (
        <div>
            <NavBar />
            <NavCategoryMenu />
            <Address />
            <Footer />
        </div>
    );
};

export default AddresPage;
