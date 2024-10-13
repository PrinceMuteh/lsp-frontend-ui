import React from 'react'
import Tab from '@/components/Tabs';

function Legal() {
    return (
        <div className="flex flex-col justify-center text-center items-center gap-6  p-6 rounded-lg">
            <div className="w-4/5 ">
                <h2 className='font-semibold text-xl sm:text-4xl mt-10 mb-10'>Who can use Legal Speech Processing ?</h2>
                <Tab />
            </div>
        </div>
    )
}

export default Legal