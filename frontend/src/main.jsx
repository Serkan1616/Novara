import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'; // React Router'ı import ediyoruz


createRoot(document.getElementById('root')).render(
  <Router>
    <App /> 
  </Router>,
)
