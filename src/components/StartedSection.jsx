import React from 'react';
import createImg from "../assets/5.user.png"
import chooseImg from "../assets/2.package.png"
import starImg from "../assets/4.rocket.png"

const StartedSection = () => {
    return (
        <div className='mt-30'>
            <div className='text-center mt-10 items-center'>
                <h1 className='font-bold text-3xl'>Get Started in 3 Steps</h1>
                <p className='text-[#627382] text-sm'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex justify-center mt-15 text-center gap-8'>
                <div className="card bg-base-100 w-96 shadow-sm  ">
                    <div className="absolute top-2 right-3 w-8 h-8 bg-[#6329e0] text-white flex items-center justify-center rounded-full font-extralight text-sm shadow-md border-2">01
                    </div>
                    <figure>

                        <img className='bg-fuchsia-100 p-5 mt-5 rounded-full '
                            src={createImg}
                            alt="Create Account" />
                    </figure>

                    <div className="card-body">
                        <h2 className="text-xl font-bold">Create Account</h2>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>

                </div>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="absolute top-2 right-3 w-8 h-8 bg-[#6329e0] text-white flex items-center justify-center rounded-full font-extralight text-sm shadow-md border-2">02
                    </div>
                    <figure>
                        <img className='bg-fuchsia-100 p-5 mt-5 rounded-full '
                            src={chooseImg}
                            alt="Choose Products" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">Choose Products</h2>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="absolute top-2 right-3 w-8 h-8 bg-[#6329e0] text-white flex items-center justify-center rounded-full font-extralight text-sm shadow-md border-2">03
                    </div>
                    <figure>
                        <img className='bg-fuchsia-100 p-5 mt-5 rounded-full '
                            src={starImg}
                            alt="Start Creating" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-bold">Start Creating</h2>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>

                    </div>
                </div>
            </div>

        </div>




    );
};

export default StartedSection;