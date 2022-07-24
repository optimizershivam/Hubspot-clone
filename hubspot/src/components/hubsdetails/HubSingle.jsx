import React from 'react';
import "./HubDetails.css";
import {SiMarketo} from "react-icons/si";
import {GiRoundStar} from "react-icons/gi";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {FaBox} from "react-icons/fa";
import {BsHexagonHalf} from "react-icons/bs";
import {RiCheckboxCircleFill} from "react-icons/ri";
import {Link} from "react-router-dom"

const HubSingle = ({logo,title,f1,f2,f3,path,discribe,featureName}) => {
  return (
    <div className='hubDetails_main_div'>
      <div className='hubDetails_main_title_logo'>
       <div className='hubDetails_icon'>  {logo }  </div> 
        {/* <SiMarketo className='hubDetails_icon'/> */}
         <span className='hubDetails_Title'>{title}</span></div>
      <p className='hubDetails_describe'>{discribe}</p>
     
       <hr/> 
       <h3>{featureName}</h3> 
       <div className='hubDetails_features_div'>
        <div><RiCheckboxCircleFill className='hubDetails_checkbox'/><span className='hubDetails_feature'>{f1}</span></div>
        <div><RiCheckboxCircleFill className='hubDetails_checkbox'/><span className='hubDetails_feature'>{f2}</span></div>
        <div><RiCheckboxCircleFill className='hubDetails_checkbox'/><span className='hubDetails_feature'>{f3}</span></div>
       </div>
       <div className='hubDetails_btn'>
        <Link to="/toppage" className="hubDetails_link">Get started</Link>
       </div>

    </div>
  )
}

export default HubSingle
