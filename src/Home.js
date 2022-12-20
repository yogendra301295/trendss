import React from 'react'
import HeroSection from './Component/HeroSection';

const Home = () => {
  const data = {
    name: "Trendss Store",
  }
  return (
    <>
      <HeroSection myData={data}/>
    </>
  )
};

 

export default Home;