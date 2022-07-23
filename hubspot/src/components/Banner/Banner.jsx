import React from 'react';
import "./banner.css";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner_main_div'>
      <div className='banner_info_div'>
        <p>HUBSPOT CRM PLATFORM</p>
        <span>Powerful, </span>
        <br/>      
        <span>not overpowering</span>
        <br/>
        <br/>
        <p>Finally, a CRM platform that’s both powerful and easy to use. Create delightful customer experiences. Have a delightful time doing it.</p>
        <div className='banner_button_div'>
            <Link to="/demopage" className='banner_buuton_link'>
                Start free or get a Demo
            </Link>
        </div>
        <div className='banner_primium_div'>
            <p>Get started with free tools, or get more with our premium software.</p>
        </div>
      </div>
      <div className='banner_img_div'>
        <img
        src="https://www.hubspot.com/hubfs/SUI-Homepage-Header-Desktop@2x.png"
        width="100%"
        height='100%' alt=''
        />
      </div>
    </div>
  )
}

export default Banner
