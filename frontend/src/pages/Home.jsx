import React from 'react';
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
  );
};

export default Home;
