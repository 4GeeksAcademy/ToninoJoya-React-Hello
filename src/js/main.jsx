import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { Navbar } from './components/Navbar';
import { Cards } from './components/Cards';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Home/>
    <Cards/>
  </>
)
