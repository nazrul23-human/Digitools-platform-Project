import React from 'react';
import groupimg from "../assets/Group 5.png"
import bannerimg from "../assets/1.banner.png"
import playimg from "../assets/3.Play.png"

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-purple-600  px-5 py-2 rounded-full">
                        <img src= {groupimg} alt="New: AI-Powered Tools Available" />
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className=" lg:text-7xl font-bold leading-tight tracking-tighter text-black">
                        Supercharge Your
                        <br />
                        <span>
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates,and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:bg-red-500 px-5 py-3 rounded-full font-semibold text-lg  flex items-center gap-3 group text-white">
                            Explore Products
                        </button>
                        <button className=" bg-white hover:bg-gray-100  px-5 py-3 border border-b-blue-500 rounded-full font-semibold text-lg  flex items-center gap-3 group text-purple-600 ">
                            <img className='' src={playimg} alt="" />Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
                            src={bannerimg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;