import React, { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { banner, experties, who } from '../../assets/asset';
import Banner from './Banner';
import Who from './Who';
import Exp from './Exp';

const Our_Services = lazy(() => import('./OurServices'));

const Home = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.init({
                duration: 800,
                once: true,
                easing: 'ease-out-cubic',
                offset: 120,
                delay: 100,
            });
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        [banner, experties, who].forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return (
        <>
            <Banner />
            <Who />
            <Exp />
            <Suspense fallback={<div>Loading services...</div>}>
                <Our_Services />
            </Suspense>
        </>
    );
};

export default Home;
