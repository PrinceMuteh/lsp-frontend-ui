import React from 'react'
import Tab from '@/components/(landingPage)/Tabs';

function Legal() {
    return (
        <div className="flex flex-col justify-center text-center items-center gap-6  p-6 rounded-lg">
            <div className="sm:w-4/5 ">
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mb-10">
                    Who can use Legal Speech Processing ?
                </h2>
                <Tab />
            </div>
        </div>
    )
}

export default Legal