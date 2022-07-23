import React,{useState} from 'react';
import "./navbar1Drop.css";
import { Link } from 'react-router-dom';

const Navbar1Drop = () => {
    const [dropDown,setDropDown]=useState(false)

  return (
    <div className={dropDown?'navbar1Drp_main_div click':"navbar1Drp_main_div"} onClick={()=>setDropDown(!dropDown)}>
      <div><Link to="/" className='nav1drp_Link'>About Us</Link></div>
      <div><Link to="/" className='nav1drp_Link'>Carrers</Link></div>
      <div><Link to="/" className='nav1drp_Link'>Contact Us</Link></div>
      <div><Link to="/" className='nav1drp_Link'>Investor Relations</Link></div>
      <div><Link to="/" className='nav1drp_Link'>Management Team</Link></div>
    </div>
  )
}

export default Navbar1Drop
