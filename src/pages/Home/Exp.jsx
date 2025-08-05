import React from 'react'
import { experties } from '../../assets/asset'

const Exp = () => {
    return (
        <div
            className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${experties})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/60 z-10" />
            <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6">
                <div
                    className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 max-w-3xl text-center shadow-2xl transform transition-all duration-700 hover:scale-[1.02] hover:backdrop-blur-md hover:shadow-3xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#f3a933] uppercase tracking-wide mb-4 drop-shadow-md">
                        Our Expertise
                    </h2>
                    <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                        Our mission is to revolutionize your workspace by providing the highest-quality AV solutions.
                        We empower innovators to connect, collaborate, and share ideas seamlessly. From
                        <span className="text-[#4286b9] font-medium"> boardrooms to training rooms </span>
                        we design spaces that enable better communication through
                        <span className="text-[#f3a933] font-medium"> dynamic audio-visual technology</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Exp