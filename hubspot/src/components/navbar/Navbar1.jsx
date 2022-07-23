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
        <div className='navbar1_langauge'> English<MdOutlineKeyboardArrowDown className='arrodown1'/></div>
      
        <div><RiAccountCircleFill className='navbar1_main_icons'/>
        </div>
        <div> <Link to="/contactsales"><span>Contact Sales</span></Link></div>
      <div><AiOutlineSearch className='navbar1_main_icons'/></div>
      <div><Link to="/login" className='navbar1_main_links'>Log in</Link></div>
      <div><Link to="/cssupport" className='navbar1_main_links'>Customer Support</Link></div>
      <div className='navbar1_langauge'><span>About</span><MdOutlineKeyboardArrowDown/></div>
    </div>
  )
}

export default Navbar1
