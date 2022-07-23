import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Demoform from './Demoform/Demoform';
import Demopage from './Demopage';
import Demosuccesspage from './Demosuccesspage/Demosuccesspage';

const Demomainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Demopage/>}/>
        <Route path="/demoform" element={<Demoform/>}/>
        <Route path="/Demosuccesspage" element={<Demosuccesspage/>}/>
    </Routes>
  )
}

export default Demomainroutes;