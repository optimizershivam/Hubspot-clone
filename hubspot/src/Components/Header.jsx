
import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div>
        <div className='MainDiv'>
               <div className='firstRow'>Grow better with the right plan.</div>
               <div className='secRow'>Pay for what you need (when you need it).</div>
               <div style={{}}>
               <div style={{textAlign:"center"}}>
                 <button className='MainButton'>Products & Plans</button>
                 <button className='MainButton' style={{border:"1px solid grey"}}>Bunddles</button>
               </div>
                <div className="secButtonDiv">
                    <button className='secButton'>Free Tools</button>
                    <button className='secButton'>Marketing</button>
                    <button className='secButton'>Sales</button>
                    <button className='secButton'>Customer Service</button>
                    <button className='secButton'>CMS</button>
                    <button className='secButton'>Operation</button>
                </div>
               </div>
        </div>
    </div>
  )
}

export default Header