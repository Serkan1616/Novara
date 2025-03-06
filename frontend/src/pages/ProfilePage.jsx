import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from "@material-tailwind/react";
import NavBar from '../components/NavBar';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Footer from '../components/Footer';
import Profile from "../components/Profile";

const ProfilPage = () => {
    return (
        <div>
            <NavBar />
            <NavCategoryMenu />
            <Profile />
            <Footer />
        </div>
    );
};

export default ProfilPage;
