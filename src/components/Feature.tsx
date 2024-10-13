'use client'
import React from 'react'
import Product from '@/components/product';
import Mic from "/public/svg/Mic.svg";
import Star from "/public/svg/Star.svg";
import People from "/public/svg/People.svg";



import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

function Feature() {
    return (
        <div id="feature">
            <div className="grid gap-10 justify-center items-center sm:p-10 md:px-32 lg:px-52">
                <div className="flex justify-center text-center">
                    <div className="rounded-full px-4 p-3 bg-customGreen   text-white text-sm">
                        Our Features
                    </div>
                </div>
                <div className="xl:text-5xl md:text-4xl sm:text-3xl text-xl tracking-wide leading-relaxed antialiased  text-center font-semibold ">
                    Dependable Solutions for Accurate and Efficient Courtroom Documentation.
                </div>
            </div>

            <div className="items-center mt-8 justify-between mx-10 flex ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 70,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 70,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Product svg={<Mic />} description="Clear audio with no background noise & enhanced sound." headline="High Quality audio recording" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product svg={<Star />} description="Achieve 95% transcription accuracy through multiple speakers." headline="AI Generated transcription" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product svg={<People />} description="Isolate audio by speaker to ensure precise transcription." headline="Speaker differentiation" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Feature