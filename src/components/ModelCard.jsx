import React from 'react';
import { useState } from 'react';


const ModelCard = ({model, carts, setCarts}) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuyCart = () => {
        setIsBuy(true)
        setCarts([...carts,model])
    }
    return (
        <div className='shadow-lg rounded-lg border overflow-hidden border-zinc-300'>
            <div className='flex justify-center h-30 w-30 bg-white shadow-2xl  rounded-lg ml-5'>
                <img className='h-20 w-20 mt-5  object-contain' src={model.image} alt="" />
            </div>
            <div className='p-5 space-y-2'>
                <h1 className='text-2xl font-bold mt-4'>{model.name}</h1>
                <p>{model.description}</p>
                <div className='text-1xl font-bold'>${model.price}/month</div>
                <button onClick={handleBuyCart} className='btn w-full  mt-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg'>
                    {isBuy ? "Added to Cart" : "Buy Now"}
                </button>
            </div>

        </div>
    );
};

export default ModelCard;