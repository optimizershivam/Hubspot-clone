import React from 'react'
import Header from '../Header'
import MarketingHub from '../MarketingHub'
import Offers from '../Offers'
import CalulatePrice from '../CalulatePrice'
import CustomerSupport from '../CustomerSupport'
import RecomendedBundles from '../RecomendedBundles'
import Navbar1 from '../navbar/Navbar1'
import Footer from '../footer/Footer'
const PricingPage = () => {
  return (
    <>
        <Navbar1/>
        <Header/>
        <MarketingHub/>
        <Offers/>
        <RecomendedBundles/>
        <CalulatePrice/>
        <CustomerSupport/>
        <Footer/>
    </>
  )
}

export default PricingPage