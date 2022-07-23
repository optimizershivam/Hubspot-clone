import { Stack } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import RequireAuth from '../hoc/RequireAuth'
import Dummypage from './Dummypage'
import Forgetpage from './Forgetpage'
import Loginpage from './Loginpage'
import Register from './Register'
import Demopage from "../components/Demopage/Demopage"
import Demoform from "../components/Demopage/Demoform/Demoform"

import Success from './Success'
import LandingPagemain from '../components/LandingPagemain'
import Demosuccesspage from '../components/Demopage/Demosuccesspage/Demosuccesspage'
import CustomerService from "../components/CustomerService/CustomerService"
import PricingPage from "../components/Pricing Page/PricingPage"
import ConfirmayionPage from "../components/Confirmation/ConfirmayionPage"
import Payment from "../components/Paymet/Payment"
import Academy from "./academy/Academy"
import Contactsales from './Contactsales'

const Mainroutes = () => {
  return (
    
   <Routes>
   <Route path='/' element={<LandingPagemain/>}></Route>
   <Route path='/demopage' element={<Demopage/>}></Route>
   <Route path='/demoform' element={<Demoform/>}></Route>
   <Route path="/Demosuccesspage" element={<Demosuccesspage/>}/>
   <Route path='/success' element={<Success/>}></Route>
   <Route path='/cssupport' element={<CustomerService/>}></Route>
   <Route path='/pricing' element={<PricingPage/>}></Route>
   <Route path='/cart' element={<ConfirmayionPage/>}></Route>
   <Route path='/payment' element={<Payment/>}></Route>
   <Route path='/courses' element={<Academy/>}></Route>
   <Route path='/contactsales' element={<Contactsales/>}></Route>

<Route path='/login' element={<Loginpage/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/forget' element={<Forgetpage/>}></Route>
   </Routes>
  )
}

export default Mainroutes