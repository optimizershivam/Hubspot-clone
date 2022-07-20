import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Demoform from './Demoform';
import Demopage from './Demopage';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/demopage' element={Demopage}/>
        <Route path='/demoform' element={Demoform}/>
    </Routes>
  )
}

export default Mainroutes;