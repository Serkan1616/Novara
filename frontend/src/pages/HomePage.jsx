import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Recommandation from '../components/Recommandation';


const HomePage = () => {
  return (
    <div className='mx-[200px]'>
      {/* <NavBar /> */}
      <NavCategoryMenu />
      <Recommandation />

      <Link to="/Login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default HomePage