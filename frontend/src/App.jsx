import React, { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App
