import { Stack } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import RequireAuth from '../hoc/RequireAuth'
import Dummypage from './Dummypage'
import Forgetpage from './Forgetpage'
import Loginpage from './Loginpage'
import Register from './Register'

import Success from './Success'


const Mainroutes = () => {
  return (
    
   <Routes>
   <Route path='/' element={<Dummypage/>}></Route>

   <Route path='/success' element={<Success/>}></Route>

<Route path='/login' element={<Loginpage/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/forget' element={<Forgetpage/>}></Route>
   </Routes>
  )
}

export default Mainroutes