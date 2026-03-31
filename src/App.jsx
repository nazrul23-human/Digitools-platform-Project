import Navbar from './components/Navbar'
import Banner from './components/Banner';
import StartedSection from './components/StartedSection';
import './App.css'
import Rating from './components/Rating';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Models from './components/Models';
import { Suspense } from 'react';



const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}


function App() {
  const modelPromise = getModels()
  return (
    <>
      {/* bg-gradient-to-r from-indigo-600 to-purple-600  */}
      <Navbar></Navbar>
      {/* <Banner></Banner>
      <Rating></Rating> */}
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Models modelPromise={modelPromise}></Models>
      </Suspense>



      {/* <StartedSection></StartedSection>
      <Pricing></Pricing>
      <Hero></Hero>
      <Footer></Footer> */}


    </>
  );
}

export default App;
