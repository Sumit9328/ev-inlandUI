'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
  {
    name: 'Hindustan Zinc',
    image: '/clients/hindustan-zinc.png',
  },
  {
    name: 'Rentokil 1',
    image: '/clients/rentokil.png',
  },
  {
    name: 'Rentokil 2',
    image: '/clients/rentokil.png',
  },
  {
    name: 'Rentokil 3',
    image: '/clients/rentokil.png',
  },
  {
    name: 'Rentokil 4',
    image: '/clients/rentokil.png',
  },
  {
    name: 'Rentokil 5',
    image: '/clients/rentokil.png',
  },
];

export default function ClientSlider() {
  return (
    <div className="bg-gray-100 py-28 px-4 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-8">
        Our Amazing Clients
      </h2>

      <div className="relative sm:block hidden">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={2} // Default for mobile
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1, // For screens 640px and up
            },
            768: {
              slidesPerView: 3, // For screens 768px and up
            },
            1024: {
              slidesPerView: 4, // For larger screens
            },
          }}
          className="!px-10"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md p-6 w-60 h-60 mx-auto flex items-center justify-center rounded">
                <Image
                  src="/assets/images/HZL_Logo.png"
                  alt={client.name}
                  width={300}
                  height={80}
                  className="w-304 h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

         <div className="relative sm:hidden block">
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1, // For screens 640px and up
            },
            768: {
              slidesPerView: 3, // For screens 768px and up
            },
            1024: {
              slidesPerView: 4, // For larger screens
            },
          }}
          className="!px-10"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md p-6 w-60 h-60 mx-auto flex items-center justify-center rounded">
                <Image
                  src="/assets/images/HZL_Logo.png"
                  alt={client.name}
                  width={300}
                  height={80}
                  className="w-304 h-auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
