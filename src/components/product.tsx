'use client';

import { ReactNode } from 'react';

interface MyProductProps {
    svg: ReactNode; // Expecting an SVG or any other React node
    description: string;
    headline: string;
}

export default function MyProduct({ svg, description, headline }: MyProductProps) {
    return (
        <div className="flex w-auto flex-col gap-2 bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center">
                {svg}
            </div>
            <h2 className='font-semibold'>{headline}</h2>
            <p>{description}</p>
        </div>
    );
}
