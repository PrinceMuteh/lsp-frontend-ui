'use client'

import React from 'react';
import Facebook from "/public/svg/Facebook.svg";
import Twitter from "/public/svg/Twitter.svg";
import Linkedin from "/public/svg/Linkedin.svg";
import Instagram from "/public/svg/Instagram.svg";
import Image from "next/image";

function Footer() {
    return (
        <footer className="flex justify-center  items-center">
            <div className='gap-10  py-20 w-4/5 flex flex-wrap justify-between'>

                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-white">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <Image
                                src="/images/logo2.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="h-auto w-10"
                            />
                            <p className="text-t-14 mt-5">Copyright 2024 Devons tech. All rights reserved.</p>
                        </div>
                        <div className="flex flex-row gap-6 mt-10">
                            <Facebook />
                            <Instagram />
                            <Linkedin />
                            <Twitter />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-white">
                    <div className="grid grid-cols-1 gap-3">
                        <p className="font-semibold text-t-16">Features</p>
                        <p className="text-t-14 mt-2">Record Audio</p>
                        <p className="text-t-14">AI Transcription</p>
                        <p className="text-t-14">Speaker differentiation</p>
                        <p className="text-t-14">CCTV Video recording</p>
                    </div>
                </div>
                <div className="w-full md:w-1/5 mb-6 md:mb-0 text-white">
                    <div className="grid grid-cols-1 gap-3">
                        <p className="font-semibold text-t-16">Company</p>
                        <p className="text-t-14 mt-2">About us</p>
                        <p className="text-t-14">FAQs</p>
                        <p className="text-t-14">Book a demo</p>
                    </div>
                </div>
                <div className="w-full md:w-1/5 text-white">
                    <div className="grid grid-cols-1 gap-3">
                        <p className="font-semibold text-t-16">Legal</p>
                        <p className="text-t-14 mt-2">Terms and condition</p>
                        <p className="text-t-14">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
