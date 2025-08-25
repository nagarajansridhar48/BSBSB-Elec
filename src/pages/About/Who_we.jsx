import React from "react";
import { motion } from "framer-motion";
import about_asset from "../../assets/about/about_asset";

const Who_we = () => {
    const features = [
        {
            image: about_asset.about4,
            title: "Commercial Displays",
            desc: "Interactive OLED displays for impactful marketing and real-time experiences.",
        },
        {
            image: about_asset.about2,
            title: "Indoor & Outdoor LEDs",
            desc: "Make your business brighter with advanced LED solutions.",
        },
        {
            image: about_asset.about3,
            title: "Video Conferencing",
            desc: "High-quality cameras, speakers, and microphones for seamless collaboration.",
        },
        {
            image: about_asset.about5,
            title: "Commercial ACs",
            desc: "Top-rated consumer and commercial air conditioners for all needs.",
        },
    ];

    return (
        <div className="w-full py-16 px-6 flex flex-col items-center text-center">
            {/* Section Heading */}
            <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
                data-aos="fade-down"
            >
                Our Products
            </h2>
            <p
                className="mt-4 max-w-2xl text-gray-600 text-sm sm:text-base"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Explore our cutting-edge solutions designed to elevate your business.
            </p>

            {/* Product Cards */}
            <div
                className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl"
                data-aos="zoom-in-up"
                data-aos-delay="300"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white h-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Image Section */}
                        <div className="w-full h-52 sm:h-54 bg-gray-200 overflow-hidden">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Content Section */}
                        <motion.div
                            className="flex flex-col justify-between flex-grow bg-gradient-to-r from-[#f3a933] to-[#f08c2e] p-5 text-white text-center"
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        >
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed opacity-90">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                ))}
            </div>
        </div>
    );
};

export default Who_we;
