import React, { useState, Suspense } from 'react';
import { useTransition, animated, config } from '@react-spring/web';
import { Conference_Rooms, Meeting_Rooms, Training_Rooms } from '../../assets/asset'; // make sure image paths are correct

const cardsData = [
  {
    id: 1,
    title: "Huddle Spaces",
    description: "Smart, tech-enabled zones for quick collaboration.",
    image: Conference_Rooms,
  },
  {
    id: 2,
    title: "Conference Rooms",
    description: "Professional AV-equipped spaces for meetings.",
    image: Meeting_Rooms,
  },
  {
    id: 3,
    title: "Training Rooms",
    description: "Modern spaces for seminars and learning sessions.",
    image: Training_Rooms,
  },
  {
    id: 4,
    title: "Experience Zones",
    description: "Immersive zones for demos and customer engagement.",
    image: Conference_Rooms,
  },
  {
    id: 5,
    title: "Breakout Areas",
    description: "Casual spaces for informal team discussions.",
    image: Meeting_Rooms,
  },
  {
    id: 6,
    title: "Board Rooms",
    description: "Premium setups for strategic meetings.",
    image: Training_Rooms,
  },
  {
    id: 7,
    title: "Collab Pods",
    description: "Private mini pods for focused group work.",
    image: Conference_Rooms,
  },
  {
    id: 8,
    title: "Innovation Labs",
    description: "Spaces crafted for brainstorming and prototyping.",
    image: Meeting_Rooms,
  },
];

export default function AnimatedCards() {
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleItems = cardsData.slice(0, visibleCount);

  const transition = useTransition(visibleItems, {
    keys: item => item.id,
    from: { opacity: 0, transform: 'scale(0.95) translateY(30px)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0px)' },
    leave: { opacity: 0, transform: 'scale(0.9) translateY(-20px)' },
    trail: 80,
    config: config.gentle,
  });

  const handleViewMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, cardsData.length));
  };

  return (
    <div className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#4286b9] text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8 md:mb-12" data-aos="fade-up">
          What We Offer
        </h2>
        <div data-aos="fade-up" data-aos-delay="200">
          <Suspense fallback={<div className="text-center py-12">Loading services...</div>}>
            <div className="relative w-full text-center px-4 txtcolor">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
                {transition((style, item) => (
                  <animated.div
                    key={item.id}
                    style={style}
                    className="aspect-square rounded-2xl overflow-hidden shadow-xl relative"
                  >
                    <div
                      style={{ backgroundImage: `url(${item.image})` }}
                      className="absolute inset-0 bg-cover bg-center"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 flex flex-col justify-end h-full p-4">
                      <div className="bg-white/90 p-4 rounded-xl shadow backdrop-blur">
                        <h1 className="text-black text-xl font-bold">{item.title}</h1>
                        <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </animated.div>
                ))}
              </div>

              {visibleCount < cardsData.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleViewMore}
                    className="relative inline-block px-6 cursor-pointer py-3 text-base font-semibold text-white bg-gradient-to-r from-[#4286b9] to-[#f3a933] rounded-lg overflow-hidden shadow-md transition-all duration-300 group"
                  >
                    <span className="relative z-10">View More</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-0 h-full bg-white/10 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                  </button>
                </div>
              )}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
