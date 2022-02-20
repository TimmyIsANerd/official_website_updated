import React from 'react';
import styled from 'styled-components';
import About from '../components/About';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Back from '../assets/linear1.png'
import Features from '../components/Features';
import Background from '../components/Background';




function Home() {
  return ( 
  <>
    
    <Background>
    <Navbar/>
     <Banner/>
    <About/>
    <Features/>
    </Background>
 
   
  </>
  );
}

export default Home;
