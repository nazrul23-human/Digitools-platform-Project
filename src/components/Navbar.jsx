import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center   rounded-full px-5 py-5 ">
          <img className="w-30" src="/public/DigiTools.png" /> 
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
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
      <div className="navbar-end gap-5">
        <img className='p-2 rounded-2xl bg-gray-100' src="/public/shopping-cart5.png" alt="" />
        <h3>Login</h3>
        <h1 className="btn bg-blue-700 rounded-full text-white">Get Started</h1>
      </div>
    </div>
  );
};

export default Navbar;