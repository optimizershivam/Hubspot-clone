import React from 'react';
import "./startGrow.css";
import { Link } from 'react-router-dom';

const StartGrow = () => {
  return (
    <div className='startGrow_main_div'>
      <div className='startGrow_leftDiv'>
        <h1>Start Growing With HubSpot Today</h1>
        <p>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
        <div className='startGrow_btn'>
            <Link to="/demopage" className='startGrow_btn_link'>
            Start free or get demo
            </Link>
        </div>
        <p className='startGrow_p_div'>Get started with free tools, or get more with our premium software.</p>
      </div>
      <div className='startGrow_rightDiv'>
        <img
        src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sg-module-images/5@2x.png"
        width="350px"
        height="411px"
        
      />
      </div>
    </div>
  )
}

export default StartGrow
