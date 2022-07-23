import React from 'react'
import Banner from './Banner/Banner'
import CrmPlatform from './CrmPlatform'
import HubFeatures from './hubsdetails/HubFeatures'
import Navbar from './navbar/Navbar'
import Navbar1 from './navbar/Navbar1';
import Middle from "./middle/Middle"
import StartGrow from './StartGrowing.jsx/StartGrow';
import Footer from './footer/Footer'


const LandingPageBody = () => {
  return (
    <div>
      <Navbar1/>
      <Navbar/>
      <Banner/>
      <CrmPlatform/>
      <HubFeatures/>
      <Middle/>
      <StartGrow/>
      <Footer/>
    </div>
  )
}

export default LandingPageBody
