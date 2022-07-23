import React from 'react'
import Banner from './Banner/Banner'
import CrmPlatform from './CrmPlatform'
import Footer from './footer/Footer'
import HubFeatures from './hubsdetails/HubFeatures'
import Middle from './middle/Middle'
import Navbar from './navbar/Navbar'
import Navbar1 from './navbar/Navbar1'
import StartGrow from './StartGrowing.jsx/StartGrow'

const LandingPagemain = () => {
  return (
    <div>
      <Navbar1/>
      <Navbar/>
      <div>
        <Banner/>
        <CrmPlatform/>
        <HubFeatures/>
        <Middle/>
        <StartGrow/>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPagemain
