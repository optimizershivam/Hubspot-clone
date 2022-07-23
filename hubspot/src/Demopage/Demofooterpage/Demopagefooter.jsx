import React from 'react';
import './Demofooterpage.css';

const Demopagefooter = () => {
  return (
    <div className='demopagefooter'>
        <div className='demopagefooterdiv'>
        <h4 className='demopagefooterheading'>Copyright © 2022 HubSpot, Inc.</h4>
        </div>
        <div className='demopagefooterlinkdiv'>
            <div className='legalstuff'>
                <p>Legal Stuff</p>
            </div>
            <div className='legalstuff2'>
            <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Demopagefooter;