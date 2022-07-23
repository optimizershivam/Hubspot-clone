import React from 'react';
import "./Navbar1.css";
import {MdOutlineLanguage} from "react-icons/md";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {RiAccountCircleFill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar1 = () => {
  return (
    <div className='navbar1_main-div'>
     
        <div>
        <MdOutlineLanguage className='navbar1_main_icons'/>
        </div>
        <div> English<MdOutlineKeyboardArrowDown/></div>
      
        <div><RiAccountCircleFill className='navbar1_main_icons'/>
        </div>
        <div> <span>Contact Sales</span></div>
      <div><AiOutlineSearch className='navbar1_main_icons'/></div>
      <div><Link to="/" className='navbar1_main_links'>Log in</Link></div>
      <div><Link to="/" className='navbar1_main_links'>Customer Support</Link></div>
      <div><span>About</span><MdOutlineKeyboardArrowDown/></div>
    </div>
  )
}

export default Navbar1
