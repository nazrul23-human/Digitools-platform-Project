import Navbar from './components/Navbar'
import Banner from './components/Banner';
import StartedSection from './components/StartedSection';
import './App.css'
import Rating from './components/Rating';
import Pricing from './components/Pricing';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {


  return (
    <>
    {/* bg-gradient-to-r from-indigo-600 to-purple-600  */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>


      <StartedSection></StartedSection>
      <Pricing></Pricing>
      {/* <Hero></Hero> */}
      {/* <Footer></Footer> */}
      

    </>
  );
}

export default App;
