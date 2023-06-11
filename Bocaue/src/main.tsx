import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import './index.css'
import Tourist from './components/Tourist.tsx'
import App from './App.tsx'
import Products from './components/Products.tsx'
import Festival from './components/Festivals.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar/>
    <Tourist/>
    <Products/>
    <Festival/>
  </React.StrictMode>,
)
