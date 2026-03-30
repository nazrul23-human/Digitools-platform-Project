import React from 'react';

const StartedSection = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='flex'>
                <div>
                    <img src="" alt="" />
                    <h3>Create Account</h3>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>

                </div>
                <div>
                    <img src="" alt="" />
                    <h3>Choose Products</h3>
                    <p>Browse our catalog and select the tools that fit your needs.</p>

                </div>

                <div>
                    <img src="" alt="" />
                    <h3>Start Creating</h3>
                    <p>Download and start using your premium  tools immediately.</p>

                </div>
            </div>
            {/* {new card} */}
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default StartedSection;