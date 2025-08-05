import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logo } from '../assets/asset';

const navLinkClass =
    "relative text-lg text-black after:content-[''] hover:text-amber-500 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full";

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="bg-white/40 backdrop-blur-2xl w-full h-20 flex items-center justify-center shadow sticky top-0 z-50">
            <nav className="w-full flex items-center justify-between px-6" aria-label="Main navigation">
                <Link to="/">
                    <img src={logo} alt="Company Logo" className="lg:w-[250px] w-[180px] h-auto" />
                </Link>
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    <Link className={navLinkClass} to="/">Home</Link>
                    <Link className={navLinkClass} to="/about">About</Link>
                    <Link className={navLinkClass} to="/product">Product</Link>
                    <Link className={navLinkClass} to="/contact">Contact</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
