'use client'

import React from 'react'
function Hero() {
    return (
        <div className="grid gap-10 justify-center items-center p-10 sm:p-20 md:p-32 lg:p-52">
            <p className="text-sm sm:text-md md:text-lg lg:text-xl text-white text-center">
                The new standard for recording court proceedings across Africa
            </p>
            <h2 className="font-bold text-2xl sm:text-4xl md:text-6xl lg:text-[64px]  mx-6 sm:mx-8 text-white text-center">
                Simplifying Court proceedings with Seamless Transcription
            </h2>
            <div className="flex justify-center text-center">
                <div className="rounded-lg px-4 p-3 bg-white text-black text-sm">
                    Book a Demo
                </div>
            </div>
        </div>
    )
}
export default Hero