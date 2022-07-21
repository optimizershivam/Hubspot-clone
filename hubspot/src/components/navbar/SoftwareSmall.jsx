import React from 'react';
import "./softwaredrop.css";
import {softwareHub} from "./softwarehub";
import {SiMarketo} from "react-icons/si";
import {CgArrowLongRight} from "react-icons/cg"




const SoftwareSmall = ({name,img,discribe,path,plans}) => {
  return (
    <div className='softwareSmall_div'>
      <div className='HubIconDiv'>
        {img }
      {/* <SiMarketo className='softwareiconhub' /> */}
      </div>
      <div>
        <h3>{name}</h3>
        <span>{discribe}</span>
        <br/>
        <span className='softwareHublink'>{plans} <CgArrowLongRight/> </span>
      </div>
    </div>
  )
}

export default SoftwareSmall
