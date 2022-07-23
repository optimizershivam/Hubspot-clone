import React from 'react'
import Header from '../Header'
import MarketingHub from '../MarketingHub'
import Offers from '../Offers'
import CalulatePrice from '../CalulatePrice'
import CustomerSupport from '../CustomerSupport'
import RecomendedBundles from '../RecomendedBundles'
const PricingPage = () => {
  return (
    <>
        <Header/>
        <MarketingHub/>
        <Offers/>
        <RecomendedBundles/>
        <CalulatePrice/>
        <CustomerSupport/>
    </>
  )
}

export default PricingPage