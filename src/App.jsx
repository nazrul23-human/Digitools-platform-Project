import Navbar from './components/Navbar'
import Banner from './components/Banner';
import StartedSection from './components/StartedSection';
import './App.css'
import Rating from './components/Rating';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Models from './components/Models';
import { useState } from 'react';
import Cart from './components/Cart';
import React from 'react';
import { Suspense } from 'react';



const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};


function App() {
  const modelPromise = getModels();
  const [activeTab,setActiveTab] = useState("products")
  const [carts,setCarts] = useState([])
  
  return (
    <>
      {/* bg-gradient-to-r from-indigo-600 to-purple-600  */}
      <Navbar></Navbar>
      {/* <Banner></Banner>
      <Rating></Rating> */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-gray-200">
        <input 
        type="radio" 
        name="my_tabs_1" 
        className="tab rounded-2xl w-40 shadow-2xl border border-amber-300" 
        aria-label="Products"
        onClick={()=> setActiveTab("products")} 
        defaultChecked/>

        <input type="radio" 
        name="my_tabs_1" 
        className="tab rounded-2xl w-40 shadow-2xl border border-amber-300" 
        aria-label="Cart"
        onClick={()=> setActiveTab("cart")}/>

      </div>


      
     {activeTab === "products" && <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}> <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models></Suspense>}
      
      
      
      {activeTab === "cart" && <Cart carts={carts}
      setCarts={setCarts}></Cart>}



      {/* <StartedSection></StartedSection>
      <Pricing></Pricing>
      <Hero></Hero>
      <Footer></Footer> */}


    </>
  );
}

export default App;
