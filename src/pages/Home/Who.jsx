import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { who } from '../../assets/asset';
const Who = () => {
    return (
        <div className="bg-[#f9f9f9] py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div data-aos="fade-right" data-aos-delay="150">
                    <h2 className="text-[#4286b9] text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                        Who Are We?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="250">
                        At <span className="text-[#f3a933] font-semibold">BSBSB Electronics</span>,  we transcend the ordinary. We transform remote meetings into <strong>immersive, real-world experiences, using innovative audio-visual technology. </strong>.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4" data-aos="fade-up" data-aos-delay="350">
                        We are passionate about delivering top-tier solutions that make your ideas come to life.
                    </p>

                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="350">
                         Whether it's a conference room or a smart home, we specialize in<strong> creating high-end AV setups</strong> that redefine communication.</p>
                </div>
                <div data-aos="zoom-in-left" data-aos-delay="200">
                    <div
                        className="w-full h-64 sm:h-80 md:h-96 bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                        style={{ backgroundImage: `url(${who})` }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Who