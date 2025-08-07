import React from 'react';

const About_head = () => {
    return (
        <>
        {/* first */}
        <div className="relative min-h-[300px] w-full overflow-hidden">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f3a933] via-[#f8d56e] to-[#4286b9] opacity-90"></div>

            {/* Diagonal stripes */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat bg-[length:40px_40px]"
                    style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)' }}>
                </div>
            </div>

            {/* Geometric pattern */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#e6c15c] rounded-full mix-blend-multiply opacity-30"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#3a7aad] transform rotate-45 mix-blend-multiply opacity-30"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-[#f3a933] transform -skew-y-12 mix-blend-multiply opacity-20"></div>

            {/* Text elements */}
            <div className="relative z-10 p-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
                    LOREM IFSURD GELOR
                </h1>
                <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-widest">
                    SIT AMET SED DIAM
                </h2>
            </div>

            {/* Subtle particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            backgroundColor: i % 3 === 0 ? '#f3a933' : i % 3 === 1 ? '#4286b9' : '#ffffff',
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.4 + 0.1,
                        }}
                    ></div>
                ))}
            </div>
        </div>
        {/* second */}

        </>
    )
}

export default About_head