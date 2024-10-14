'use client'

import React, { useState } from 'react';
import Plus from "/public/svg/Plus.svg";
import Minus from "/public/svg/Minus.svg";

interface FaqProps {
    header: string;
    description: string;
}

const Faq: React.FC<FaqProps> = ({ header, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFaq = () => setIsOpen(!isOpen);
    return (
        <div className="my-4 w-full">
            <label className="w-full cursor-pointer">
                <div onClick={toggleFaq} className="block border-2 rounded-lg overflow-hidden transition-all duration-300">
                    <h3 className="flex h-14 text-t-16 justify-between p-6 items-center font-normal">
                        {header}
                        <div className="bg-customGreen rounded-full p-1">
                            {isOpen ? (
                                <Minus className="w-5 h-5 text-white font-bold" />
                            ) : (
                                <Plus className="w-5 h-5 text-white font-bold" />
                            )}
                        </div>
                    </h3>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-52 p-4' : 'max-h-0 p-0'}`}>
                        <p className="text-t-14">{description}</p>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Faq;
