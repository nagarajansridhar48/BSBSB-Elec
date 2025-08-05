import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { logo } from '../assets/asset';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Main_Landing = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer/>            
        </div>
  )
}

export default Main_Landing