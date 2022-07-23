import React from 'react'
import {Button, Image, Input} from '@chakra-ui/react'
import paymentSlider from './hubSpot.png'
import './Payment.css'
const Payment = () => {
  return (
    <>
        <p style={{margin:'auto',fontSize:'32px',fontWeight:'600',color:'#33475b',marginTop:'50px',marginBottom:'25px',marginLeft:'70px'}}>Checkout</p>
        <div style={{width:'90%',textAlign:'center',borderTop:'1px solid rgb(203,214,226)',justifyContent:'center',margin:'auto'}}></div>
        <div><img className='paymentNavImg'  src={paymentSlider} alt='payment'/></div>
        <div className='paymentDiv'>
            <div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <p className='detailDivText'>Company details</p><p style={{color:'rgb(0,163,141'}}>Change</p>
                </div>
                <p style={{fontWeight:'400',fontSize:'14px',color:'#33475',lineHeight:'24px'}}>Used to calculate tax and will appear on billing documents.</p>
                <p style={{fontWeight:'400',fontSize:'14px',color:'rgb(124,152,182'}}>Address</p>
                <p className='detailDivText'>Payment details</p>
                <div className='detailsDivInfo'>
                    <p style={{fontWeight:'600'}}>Some payments from Indian-issued credit cards can't be accepted due to a new directive from the Reserve Bank of India.</p>
                    <p>If you're paying with this type of card, click <span style={{fontWeight:'600',color:'#0091ae'}}>Learn More</span> <sapn style={{fontWeight:'200'}}>to see next steps.</sapn></p>
                </div>
                <p style={{fontWeight:'600',fontSize:'14px'}}>Add a debit or credit card</p>
                <form>
                <div className='cardInputDiv'><p>Card Number*</p>
                <div style={{display:'flex',gap:'2px'}}>
                    <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1498/images/cardTypes/amex.png' alt='cardimg'/>
                    <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1752/images/cardTypes/Maestro.png' alt='cardimg'/>
                    <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1752/images/cardTypes/mastercard.png' alt='cardimg'/>
                    <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1498/images/cardTypes/visa.png' alt='cardimg'/>
                </div></div>
                <Input
                backgroundColor=' rgb(254, 250, 250)'
                   name='number'
                   type='number' 
                   label='Credit Card Number' 
                   placeholder='0000111100001111' 
                />
                <p>Expiration date*</p>
                <Input backgroundColor=' rgb(254, 250, 250)' htmlSize={4} width='auto' placeholder='MM/YY'/>
                <p>Name on card*</p>
                <Input backgroundColor=' rgb(254, 250, 250)'/>
                <p>Security code*</p>
                <div style={{display:'flex',gap:'30px'}}><Input backgroundColor=' rgb(254, 250, 250)' htmlSize={4} width='auto'/><div style={{display:'flex',gap:'4px'}}><Image src='https://static.hsappstatic.net/ui-images/static-2.422/optimized/credit-card-back.svg' alt='securityImg' width='34px'/><p style={{lineHeight:'3'}}>3 digit on back of card</p></div></div>
                </form>
         <Button colorScheme='orange'>Save & continue</Button>
            </div>
            <div>
                <div>Subscription</div>
                <div>
                    <div><Image/></div>
                    <div>
                        <p>Marketing Hub Starter - Marketing Contacts (1,000 Marketing Contacts Included)</p>
                        <p>Starter product discount (64%)</p>
                    </div>
                    <div>
                        <p>$600.00</p>
                        <p>−$384.00</p>
                        <p>$216.00</p>
                    </div>
                </div>
                <div>Summary</div>
                <div>
                    <div>
                        <p>1 year subscription, billed annually</p>
                        <p>GST</p>
                    </div>
                    <div>
                        <p>$216.00</p>
                        <p>CALCULATED $0.00</p>
                    </div>
                </div>
                <div><p>Order total
(including tax)</p><p>$216.00</p></div>
<div><p>You save</p><p>$384.00</p></div>
            </div>
        </div>
    </>
  )
}

export default Payment