import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import NavCategoryMenu from '../components/NavCategoryMenu';

const HomePage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <NavCategoryMenu />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <Link to="/Login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  )
}

export default HomePage