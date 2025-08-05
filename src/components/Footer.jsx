import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div className="relative w-full text-white py-10 bg-black/90 selection:!bg-blue-600">
            <div className="absolute inset-0 backdrop-blur-2xl z-0"></div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div className='text-center'>
                    <h1 className="text-4xl font-bold tracking-wide mb-1">BSBSB</h1>
                    <p className="text-sm text-gray-400">Empowering Connections Through Technology</p>
                </div>
                <ul className="flex flex-wrap justify-center gap-6 text-base text-[20px]">
                    <li><Link to="/" className="hover:text-amber-400 transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-amber-400 transition">About</Link></li>
                    <li><Link to="/product" className="hover:text-amber-400 transition">Product</Link></li>
                    <li><Link to="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
                </ul>
                <p className="text-sm text-gray-400">© 2025 BSBSB. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer