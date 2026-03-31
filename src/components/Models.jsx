import React, { use } from 'react';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    console.log(models)
    return (
        <div className='py-20 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold '>Premium Digital Tools</h1>
                <small className='text-gray-500'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</small>
            </div>

            {/* Card add */}

            
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5'>
                {models.map(model => <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300'>
                    <div className='flex justify-center h-30 w-30 bg-white shadow-2xl  rounded-lg ml-5'>
                        <img className='h-20 w-20 mt-5  object-contain' src={model.image} alt="" />
                    </div>
                    <div className='p-5 space-y-2'>
                        <h1 className='text-2xl font-bold mt-4'>{model.name}</h1>
                        <p>{model.description}</p>
                        <div className='text-1xl font-bold'>${model.price}/month</div>
                        <button className='btn w-full  mt-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg'>Buy Now</button>
                    </div>
                    
                </div>)}
            </div>
            </div>
        

    );
};

export default Models;