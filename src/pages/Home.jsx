import React from 'react';
<<<<<<< HEAD
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
=======
import About from '../section/About';
import Banner from '../section/Banner';
import Features from '../section/Features';
import Footer from '../components/Footer';
import Background from '../components/HeaderBg';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Background>
        <Header />
        <Banner />
      </Background>
      <About />
      <Features />
      <Footer />
    </>
>>>>>>> 9a72b52a5c1832bea37ce60e8a9a89f409506a32
  );
};

export default Home;
