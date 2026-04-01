import React from 'react';
import shoppimg from "../assets/shopping-cart5.png"
const Navbar = () => {
  return (
    <div className="flex justify-evenly">
      <div className="">
        <div className=" rounded-full px-5 py-5 ">
          <h1 className='text-blue-700 font-bold text-3xl '>DigiTools</h1>
        </div>
      </div>
      <div className="mt-2 hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className=" flex gap-5 mt-4">
        <img className=' mt-2 w-5 h-5  inline-block' src={shoppimg} alt="" />
    
        <h3 className='mt-2'>Login</h3>
        <h1 className="btn bg-gradient-to-r from-[#5a3df4] to-[#7c5dfa] rounded-full text-white">Get Started</h1>

      </div>
    </div>
  );
};

export default Navbar;