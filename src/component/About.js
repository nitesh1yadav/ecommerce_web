import React from 'react'
import Herosection from './Herosection'

const About = () => {
  const titleName="With Store"
  const heroImagee='https://graphynix.com/2023/rydedentalfamily/public/frontend_assets/assets/img/why-choose-img1.jpg'
  // const heroImagee='/assets/img/base/why-choose-img2.jpg'

  return (

    <Herosection titleName={titleName} heroImagee={heroImagee}/>
  )
}

export default About