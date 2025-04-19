'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const slides = [
  {
    img: '/home/ac-rent.webp',
    title: 'AC On Rent',
    desc: 'Best quality AC available for rent in your budget.',
  },
  {
    img: '/home/ac-repair.webp',
    title: 'AC Repair',
    desc: 'Quick and reliable AC repair service at your doorstep.',
  },
  {
    img: '/home/washing-repair.webp',
    title: 'Washing Machine Repair',
    desc: 'Affordable washing machine repairs by experts.',
  },
];

export default function HeroCarousel() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-[220px] sm:h-[60vh] md:h-[80vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4 bg-black/50 p-2 sm:p-4 rounded-md">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-lg md:text-xl bg-black/40 p-2 sm:p-4 rounded-md max-w-md">
                {slide.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}

        {/* Left Arrow */}
        <IconButton className="custom-prev !absolute top-1/2 left-2 z-10 bg-black/40 text-white hover:bg-black hidden sm:flex">
          <ArrowBackIos />
        </IconButton>

        {/* Right Arrow */}
        <IconButton className="custom-next !absolute top-1/2 right-2 z-10 bg-black/40 text-white hover:bg-black hidden sm:flex">
          <ArrowForwardIos />
        </IconButton>
      </Swiper>
    </div>
  );
}
