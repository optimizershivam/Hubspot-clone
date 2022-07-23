import React,{useState} from 'react';
import "./resource.css";
import {education,WhyHubspot,Services,UserResources} from "./resource";
import {HiUserGroup} from "react-icons/hi";
import {RiMessageFill} from "react-icons/ri";
import {MdDesignServices} from "react-icons/md";
import { Link } from 'react-router-dom';




const ResourcesDrop = () => {
  const [RdropDown,setRdropDown]=useState(false);
  return (
    <div className={RdropDown?"resourc_main_div click" : "resourc_main_div"} onClick={()=>setRdropDown(!RdropDown)}>
      <div className='resource_left'>
       
          <div className='resource_l'>
            <div className='iconsr'><HiUserGroup/></div>
            <div>
              <h2 style={{fontWeight:"bold",fontSize:"22px"}}>Education</h2>
              {education.map((e)=>(
                <Link to={"/courses"}>   <div className='resourcesSubName'>{e}</div></Link>
              ))}
              </div>
          </div>

          <div className='resource_l'>
            <div className='iconsr'><RiMessageFill/></div>
            <div>
              <h3 style={{fontWeight:"bold",fontSize:"22px"}} >Why HubSpot ?</h3>
              {WhyHubspot.map((e)=>(
              <div className='resourcesSubName'>{e}</div>
              ))}
              </div>
          </div>
       
      </div>
      <div className='resource_right'>
      <div className='resource_l'>
            <div className='iconsr'><MdDesignServices/></div>
            <div>
              <h3 style={{fontWeight:"bold",fontSize:"22px"}}>Service</h3>
              {Services.map((e)=>(
                <div className='resourcesSubName'>{e}</div>
              ))}
              </div>
          </div>

          <div className='resource_l'>
            <div className='iconsr'><HiUserGroup/></div>
            <div>
              <h3 style={{fontWeight:"bold",fontSize:"22px"}}>User Resources</h3>
              {UserResources.map((e)=>(
                <div className='resourcesSubName'>{e}</div>
              ))}
              </div>
          </div>
      </div>
    </div>
  )
}

export default ResourcesDrop
