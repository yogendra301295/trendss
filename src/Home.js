import React from 'react'
import HeroSection from './Component/HeroSection';
import Trusted from './Component/Trusted';
import Services from './Component/Services';
import FeatureProduct from './Component/FeatureProduct';

const Home = () => {
  const data = {
    name: "Trendss Store",
  }
  return (
    <>
      <HeroSection myData={data}/>
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  )
};

 

export default Home;