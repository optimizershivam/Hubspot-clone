import React,{useState} from 'react';
import {CgArrowLongRight} from "react-icons/cg"
import "./softwaredrop.css";
import {softwareHub} from "./softwarehub";
import { Link } from 'react-router-dom';
import SoftwareSmall from './SoftwareSmall';

const SoftwareDrop = () => {
  const [dropDown,setDropDown]=useState(false)

  return (
    <div className={dropDown?"softwareDrop_main-div click" : "softwareDrop_main-div"} onClick={()=>setDropDown(!dropDown)}>
      <div className='softwaredroptopdiv'>
        <div className='soft_Drop_Div1'>The HubSpot CRM Platform</div>
        <p>All of HubSpot’s marketing, sales CRM, customer service, CMS, and operations software on one platform.</p>
        <div className='soft_Drop_Div_2'>
            <div>
                <Link to="/" className='softdropdiv2link'>
                Free HubSpot CRM <CgArrowLongRight className='icon_logo_1'/>
                </Link>
                </div>
            <div>
            <Link to="/"  className='softdropdiv2link'>
                Overview of all products <CgArrowLongRight className='icon_logo_1'/>
                </Link>
                </div>
        </div>
        <div className='software_hub'>
            {softwareHub.map((e)=>(
              <Link to={e.path} className="softHubLinks" onClick={()=>setDropDown(false)}>
              <SoftwareSmall name={e.name} img={e.img}
              discribe={e.discribe} plans={e.plans} />
              </Link>
            ))}
        </div>
      </div>
      <div className='softwareBottomDiv'>
        <h2>App Marketplace</h2>
        <span>Connect your favorite apps to HubSpot.</span>
        <span>
          <Link to="/" style={{textDecoration:"none",color:"#00bda5"}}>See all integration <CgArrowLongRight/> </Link>
        </span>
      </div>
    </div>
  )
}

export default SoftwareDrop
