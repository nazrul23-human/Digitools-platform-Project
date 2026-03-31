import React from 'react';

const Hero = () => {
  return (
    <div className=" mt-20 hero bg-gradient-to-r from-indigo-600 to-purple-600  ">
      <div className="hero-content text-center">
        <div className="max-w-md mt-15">
          <h1 className="text-2xl font-bold text-white ">Ready to Transform Your Workflow?</h1>
          <p className="py-5 text-gray-300 p-5 ">
            Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
          </p>
          <div className='flex justify-center gap-5 '>
            <button className="bg-white rounded-2xl p-3 text-purple-500">Explore Products</button>
            <button className="border border-1 p-3    rounded-2xl text-white">View Products</button>

          </div>
          <p className='mb-10 mt-2 text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>

        </div>
      </div>
    </div>
  );
};

export default Hero;