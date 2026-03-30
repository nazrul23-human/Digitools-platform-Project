import React from 'react';
import BannerImage from "../../public/1.banner.png";

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-500 border text-white text-sm font-medium px-5 py-2 rounded-full">
                        <img src="/public/Group 5.png" alt="New: AI-Powered Tools Available" />
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
                        <button className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-400/30 flex items-center gap-3 group text-white">
                            Explore Products
                        </button>
                        <button className=" bg-white hover:bg-gray-100  px-5 py-3 border border-b-blue-500 rounded-2xl font-semibold text-lg shadow-xl shadow-gray-300/30 flex items-center gap-3 group text-blue-500 ">
                            <img className='' src="/public/3.Play.png" alt="" />Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
                            src="/public/1.banner.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;