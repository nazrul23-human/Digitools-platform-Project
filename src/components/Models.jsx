import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise)

    return (
        <div className='py-8 max-w-7xl mx-auto'>
    
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
                {models.map((model) => (
                    <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}></ModelCard>
                ))}
            </div>
        </div>


    );
};

export default Models;