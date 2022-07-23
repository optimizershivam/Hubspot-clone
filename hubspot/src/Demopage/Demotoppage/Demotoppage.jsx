import React from 'react';
import './Demotoppage.css';
import { Link } from 'react-router-dom';

const Demotoppage = () => {
  return (
    <div className='demotoppage'>
        <div className='toplogo'>
            <img className='toplogoimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png" alt="Logo" />
        </div>
        <div>
            <h1 className='heading'>Get Started With HubSpot</h1>
            <p className='paragraph'>HubSpot is a CRM platform with all the tools you need for marketing, sales, customer service, and content management. Start using our full suite of free tools today (your access never expires!), or get a demo of our complete set of premium products.</p>
        </div>
        <div className='buttondiv'>
            <button className='button btn1'>Get Started free</button>
           <button  className='button btn2' ><Link to="/Demoform" className='linkfont'>Get a Demo</Link></button>
        </div>
        <div>
            <p className='specificproductdiv'>Looking for a specific product?</p>
        </div>
    </div>
  )
}

export default Demotoppage;