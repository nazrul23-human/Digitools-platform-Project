import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    
    return (
        <div className='py-8 max-w-7xl mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold '>Premium Digital Tools</h1>
                <small className='text-gray-500'>Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</small>
            </div>

            {/* Card add */}

            
                <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5'>
                {models.map((model) => (
                   <ModelCard key={model.id} model={model}></ModelCard> 
            ))}
            </div>
            </div>
        

    );
};

export default Models;