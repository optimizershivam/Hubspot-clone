import React from 'react';
import "./softwaredrop.css";
import {softwareHub} from "./softwarehub";
import {SiMarketo} from "react-icons/si";
import {CgArrowLongRight} from "react-icons/cg"




const SoftwareSmall = ({name,img,discribe,path,plans}) => {
  return (
    <div className='software_Small_div'>
      <div className='Hub_Icon_Div'>
        {img }
      {/* <SiMarketo className='softwareiconhub' /> */}
      </div>
      <div>
        <h2>{name}</h2>
        <span>{discribe}</span>
        <br/>
        <span className='softwareHublink'>{plans} <CgArrowLongRight className='icon_logo_1'/> </span>
      </div>
    </div>
  )
}

export default SoftwareSmall
