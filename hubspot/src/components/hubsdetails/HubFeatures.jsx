import React from 'react';
import "./HubDetails.css";
import {SiMarketo} from "react-icons/si";
import {GiRoundStar} from "react-icons/gi";
import {BsFillSuitHeartFill} from "react-icons/bs";
import {FaBox} from "react-icons/fa";
import {BsHexagonHalf} from "react-icons/bs"
import HubSingle from "./HubSingle"

const hubsDetailsInfo=[
  {
      logo:<SiMarketo/>,
      title:"Marketing Hub",
      path:"/",
      discribe:"Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.",
      featureName:"Popular Features",
      f1:"Lead generation",
      f2:"Marketing automation",
      f3:"Analytics"
  },
  {
    logo:<GiRoundStar/>,
    title:"Sales Hub",
    discribe:"Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.",
    featureName:"Popular Features",
    f1:"Advanced CRM",
    f2:"Meeting scheduling",
    f3:"Payments"
  },
  {
      logo:<BsFillSuitHeartFill/>,
      title:"Service Hub",
      discribe:"Customer service software to help you connect with customers, exceed expectations, and turn",
      featureName:"Popular Features",
      f1:"Tickets",
      f2:"Customer feedback",
      f3:"Knowledge base"
  },
  {
      logo:<FaBox/>,
      title:"CMS Hub",
      discribe:"Content management software that’s flexible for marketers, powerful for developers, ",
      featureName:"Popular Features",
      f1:"Drag-and-drop editor",
      f2:"SEO recommendations",
      f3:"Website themes"
  },
  {
      logo:<BsHexagonHalf/>,
      title:"Operations Hub",
      discribe:"Operations software that syncs your apps, cleans and curates customer data, and automates processes ",
      featureName:"Popular Features",
      f1:"Data sync",
      f2:"Programmable automation",
      f3:"Data quality automation"
  }
]

const HubFeatures = () => {
  return (
    <div className='hubFeature_Smain_div'>
    <div className='hubFeature_main_div'>
      {hubsDetailsInfo.map((e)=>(
        <HubSingle 
        logo={e.logo}
        title={e.title}
        f1={e.f1}
        f2={e.f2}
        f3={e.f3}
        path={e.path}
        discribe={e.discribe}
        featureName={e.featureName}
        />
      ))}
    </div>
    </div>
  )
}

export default HubFeatures
