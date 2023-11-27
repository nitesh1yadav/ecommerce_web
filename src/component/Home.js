import React, { useContext } from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Serices from './Serices';
import TrustedCompany from './TrustedCompany';
import { AppContext } from '../Context/ProductContext';



const Home = () => {
  const {myName}=useContext(AppContext)
  const titleName="Heart Store";
  const heroImagee='/assets/img/base/why-choose-img1.jpg'
  return (
    <>
    <h1>{myName}</h1>
     <Herosection titleName={titleName} heroImagee={heroImagee}/>
     <Serices/>
     <TrustedCompany/>
    </>
  )
}

export default Home