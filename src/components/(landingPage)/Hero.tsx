'use client'

import React from 'react'
function Hero() {
    return (
        <div className="gap-4 grid justify-center items-center py-48 h-[700px]">
            <p className="text-md sm:text-md md:text-lg lg:text-xl text-white text-center">
                {/* <p className="text-sm md:text-base lg:text-lg text-white text-center"> */}
                The new standard for recording court proceedings across Africa
            </p>
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]  text-white text-center">
                Simplifying <span className='text-customGreen'> Court Proceeding </span>  <br /> with AI Seamless Transcription
            </h2>
            <div className="flex justify-center text-center">
                <div className="rounded-lg px-4 p-4 bg-white text-black text-md font-semibold">
                    Book a Demo
                </div>
            </div>
        </div>
    )
}
export default Hero