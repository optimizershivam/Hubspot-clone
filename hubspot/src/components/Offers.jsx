import React from 'react'
import "./offers.css"
import { CheckIcon } from '@chakra-ui/icons'
import {Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Offers = () => {
  return (
    <>
    
        <div className='BigOfferDiv'>
        <div>
            <div style={{padding:'0px 16px '}}>
                <div className='firstdiv'>
                    <img src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Starter.svg' alt='starter logo'/>
                    <p >Starter</p>
                </div>
                <p className='simpleTextDiv'>Starts at</p>
                <p className='secTextDiv'>$18/mo</p>
                <p className='simpleTextDiv'>billed at  <span style={{textDecoration:'line-through'}}>$240</span><span style={{fontWeight:"600",color:'#516f90',fontSize:'12px',}}> $216/yr</span></p>
                <div className='numberBox'>
                <NumberInput maxW='100px' defaultValue={7000} step={1000} min={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
                <p>Marketing Contacts</p>
                </div>
                <p className='simpleTextDiv'>Includes 1,000 marketing contacts. Additional marketing contacts are sold in increments of 1,000 from $18.00/month. <span style={{color:' #0091ae'}}>More details.</span></p>
                <div style={{marginTop:'15px'}}></div>
                <Link to="/cart"> <Button colorScheme='orange' height='40px' width='100%' variant='solid'>Buy Now</Button></Link>
                <div style={{margin:'15px 0px 15px 0px'}}></div>
               <Link to="/contactsales"><Button colorScheme='orange' height='40px' width='100%' variant='outline'>Talk to sales</Button></Link> 
                
                <div className='BigTextDiv'>
                <p style={{color:'grey',margin:'15px 0px 10px 0px'}}><span className='colorText'>Free tools with increased limits</span>, plus:</p>
                <div style={{marginBottom:'30px'}}>
                <p className='colorText'>MARKETING AUTOMATION</p>
                <ul>
                   <li>Form Automation</li>
                   <li>Email Automation</li>
                </ul>
                </div>
                <div style={{marginBottom:'30px'}}>
                    <p className='colorText'>REMOVE HUBSPOT BRANDING FROM</p>
                    <ul>
                        <li>Forms</li>
                        <li>Email marketing</li>
                        <li>Landing pages</li>
                        <li>Live chat</li>
                    </ul>
                </div>
                <div style={{marginBottom:'30px'}}>
                    <p className='colorText'>GET HELP FAST</p>
                    <ul>
                        <li>Email and in-app chat support</li>
                    </ul>
                </div>
                </div>

            </div>
           
        </div>
        <div><div style={{padding:'0px 16px '}}>
                <div className='firstdiv'>
                    <img src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Pro.svg' alt='profeshional logo'/>
                    <p>Proffesional</p>
                </div>
                <p className='simpleTextDiv'>Starts at</p>
                <p className='secTextDiv'>$890/mo</p>
                <p className='simpleTextDiv'>billed at <span style={{textDecoration:'line-through'}}>$10,680</span> <span style={{fontWeight:"600",color:'#516f90',fontSize:'12px',}}> $9,600/yr</span></p>
                <div className='numberBox'>
                <NumberInput maxW='100px' defaultValue={2000} step={5000} min={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
                <p>Marketing Contacts</p>
                </div>
                <p className='simpleTextDiv'>Includes 2,000 marketing contacts. Additional marketing contacts are sold in increments of 5,000 from $250.00/month.<span style={{color:' #0091ae'}}> More details.</span></p>
                <div style={{marginTop:'15px'}}></div>
                <Link to="/contactsales">   <Button colorScheme='orange' height='40px' width='100%' variant='solid'>Talk to sales</Button> </Link>
                <div style={{margin:'15px 0px 15px 0px'}}></div>
                <Link to="/demopage">     <Button colorScheme='orange' height='40px' width='100%' variant='outline'>Start a free 14-day trial</Button> </Link>
                <div className='BigTextDiv'>
                    <p style={{color:'grey',margin:'15px 0px 10px 0px'}}>Starter plus:</p>
                    
                    <div style={{marginBottom:'30px'}}>
                    <p className='colorText'>AUTOMATE & PERSONALIZE ENGAGEMENT ACROSS CHANNELS</p>
                        <ul>
                            <li>Omni-channel marketing automation</li>
                            <li>ABM tools and automation</li>
                            <li>Dynamic personalization</li>
                            <li>Multi-language content</li>
                            <li>Social media</li>
                            <li>Video hosting & management</li>
                            <li>Contact and company scoring</li>
                        </ul>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <p className='colorText'>ORCHESTRATE EFFICIENT CAMPAIGNS</p>
                        <ul>
                            <li>A/B testing</li>
                            <li>Ad conversion events</li>
                            <li>Contact create attribution</li>
                        </ul>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <p className='colorText'>BUILD CUSTOM REPORTS</p>
                        <ul>
                            <li>Website traffic analytics</li>
                            <li>Campaign reporting</li>
                            <li>Custom reporting</li>
                            <li>Salesforce integration</li>
                        </ul>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <p className='colorText'>GET ADVANCED SUPPORT</p>
                        <ul>
                            <li>Phone support</li>
                        </ul>
                    </div>

                </div>
            </div>
            </div>
        <div><div>
                <div className='firstdiv'>
                    <img src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Ent.svg' alt='enterprise logo'/>
                    <p>Enterprise</p>
                </div>
                <p className='simpleTextDiv'>Starts at</p>
                <p className='secTextDiv'>$3,200/mo</p>
                <p className='simpleTextDiv'>billed monthly <span style={{fontWeight:"600",color:'#516f90',fontSize:'12px',}}> $38,400/yr</span></p>
                <div className='numberBox' style={{display:'flex'}}>
                <NumberInput maxW='100px' defaultValue={2000} step={5000} min={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
                <div>Marketing Contacts</div>
                </div>
                <p className='simpleTextDiv'>Includes 10,000 marketing contacts. Additional marketing contacts are sold in increments of 10,000 from $100.00/month. <span style={{color:' #0091ae'}}>More details.</span></p>
                <div style={{marginTop:'15px'}}></div>
                <Link to="/contactsales">       <Button colorScheme='orange' height='40px' width='100%' variant='solid'>Talk to sales</Button> </Link>
                <div style={{margin:'15px 0px 15px 0px'}}></div>
                <Link to="/demopage">    <Button colorScheme='orange' height='40px' width='100%' variant='outline'>Start a free 14-day trial</Button> </Link>
                <div className='BigTextDiv'>
                    <p style={{color:'grey',margin:'15px 0px 10px 0px'}}>Proffesional plus:</p>
                    <div style={{marginBottom:'30px'}}>
                        <p className='colorText'>MANAGE YOUR TEAMS & BRANDS</p>
                        <ul >
                            <li >Single sign-on</li>
                            <li>Partitioning</li>
                            <li>Hierarchical teams</li>
                            <li>Permission sets</li>
                            <li>Field-level permissions</li>
                            <li>Email send frequency cap</li>
                        </ul>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <p className='colorText'>EXTEND THE PLATFORM</p>
                        <ul>
                            <li>Custom objects</li>
                            <li>Salesforce custom object sync</li>
                            <li>Adaptive testing</li>
                            <li>Sandboxes</li>
                        </ul>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <p className='colorText'>ADVANCE YOUR REPORTING</p>
                        <ul>
                            <li>Multi-touch revenue attribution</li>
                            <li>Behavioral event triggers and reporting</li>
                            <li>Predictive lead scoring</li>
                        </ul>
                    </div>
                </div>

            </div>
           </div>
        </div>
        <div className='lastText'>
            <div>See More</div>
            <div>See More</div>
            <div>See More</div>
        </div>
        <div className='lastdiv'><span style={{color:'black',fontWeight: '600'}}>All paid plans includes :   </span>
        <p><CheckIcon/>Storage for up to 15 million overall contacts</p>
        <p><CheckIcon/>1:1 technical support</p>
        </div>
    </>
  )
}

export default Offers