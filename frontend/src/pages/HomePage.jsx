import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Recommandation from '../components/Recommandation';

import CarouselCustomNavigation from '../components/CarouselCustomNavigation';
import Footer from '../components/Footer';


const HomePage = () => {
  return (

    <div className='mx-[200px]'>
      <NavBar />
      <NavCategoryMenu />
      <CarouselCustomNavigation />
      <Recommandation />
      <Footer />
    </div>
  )
}

export default HomePage