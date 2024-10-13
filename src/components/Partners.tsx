'use client'

import React from 'react'
import Image from "next/image";
import USAID from "/public/svg/USAID INL.svg";
import MACART from "/public/svg/MACART.svg";


function Partners() {
    return (
        <div id="partners" className="grid gap-10 justify-center items-center p-10 sm:px-20 md:px-32 lg:px-52">
            <div className="flex justify-center text-center">
                <div className="px-4 p-3 text-black text-xl sm:text-3xl font-semibold">
                    Our Partners
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:px-16 gap-10 md:gap-36 items-center overflow-x-auto whitespace-nowrap no-scrollbar">
                <Image
                    src="/images/PPDC Logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="h-auto w-40"
                />
                <USAID />
                <MACART />
            </div>
        </div>


    )
}

export default Partners