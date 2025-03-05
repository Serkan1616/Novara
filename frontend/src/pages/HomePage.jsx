import React from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>


      <Link to="/Login">Login</Link>
      <Link to="/register">Register</Link>
    </>
  )
}

export default HomePage