import React from 'react'
import "./offers.css"
import {Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from '@chakra-ui/react'
const Offers = () => {
  return (
    <>
        <div className='BigOfferDiv'>
        <div>
            <div>
                <div style={{display:"flex"}}>
                    <img src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/MarketingHub_Icon.svg' alt='starter logo' style={{width:'16px',height:"16px"}}/>
                    <p>Starter</p>
                </div>
                <p>Starts at</p>
                <p>$18/mo</p>
                <p>billed at <span>$240</span>$216/yr</p>
                <div style={{display:'flex'}}>
                <NumberInput maxW='100px' defaultValue={7000} step={1000} min={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
                <p>Marketing Contacts</p>
                </div>
                <p>Includes 1,000 marketing contacts. Additional marketing contacts are sold in increments of 1,000 from $18.00/month.
                <span>More details.</span></p>
                <div>
                    <div>Pay Monthly ${"  "} Commit monthly</div>
                    <div>Pay UpfrontSAVE 10%Commit annually</div>
                </div>
                <Button colorScheme='orange' variant='solid'>Buy Now</Button>
                <Button colorScheme='orange' variant='outline'>Talk to sales</Button>
                <p><span>Free tools with increased limits</span>, plus:</p>
                <div>
                <p>MARKETING AUTOMATION</p>
                <ul>
                   <li>Form Automation</li>
                   <li>Email Automation</li>
                </ul>
                </div>
                <div>
                    <p>REMOVE HUBSPOT BRANDING FROM</p>
                    <ul>
                        <li>Forms</li>
                        <li>Email marketing</li>
                        <li>Landing pages</li>
                        <li>Live chat</li>
                    </ul>
                </div>
                <div>
                    <p>GET HELP FAST</p>
                    <ul>
                        <li>Email and in-app chat support</li>
                    </ul>
                </div>

            </div>
            <p>See All Features</p>
        </div>
        <div><div>
                <div style={{display:"flex"}}>
                    <img src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Pro.svg' alt='profeshional logo'/>
                    <p>Proffesional</p>
                </div>
                <p>Starts at</p>
                <p>$890/mo</p>
                <p>billed monthly</p>
                <div style={{display:'flex'}}>
                <NumberInput maxW='100px' defaultValue={2000} step={5000} min={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
                <p>Marketing Contacts</p>
                </div>
                <p>Includes 2,000 marketing contacts. Additional marketing contacts are sold in increments of 5,000 from $250.00/month.<span>More details.</span></p>
                <div>
                    <div>Pay Monthly ${"  "} Commit monthly</div>
                    <div>Pay UpfrontSAVE 10%Commit annually</div>
                </div>
                <Button colorScheme='orange' variant='solid'>Talk to sales</Button>
                <Button colorScheme='orange' variant='outline'>Start a free 14-day trial</Button>
                <div>
                    <p>Starter plus:</p>
                    
                    <div>
                    <p>AUTOMATE & PERSONALIZE ENGAGEMENT ACROSS CHANNELS</p>
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
                    <div>
                        <p>ORCHESTRATE EFFICIENT CAMPAIGNS</p>
                        <ul>
                            <li>A/B testing</li>
                            <li>Ad conversion events</li>
                            <li>Contact create attribution</li>
                        </ul>
                    </div>
                    <div>
                        <p>BUILD CUSTOM REPORTS</p>
                        <ul>
                            <li>Website traffic analytics</li>
                            <li>Campaign reporting</li>
                            <li>Custom reporting</li>
                            <li>Salesforce integration</li>
                        </ul>
                    </div>
                    <div>
                        <p>GET ADVANCED SUPPORT</p>
                        <ul>
                            <li>Phone support</li>
                        </ul>
                    </div>

                </div>
            </div>
            <p>See All Features</p></div>
        <div><div>
                <div style={{display:"flex"}}>
                    <img src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Ent.svg' alt='enterprise logo'/>
                    <p>Enterprise</p>
                </div>
                <p>Starts at</p>
                <p>$3,200/mo</p>
                <p>billed monthly $38,400/yr</p>
                <div style={{display:'flex'}}>
                <NumberInput maxW='100px' defaultValue={2000} step={5000} min={1000}>
                    <NumberInputField />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                 </NumberInputStepper>
                </NumberInput>
                <p>Marketing Contacts</p>
                </div>
                <p>Includes 10,000 marketing contacts. Additional marketing contacts are sold in increments of 10,000 from $100.00/month. <span>More details.</span></p>
                
                <Button colorScheme='orange' variant='solid'>Talk to sales</Button>
                <Button colorScheme='orange' variant='outline'>Start a free 14-day trial</Button>
                <div>
                    <p>Proffesional plus:</p>
                    <div>
                        <p>MANAGE YOUR TEAMS & BRANDS</p>
                        <ul>
                            <li>Single sign-on</li>
                            <li>Partitioning</li>
                            <li>Hierarchical teams</li>
                            <li>Permission sets</li>
                            <li>Field-level permissions</li>
                            <li>Email send frequency cap</li>
                        </ul>
                    </div>
                    <div>
                        <p>EXTEND THE PLATFORM</p>
                        <ul>
                            <li>Custom objects</li>
                            <li>Salesforce custom object sync</li>
                            <li>Adaptive testing</li>
                            <li>Sandboxes</li>
                        </ul>
                    </div>
                    <div>
                        <p>ADVANCE YOUR REPORTING</p>
                        <ul>
                            <li>Multi-touch revenue attribution</li>
                            <li>Behavioral event triggers and reporting</li>
                            <li>Predictive lead scoring</li>
                        </ul>
                    </div>
                </div>

            </div>
            <p>See All Features</p></div>
        </div>
    </>
  )
}

export default Offers