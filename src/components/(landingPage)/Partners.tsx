'use client'

import React from 'react'
import Image from "next/image";


function Partners() {
    return (
        <div className="animate-fade-up animate-once animate-ease-linear ">
            <div id="partners" className="grid gap-10 justify-center items-center  mt-10 sm:px-20 md:px-32 lg:px-52">
                <div className="flex justify-center text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold  animate-wiggle">
                        Our Partners
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:px-16 gap-10 md:gap-36 items-center overflow-x-auto whitespace-nowrap no-scrollbar">
                    <Image
                        src="/images/PPDC.png"
                        alt="PPDC Logo"
                        width={200}
                        height={200}
                        quality={100}
                    // className="h-auto w-60"
                    />
                    <Image
                        src="/images/USA.png"
                        alt="Us department Logo"
                        width={250}
                        height={250}
                        quality={100}
                    // className="h-auto w-60"
                    />
                    <Image
                        src="/images/Mac.png"
                        alt="Mac foundation"
                        width={300}
                        height={300}
                        quality={100}
                    // className="h-auto w-60"
                    />
                </div>
            </div>
        </div>
    )
}

export default Partners