import React from 'react';

const Rating = () => {
    return (
        <div className='flex gap-10 text-white justify-evenly p-15  bg-gradient-to-r from-indigo-700 to-purple-700 mt-8 w-full md:flex'>
            <div>
                <h1 className='font-bold text-4xl '>50K+</h1>
                <p className='text-2xl text-gray-300 mt-2'>Active Users</p>

            </div>
            <div className='text-7xl text-gray-400 font-thin'>|</div>
            <div>
                <h1 className='font-bold text-4xl'>200+</h1>
                <p className='text-2xl text-gray-300 mt-2'>Premium Tools</p>
            </div>
            <div className='text-7xl text-gray-400 font-thin'>|</div>
            <div>
                <h1 className='font-bold text-4xl'>4.9</h1>
                <p className='text-2xl text-gray-300 mt-2'>Rating</p>
            </div>

        </div>
    );
};

export default Rating;