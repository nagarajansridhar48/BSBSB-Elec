import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { banner } from '../../assets/asset'

const Banner = () => {
    return (

        <div className="relative h-screen w-full overflow-hidden" data-aos="fade-in" data-aos-delay="100">
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/10 z-10" />

            <img
                src={banner}
                alt="Hero Banner"
                className="w-full h-full object-cover z-0"
                loading="eager"
            />

        </div>
    )
}

export default Banner