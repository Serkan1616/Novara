import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Recommandation from '../components/Recommandation';

import CarouselCustomNavigation from '../components/CarouselCustomNavigation';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import LimitedTimeOffers from '../components/LimitedTimeOffers';


const HomePage = () => {
  return (

    <div>
      <div>
        <NavBar />
        <NavCategoryMenu />
      </div>
      <div >
        <CarouselCustomNavigation />
        <LimitedTimeOffers />
        <Recommandation />
        <ProductList />
        <Footer />
      </div>

    </div>
  )
}

export default HomePage