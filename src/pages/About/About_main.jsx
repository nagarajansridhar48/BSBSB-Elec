import React, { useEffect } from 'react'
import About_head from './About_head'
import About_Sec from './About_Sec'
import Who_we from './Who_we';
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About_main = () => {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div >
<About_head/>
<About_Sec/> 
<Who_we/>
    </div>
  )
}

export default About_main