import React from 'react'
import asset from "../../assets/about/about_asset";

const Card3 = () => {
    return (
        <div className="w-full gap-16 flex px-15">
            {/* Left Text Section */}
            <div className="w-1/2">
                <p
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full text-justify"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, fuga deserunt. Corrupti nemo tempora, quas dicta
                    deleniti id tempore officiis atque consequatur! Blanditiis
                    temporibus id laborum molestias praesentium incidunt in labore,
                    animi, odio autem facere. Enim sapiente aut a debitis iusto
                    voluptatibus blanditiis aperiam voluptates. Quaerat dolorem nam
                    beatae provident?
                </p>
                <p
                    className="pt-5 text-2xl font-semibold txtcolor"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                >
                    www.website.com
                </p>
            </div>

            {/* Right Product Section */}
            <div className="w-1/2">
                <div
                    className="relative border-2 h-40 w-96 top-18 left-40"
                    data-aos="zoom-in"
                    data-aos-duration="800"
                >
                    <div className="w-40 ml-54 p-2">
                        <p className="font-bold pt-2" data-aos="fade-down" data-aos-delay="200">
                            PRODUCTS
                        </p>
                        <p data-aos="fade-up" data-aos-delay="400">
                            Lorem, ipsum dolor sit amet consect adipisicing elit.
                        </p>
                    </div>

                    {/* Price */}
                    <div>
                        <p
                            className="absolute text-6xl -top-18 left-55 font-semibold txtcolor"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <sup className="text-4xl">$</sup>00,
                            <sup className="text-4xl">00</sup>
                        </p>
                    </div>

                    {/* Image */}
                    <div className="absolute -top-20 -left-20">
                        <img
                            src={asset.about2}
                            alt="something"
                            className="w-72 h-40 rounded-sm"
                            data-aos="fade-down-right"
                            data-aos-duration="1000"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card3