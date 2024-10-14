'use client'
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="text-white  md:px-32 flex flex-col md:flex-row justify-between items-center  rounded-lg">
            <div className=" flex justify-between items-center w-full">
                <div className="text-xl font-bold">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="rounded-lg shadow-lg ml-4 w-14 h-auto md:w-18 lg:w-18"
                    />
                </div>
                <div className="hidden md:flex text-base space-x-4 lg:gap-10">
                    <a href="#feature" className="text-white hover:text-customGreen  transition-all duration-300">
                        Features
                    </a>
                    <a href="#partners" className="text-white hover:text-customGreen  transition-all duration-300">
                        Partners
                    </a>
                    <a href="#faq" className="text-white hover:text-customGreen  transition-all duration-300">
                        FAQ
                    </a>
                </div>
                <div className="justify-end flex items-end">
                    <div className="md:hidden">
                        <button
                            className="text-white focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-end items-end md:block customGreen rounded-lg p-4 font-semibold bg-customGreen text-white text-sm text-right">
                        Book a Demo
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden flex flex-row space-x-4 mt-2">
                    <a href="#feature" className="text-white hover:text-customGreen">
                        Features
                    </a>
                    <a href="#partners" className="text-white hover:text-customGreen">
                        Partners
                    </a>
                    <a href="#faq" className="text-white hover:text-customGreen">
                        FAQ
                    </a>
                    {/* <div className="customGreen rounded-lg p-3 bg-customGreen text-white text-sm">
                        Book a Demo
                    </div> */}
                </div>
            )}
        </nav>

    );
};

export default Navbar;
