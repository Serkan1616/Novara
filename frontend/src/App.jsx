import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AddresPage from './pages/AddressPage';
import ProfilPage from './pages/ProfilePage';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/address" element={<AddresPage />} />
        <Route path="/profile" element={<ProfilPage />} />
      </Routes>
    </div>
  );
}

export default App
