import React,{useState} from 'react';

import "./Navbar1.css";
import {MdOutlineLanguage} from "react-icons/md";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {RiAccountCircleFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import Navbar1Drop from './Navbar1Drop';

const Navbar1 = () => {
  const [dropdown,setdropDown]=useState(false);
  const handlemouseHoverS=()=>{
    
    setdropDown(!dropdown)
  }

  return (
    <>
    <div className='navbar1_main-div'>
     
        <div>
        <MdOutlineLanguage className='navbar1_main_icons'/>
        </div>
        <div className='navbar1_langauge'> English<MdOutlineKeyboardArrowDown className='arrodown1'/></div>
      
        <div><RiAccountCircleFill className='navbar1_main_icons'/>
        </div>
        <div> <span>Contact Sales</span></div>
      <div><AiOutlineSearch className='navbar1_main_icons'/></div>
      <div><Link to="/login" className='navbar1_main_links'>Log in</Link></div>
      <div><Link to="/" className='navbar1_main_links'>Customer Support</Link></div>
      <div className='navbar1_langauge'><span onMouseOver={handlemouseHoverS}>About</span><MdOutlineKeyboardArrowDown className='arrodown1'/></div>
    </div>
    {dropdown && <Navbar1Drop/>}
    </>
  )
}

export default Navbar1
