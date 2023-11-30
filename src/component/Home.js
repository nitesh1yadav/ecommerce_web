import React, { useContext } from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Serices from './Serices';
import TrustedCompany from './TrustedCompany';
import {useProductContext } from '../Context/ProductContext';
import FeatureProducts from './FeatureProducts';



const Home = () => {
  const {myName} = useProductContext();

  const titleName="Heart Store";
  const heroImagee='/assets/img/base/why-choose-img1.jpg'
  return (
    <>
    <h1>{myName}</h1>
     <Herosection titleName={titleName} heroImagee={heroImagee}/>
     <Serices/>
     <FeatureProducts/>
     <TrustedCompany/>
    </>
  )
}
export default Home