import React, { useEffect } from "react";
import asset from "../../assets/about/about_asset";
import AOS from "aos";

import SwiperSec from "./SwiperSec";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";


const Products_main = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div>
      <SwiperSec />
      <div className="px-5 flex w-full mt-10 gap-10">
        <div className="w-1/2">
          <Card1 />
        </div>
        <div className="w-1/2">
          <Card2 />
        </div>
      </div>
      <div className="px-5 flex flex-col w-full mt-26 gap-40">
        <div>
          <Card3 />
        </div>
        <div>
          <Card4 />
        </div>
      </div>






      {/* card 1 final */}
      {/* <div className=" w-full flex gap-50">
        <div>
          <div className="border h-10 w-90 flex rounded overflow-hidden shadow mt-5 mb-10 ">
            <div className="bg-gradient-to-l from-[#4286b9] to-[#75b8ec] w-28 h-full flex items-center justify-center text-white font-semibold">
              PRODUCTS
            </div>
            <div className="w-52 h-full flex items-center px-3 text-gray-700 font-medium">
              ertgyhuj
            </div>
          </div>
          <div className="border h-10 w-90 flex rounded overflow-hidden shadow mb-10 ">
            <div className="bg-gradient-to-l from-[#4286b9] to-[#75b8ec] w-28 h-full flex items-center justify-center text-white font-semibold">
              PRODUCTS
            </div>
            <div className="w-52 h-full flex items-center px-3 text-gray-700 font-medium">
              ertgyhuj
            </div>
          </div>
          <div className="border h-10 w-90 flex rounded overflow-hidden shadow mb-10 ">
            <div className="bg-gradient-to-l from-[#4286b9] to-[#75b8ec] w-28 h-full flex items-center justify-center text-white font-semibold">
              PRODUCTS
            </div>
            <div className="w-52 h-full flex items-center px-3 text-gray-700 font-medium">
              ertgyhuj
            </div>
          </div>
        </div>
      </div> */}


      {/* card 2 */}



        {/* card 2.2 */}


{/* 
        <div>
          <p className="relative font-bold text-7xl -rotate-90 -top-[948px] -left-[660px]" data-aos="fade-down">
            MEGA SALE
          </p>
        </div> */}
    </div >
  )
}

export default Products_main

{/* <div className="flex gap-40 relative">
          <hr className="border-t-3 w-[900px] mt-3" />
          <p className="uppercase font-semibold  ">Lorem ipsum dolor</p>
          <div className="-mt-2" data-aos="fade-right">
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
          </div>
        </div> */}

{/* Content */ }
{/* <div className="absolute w-full flex top-50 gap-30">
          <div className="mt-32 ml-[38px]" data-aos="fade-left">
            <li className="marker:text-3xl marker: txtcolor "></li>
            <li className="marker:text-3xl marker: txtcolor"></li>
            <li className="marker:text-3xl marker: txtcolor"></li>
            <li className="marker:text-3xl marker: txtcolor"></li>
            <li className="marker:text-3xl marker: txtcolor"></li>
            <li className="marker:text-3xl marker: txtcolor"></li>
          </div>

          {/* Text Section with AOS */}
{/* <div className="h-[350px]" data-aos="fade-up">
            <p className="text-6xl font-bold w-48 txtcolor">MAGA SALE</p>
            <p className="text-9xl font-bold txtcolor2">
              80<span className="text-3xl pb-5 txtcolor">% OFF</span>
            </p>
            <p className="text-5xl txtcolor">
              THIS MONTH <p className="font-bold txtcolor2">CATALOG</p>
            </p>
          </div> */}

{/* Image with animation
          <div data-aos="zoom-in" data-aos-delay="300">
            <img
              src={asset.about2}
              alt="Laptop"
              className="h-[350px] w-[450px] ml-[230px] hover:scale-105 transition-transform duration-500 rounded-sm"
            />
          </div> 
        </div> */}

{/* Bottom Section */ }

{/* <div>
          <p className="bg-black text-white font-semibold text-2xl w-90 text-end uppercase p-1 pe-4 mt-10">
            Lorem ipsum list
          </p>
          {/* <div class="relative min-h-screen w-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 overflow-hidden">
            <div class="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter  opacity-60 animate-pulse"></div>
            <div class="absolute top-40 right-20 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply filter  opacity-70 animate-float"></div>
            <div class="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-300 rounded-full mix-blend-multiply filter opacity-60 animate-bounce"></div>
            <div class="absolute bottom-10 right-1/3 w-36 h-36 bg-purple-200 rounded-full mix-blend-multiply filter  opacity-70 animate-pulse"></div>

            <div class="relative z-10 flex items-center justify-center h-screen">
              <h1 class="text-5xl font-bold text-gray-800">
                Mega Sale Catalog
              </h1>
            </div>
          </div> 
        </div>
        <div>
          <div className="border border-black mt-10 w-[40%] ml-auto">
          </div>
           <div className="text-end mt-12" data-aos="fade-right">
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
            <li className="marker:text-3xl marker: txtcolor2"></li>
          </div>
        </div> */}