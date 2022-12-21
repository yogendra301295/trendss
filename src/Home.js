import React from 'react'
import HeroSection from './Component/HeroSection';
import Trusted from './Component/Trusted';
import Services from './Component/Services';

const Home = () => {
  const data = {
    name: "Trendss Store",
  }
  return (
    <>
      <HeroSection myData={data}/>
      <Services />
      <Trusted />
    </>
  )
};

 

export default Home;