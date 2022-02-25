import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import AboutBgd from '../components/AboutBg'
import Features from '../components/Features';
import Background from '../components/Background';
import Footer from '../components/Footer';




function Home() {
  return ( 
  <>
    <Navbar/>
  <Background>
     <Banner/>
     </Background>

    
<AboutBgd>
    <About/>
    <Features/>
    <Footer/>
    </AboutBgd>
   
    
 
   
  </>
  );
}

export default Home;
