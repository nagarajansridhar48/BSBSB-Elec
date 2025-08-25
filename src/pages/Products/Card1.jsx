import React from 'react'
import asset from "../../assets/about/about_asset";
import AOS from "aos";

const Card1 = () => {

    return (
        <div className="w-full flex flex-col gap-10 justify-center items-center">
            {/* Top Text Section */}
            <div
                className="w-[80%]"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti mollitia officiis quam sapiente dolore reprehenderit.
                    Consequuntur debitis illum ipsa ipsam totam quis minus
                    perferendis amet! Nemo praesentium maxime omnis corporis
                    reprehenderit explicabo odio amet? Natus qui quod aspernatur
                    deserunt dolor, vitae provident ut incidunt odit quos eos!
                    Quisquam, autem nam.
                </p>
                <p className="uppercase font-bold text-2xl p-5">
                    Lorem ipsum dolor sit.
                </p>
            </div>

            {/* Image & Badge Section */}
            <div className="w-1/2 relative">
                {/* Image */}
                <img
                    src={asset.about1}
                    className="w-full h-60"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                />

                {/* Circular Badge */}
                <div
                    className="absolute h-20 w-20 rounded-full bg-black -top-5 left-66 flex items-center justify-center"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <p className="text-2xl text-white font-bold">20%</p>
                </div>

                {/* Product Box */}
                <div
                    className="border-2 border-black h-40 mt-5"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <div className="flex gap-10 items-center">
                        <div>
                            <p className="font-bold p-4">PRODUCTS</p>
                            <div className="border-1 w-[100%]"></div>
                        </div>
                        <div>
                            <p className="text-6xl -top-18 left-55 font-semibold txtcolor">
                                <sup className="text-4xl">$</sup>00,
                                <sup className="text-4xl">00</sup>
                            </p>
                        </div>
                    </div>
                    <div className="w-80 p-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Deleniti et dolores suscipi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1