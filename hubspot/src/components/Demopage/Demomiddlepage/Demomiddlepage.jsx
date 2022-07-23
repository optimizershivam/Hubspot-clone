import React from 'react'
import Demomarketpage from './Demomarketpage';
import './Demomiddlepage.css';

const Demomiddlepage = () => {
  return (
    <div className='demomiddlepage'>
        <div className='middlepagediv'>
    <div className='demomiddleleftpage'>
        <div>
            <p className='demomiddlepagepara'>The CRM platform includes:</p></div>
        <button className='demomiddlepagebtn'>Marketing</button>
        <button className='demomiddlepagebtn'>Sales</button>
        <button className='demomiddlepagebtn'>Customer Service</button>
        <button className='demomiddlepagebtn'>CMS</button>
        <button className='demomiddlepagebtn'>Operations</button>
        <button className='demomiddlepagebtn'>Free Tools</button>
    </div>
    <Demomarketpage />
        </div>
       
    </div>
  )
}

export default Demomiddlepage;