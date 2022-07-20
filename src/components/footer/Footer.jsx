import React from 'react';
import "./Footer.css";
import {Popularfeatures,features,freeTools,Comapny,Costomers,Partners,socialIcons} from "./footer";
import { Link } from 'react-router-dom';
    

const Footer = () => {
  
  return (
    <div className='footer_main_div'>
      <div className='footer_supports_div'>

        {/* ***********************************************popular feature**************************** */}
        <div className='feature'>
            <h4>Popular Features</h4>
           {Popularfeatures.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {features.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='Footer_hr_line'></div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {freeTools.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {Comapny.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {Costomers.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
       
        <div className='feature'>
            <h4>Popular Features</h4>
           {Partners.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        </div>
      </div>

  
      {/* ****************************************social connect********************************************* */}
     
     <hr/>
      <div className='footer_social_icons'>
      
            {socialIcons.map((e)=>(
               <Link to={e.path} className="footer_icons_link">
                    <div className='icons'>{e.icon}</div>
               </Link>
          
            ))}
      </div>
      <div className='footer_hub_logo'>
         <img
         src="https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg"
         />
      </div>
      <div className='footer_copyright'>Copyright © 2022 HubSpot, Inc.</div>
      <div className='footer_stuff'>
         <div className='footer_text'>Legal Stuff</div>
         <div className='vrline'></div>
         <div className='footer_text'>PrivacyPolicy</div>
         <div className='vrline'></div>
         <div className='footer_text'>Security</div>
         
      </div>
   
    </div>
  )
}

export default Footer
