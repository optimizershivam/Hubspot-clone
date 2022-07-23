import React from 'react';
import './Demosuccesspage.css';

const Demosuccesspage = () => {
  return (
    <div>
      <div className='successpagenavbar'>
      <div className='successtoplogo'>
            <img className='successtoplogoimg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png" alt="Logo" />
        </div>
        <div className='successpagebacktohome'>
          <button className='successpagebacktohomebtn'>Back to Home</button>
        </div>
        </div>

        <div className='successpagenav'>
          <div className='successheaddiv'>
        <h2 className='successhead'>Thankyou for registering for Demo Service</h2>
        </div> 
        <div className='successparadiv'>
        <p>Your request for demo service has be accepted and processed. Further details have been send to your registered emailId. </p>
        </div>
        </div>

        <div className='starteddiv'>
          <div className='startedheadingdiv'>
            <h2 className='startedheading'>Ready to get started?</h2>
          </div>
          <div className='startedmiddlediv'>
            <p className='startedmiddlepara'>Try tools in the Starter CRM Suite for free!</p>
          </div>
          <div className='startedbottomdiv'>
          <div className='startedbottomparadiv'>
            <p>The best way to try tools in the Starter CRM Suite is to sign up for our free tools. Start free and upgrade to Starter whenever you’re ready — your access to free tools never expires.</p>
          </div>
          <div className='startedbottomimgdiv'>
            <img src="https://offers.hubspot.com/hubfs/Premium%20CRM%20module%20image.webp" alt="" />
          </div>
          </div>
        </div>

    </div>
  )
}

export default Demosuccesspage;