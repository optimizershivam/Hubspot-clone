import React from 'react'
import "./Toppage.css"
//import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Toppage = () => {
    
  return (
   
    <div className="main_body">
    <div className='alert_1'>
        <h3>Announcing HubSpot's free CMS tools. Build a secure, optimized website for free with easy-to-use content management tools.</h3>
        <button className="learn">Learn more</button>
    </div>
  
    <div className='product_1'>
        <img src="https://f.hubspotusercontent00.net/hubfs/53/Desktop%20Header%20Element.svg" alt="middleimage"></img>
    </div>

    
        <div className='main_sub'>
            <div className='links_product'>
                <div><Link to="/products" id="product_links">Products Overview</Link></div>
                <div>Marketing Hub</div>
            </div>
            <div className='middle_part_image'>
                <div className='left_image'>
                    <img src="	https://www.hubspot.com/hubfs/Marketing-Hub-Featured-Image-EN@2x.png" alt="post webinar img"></img>
                </div>
                <div className='right_image'>
                    <div className='title_right_image'>
                        <img src="	https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg" width="25px" height="25px" alt="imagealt"></img>
                        <p> Marketing Hub™</p>
                    </div>
                    <div className='start_demo'>
                        <p>Marketing Software</p>
                        <div className='button_right_demo'>
                            <button id="first_right_button">Get started free</button>
                            <button id="second_right_button">Get a demo</button>
                        </div>
                    </div>
                    <div id="product_feature">
                        <p>Product Description</p>
                        <p>Pricing Overview</p>
                        <p>Features</p>
                    </div>

                </div>
            </div>
            <div id="trusted">TRUSTED BY </div>
            <div id="trusted_by">
                <img src="	https://f.hubspotusercontent00.net/hubfs/53/Frontify%20Logo-1.png" id="img_1" alt="first_img"></img>
                <img src="	https://f.hubspotusercontent00.net/hubfs/53/VMWare%20Logo.png" id="img_2" alt="first_img"></img>
                <img src="	https://www.hubspot.com/hubfs/Loom-Feb-02-2022-03-45-49-81-PM.png" id="img_3" alt="first_img"></img>
                <img src="	https://f.hubspotusercontent00.net/hubfs/53/Monday.com%20Logo.png" id="img_4" alt="first_img"></img>
                <img src="	https://f.hubspotusercontent00.net/hubfs/53/Trello%20Logo.png" id="img_5" alt="first_img"></img>
                <img src="  https://www.hubspot.com/hubfs/Momentive_Logo.jpg" id="img_6" alt="first_img"></img>
                <img src="	https://www.hubspot.com/hubfs/Reddit.png" id="img_7" alt="first_img"></img>
                <img src="	https://www.hubspot.com/hubfs/Soundcloud-Feb-02-2022-03-09-45-78-PM.png" id="img_8" alt="first_img"></img>
            </div>

            <div id="description_middle">
                <div id="description_left">
                    <p id="bold_description">All your marketing tools and data-all under one roof</p>
                     <p>The job is tough for modern marketers. Either you’re juggling various point solutions, or you’re stuck with tools that are powerful but impossible to use. This means scattered customer data, lackluster marketing, and too much time spent fussing with software. But it doesn’t have to be that way.</p>
                     
                     <p>With Marketing Hub, all your marketing tools and data are on one easy-to-use, powerful platform. You’ll save valuable time and get all the context you need to provide a personalized experience that attracts and converts the right customers at scale.</p>
                     
                </div>
                <div id="video_right">
                <video width="450" height="250" controls >
                    <source src="https://play.vidyard.com/UNS5Wg4tj59YcDjPNK6V9L.jpg" type="video/mp4"/>
                </video>

                </div>
            </div>
           
        </div>
        <div id="grey_part">
         <div id="where_all">
            <p>Where All Your Marketing Comes Together</p>
         </div>
         <div id="attract_attention">
            <div id="underline_attract">Attract Attention</div>
             <div>Convert More Leads</div>
             <div>Report & Customize</div>

         </div>
         <hr id="line_over"></hr>
         <div id="create_content">
            <p>Create content your prospects crave, and make it impossible to miss.</p>
            <img src="https://f.hubspotusercontent00.net/hubfs/53/MH1_Attract%20Attention.png" alt="Attract Attention"></img>
         </div>
         <div id="popular_feature">
            <h1 id="popular_feature_above_blog">POPULAR FEATURES:</h1>
            <br />
            <div id="flex_feature_left">
            <div id="flex_feature">
               <p id="blog_area">Blog</p>
                <p>Publish content your audience is looking for, and get discovered in search, social media, and beyond. Add calls-to-action that convert readers into customers.</p>
            </div>
            <div id="flex_feature">
               <p id="blog_area">SEO</p>
                <p>Build your search authority and outrank competitors with tools that help you plan your content strategy and optimize your content as you type.</p>
            </div>
            <div id="flex_feature">
               <p id="blog_area">Ad Tracking & Management</p>
                <p>Stop struggling to justify your ad spend. Manage Facebook, LinkedIn, and Google ads right inside HubSpot, and track which ads are turning prospects into customers.</p>
            </div>
            </div>
            <div id="flex_feature_right">
            <div id="flex_feature">
               <p id="blog_area">Social Media Management</p>
                <p>Stop letting important interactions go unnoticed. Monitor and prioritize conversations, and publish to social networks with the same tool you use to create campaigns.</p>
            </div>
            <div id="flex_feature">
               <p id="blog_area">Video</p>
                <p>Enhance the impact of your content through the power of video. Host and manage files right inside HubSpot, and easily embed them in social media, web pages, and blog posts.</p>
            </div>
            <div id="flex_feature">
               <p id="blog_area">Live chat</p>
                <p>Connect with and convert visitors in real time — when your product is top of mind. Use bots to qualify leads and scale your efforts so you can focus on the conversations that matter most.</p>
            </div>
            </div>
             
         
            
        </div>
        <div id="gfg_2">
           <img src="https://www.hubspot.com/hubfs/assets/hubspot.com/core-2020/sales/multi-col%20bg%20image.jpg" height="200px" width="100%" alt="background_image"></img>
          <h3 id="first-txt_2"> It's already easy to use. But we're still here for you.</h3>
          <h3 id="second-txt_2">Because you shouldn't have to figure it out all on your own.</h3>
        </div>
        <div id="customer_support_24_background">
        <div id="customer_support_24">
            <div id="services_5">
                <h2 id="support_24">24/7 Customer Support</h2>
                <p>HubSpot's award-winning customer support team is ready to help you with all your technical questions, and can be reached by live chat, email, or phone depending on your plan.</p>
            </div>
            <div id="services_5">
                <h2 id="support_24">Services</h2>
                <p>Get up and running quickly with a personalized onboarding plan. Then maximize results along the way with premium training, ongoing consulting, and technical services.</p>
            </div>
            <div id="services_5">
                <h2 id="support_24">Education</h2>
                <p>From blog articles to online courses to comprehensive certifications, HubSpot offers no shortage of free educational content to help your whole team stay ahead of the curve as you grow.</p>
            </div>

        </div>
        </div>
        
       
         <div id="light_gray_container">
       <h1 id="grows_with">Marketing Software That Grows With You</h1>
       <h2>Start with free tools and upgrade as you grow, or hit the ground running with one of 
        <br/>our premium editions</h2>
        <div id="free_starter">
            <div id="inner_free_starter">
            <div id="inner_free_starter_1">
               <h2>Free</h2>
               <p>100% free</p>
               <p>No credit card required</p>
               <button id="get_a_demo">Get Started free</button>
               <br />
               <br />
               <h3 id="popular_feature_inside_button_1">POPULAR FEATURES</h3>
            </div>
            <div id="inner_free_starter_2">
            <h2> Starter</h2>        
               <p>Starting at $45/month</p>
               <br/>
               <button id="get_a_demo">Buy now</button>
               <br />
               <br />
               <br />
               <br/>
               <h3 id="popular_feature_inside_button_2">POPULAR FEATURES</h3>
                
            </div>
            <div id="inner_free_starter_3">
            <h2>Professional</h2>
               <p>Starting at $800/month</p>
               <br/>
               <button id="get_a_demo">Get a demo</button>
               <br /><button id="free_trail_14">Start 14-day free trail</button>
               <br />
               <br />
               <h3 id="popular_feature_inside_button">POPULAR FEATURES</h3>
                
            </div>
            <div id="inner_free_starter_4">
            <h2>Enterprise</h2>
            <p>Starting at $3200/month</p>
            <br/>
               <button id="get_a_demo">Get a demo</button>
               <br /><button id="free_trail_14">Start 14-day free trail</button>
               <br />
               <br />
            
               <h3 id="popular_feature_inside_button">POPULAR FEATURES</h3>
                
            </div>
            </div>
        </div>

       <h4 id="for_more">For more detailed information on product packaging and the limits that apply, please see our Product and Services Catalog here. Price shown in USD and subject to applicable tax.</h4>
     <h3 id="consistently">CONSISTENTLY PRAISED BY HUBSPOT USERS ON REVIEW SITE G2.COM</h3>
    
    <div id="leader_momentum">
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingPlatforms_Leader_Leader.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingAutomation_MomentumLeader_Leader.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingAutomation_BestUsability_Enterprise_Total.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingAutomation_BestResults_Enterprise_Total.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingAutomation_BestRelationship_Enterprise_Total.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingAnalytics_MomentumLeader_Leader.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/AccountDataManagement_Leader_Mid-Market_Leader.png" alt="img_1"></img>
        </div>
        <div id="image_momentum">
            <img src="https://www.hubspot.com/hubfs/MarketingAutomation_Leader_Small-Business_Leader.png" alt="img_1"></img>
        </div>
    </div>
    </div>  
    <div id="how_hubspot_break">
        <h1>How HubSpot Customers Are Breaking Through the Noise</h1>
        <h3>Don't just take our word for it. Here's what some of our customers say about how Marketing Hub helps them cut through the clutter and deliver personalized messages in scalable ways.</h3>
        <div id="video_part_two">
            <div id="inside_video_two">
             <video width="500" height="300" controls >
               <source src="https://www.hubspot.com/products/marketing?hubs_content=www.hubspot.com%2F&hubs_content-cta=nav-software-marketing#" type="video/mp4"/>
             </video>
             <img src="https://f.hubspotusercontent00.net/hubfs/53/Kettlebell%20Kings%20Logo.png" alt="down_image"></img>
            </div>
            <div id="inside_video_two">
             <video width="500" height="300" controls >
               <source src="https://www.hubspot.com/products/marketing?hubs_content=www.hubspot.com%2F&hubs_content-cta=nav-software-marketing#" type="video/mp4"/>
             </video>
             <img src="https://f.hubspotusercontent00.net/hubfs/53/Oakland%20Harley%20Davidson%20Logo.png" alt="down_image"></img>
            </div>
        </div>
    </div>


    <div id="convert_all_hubspot">
        <h1>Attract and convert more leads with HubSpot's all-in-one marketing software.</h1>
         <div id="button_in_convert">
            <div>
            <button id="button_in_convert_button_1">Get started free</button>
            </div>
            <div>
            <button id="button_in_convert_button_2">Get a demo</button>
            </div>
         </div>
    </div>

    <div id="light_green_down_back">
        <h1 id="frequently_asked">Frequently Asked Questions</h1>
    <div id="marketing_maker">
        <div id="what_is_software_left">
             <div id="what_is_software_inside">
                <p>What is marketing software</p>
            </div> 
             <div id="what_is_software_inside">
                <p>What is popular marketing features?</p>
            </div>
       
        
            <div id="what_is_software_inside">
                <p>How much does Hubspot's marketing software cost?</p>
            </div>
            <div id="what_is_software_inside">
                <p>How much does it take to implement Hubspot's  marketing software?</p>
            </div>
        
       
            <div id="what_is_software_inside">
                <p>Does Hubspot's marketing software integrate with Salesforce and other third party tools</p>
            </div>
            <div id="what_is_software_inside">
                <p>What reporting capabilities do I have with Marketing Hub ?</p>
            </div>
        </div>
        <div id="what_is_software_right">
            <div id="what_is_software_inside">
                <p>Can Hubspot help me in resource my marketing?</p>
            </div>
           <div id="what_is_software_inside">
                <p>How is marketing Hub diffrent from other marketing software?</p>
            </div>
        
        
            <div id="what_is_software_inside">
                <p>Are Hubspot's free marketing and CRM tools actually free</p>
            </div>
            <div id="what_is_software_inside">
                <p>CAan I customize the data in my Marketing Hub account?</p>
            </div>
      
        
            <div id="what_is_software_inside">
                <p>What kind of customer support can I expect?</p>
            </div>
            <div id="what_is_software_inside">
                <p>How does Marketing Hub works with Sales Hub,Service Hub,CMS Hub, and Operations Hub?</p>
            </div> 
            
        </div>
    
    </div>
    </div>
        
    </div>

    



 <div className='extraservicesmain'>

<div className='extraservicesmaintopdiv'>
    <h1>You may also like ...</h1>
</div>

<div className='extraservicesmainmiddlediv'>
    <p>Marketing Hub is one piece of HubSpot’s complete CRM platform to help your business grow better. Each product is powerful alone, but they’re even better when used together.</p>
</div>

<div className='extraservicesmainbottomdiv'>
    <div className='extraservicesmainbottominnerdiv'>
        <div className='extraservicesmainbottominnericondiv'>
            <img className='extraservicesmainbottominnericon' src="https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg" alt="icon" />
        </div>
        <div className='extraservicesmainbottominnerheaddiv'>
            <h3>Sales Hub</h3>
        </div>
        <div className='extraservicesmainbottominnerparadiv'>
            <p>Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</p>
        </div>
        <div className='extraservicesmainbottominnerlinkdiv'>
            <h4 className='extraservicesmainbottominnerlink'>Learn about Sales Hub</h4>
        </div>
    </div>

    <div className='extraservicesmainbottominnerdiv'>
    <div className='extraservicesmainbottominnericondiv'>
            <img className='extraservicesmainbottominnericon' src="https://www.hubspot.com/hubfs/product_icons_2022/ServiceHub_Icon_Gradient_RGB_24px.svg" alt="icon" />
        </div>
        <div className='extraservicesmainbottominnerheaddiv'>
            <h3>Service Hub</h3>
        </div>
        <div className='extraservicesmainbottominnerparadiv'>
            <p>Customer service management software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.</p>
        </div>
        <div className='extraservicesmainbottominnerlinkdiv'>
            <h4 className='extraservicesmainbottominnerlink'>Learn about Service Hub</h4>
        </div>
    </div>

    <div className='extraservicesmainbottominnerdiv'>
    <div className='extraservicesmainbottominnericondiv'>
            <img className='extraservicesmainbottominnericon' src="https://www.hubspot.com/hubfs/product_icons_2022/CMSHub_Icon_Gradient_RGB_24px.svg" alt="icon" />
        </div>
        <div className='extraservicesmainbottominnerheaddiv'>
            <h3>CMS Hub</h3>
        </div>
        <div className='extraservicesmainbottominnerparadiv'>
            <p>Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</p>
        </div>
        <div className='extraservicesmainbottominnerlinkdiv'>
            <h4 className='extraservicesmainbottominnerlink'>Learn about CMS Hub</h4>
        </div>
    </div>
</div>




    <div className='marketfootermain'>
        <div className='marketfootermaintop'>

            <div className='marketfootermaintopinner1'>
                <div className='marketfootermaintopinner1left'>
                    <div className='marketfootermaintopinner1leftheaddiv'>
                        <p className='marketfootermaintopinner1lefthead'>Popular Features</p>
                    </div>
                    <div className='marketfootermaintopinner1leftparadiv'>
                        <p className='marketfootermaintopinner1leftpara'>Free Meeting Scheduler App</p>
                        <p className='marketfootermaintopinner1leftpara'>Social Media Tools</p>
                        <p className='marketfootermaintopinner1leftpara'>Email Tracking Software</p>
                        <p className='marketfootermaintopinner1leftpara'>Sales Email Automation</p>
                        <p className='marketfootermaintopinner1leftpara'>Ads Software</p>
                        <p className='marketfootermaintopinner1leftpara'>Email Marketing Software</p>
                        <p className='marketfootermaintopinner1leftpara'>Lead Management Software</p>
                        <p className='marketfootermaintopinner1leftpara'>Pipeline Management Tools</p>
                    </div>
                </div>

                <div className='marketfootermaintopinner1right'>
                    <div className='marketfootermaintopinner1rightparadiv'>
                    <p className='marketfootermaintopinner1leftpara'>Sales Email Templates</p>
                        <p className='marketfootermaintopinner1leftpara'>Help Desk Software</p>
                        <p className='marketfootermaintopinner1leftpara'>Free Online Form Builder</p>
                        <p className='marketfootermaintopinner1leftpara'>Free Chatbot Builder</p>
                        <p className='marketfootermaintopinner1leftpara'>Free Live Chat Software</p>
                        <p className='marketfootermaintopinner1leftpara'>Marketing Analytics</p>
                        <p className='marketfootermaintopinner1leftpara'>Free Landing Page Builder</p>
                    </div>
                </div>
            </div>

            <div className='marketfootermaintopinner2'>
            <hr className='marketfootermaintopinner2line'/>
            </div>

            <div className='marketfootermaintopinner3'>

                <div className='marketfootermaintopinner3left'>
                <div className='marketfootermaintopinner1leftheaddiv'>
                        <p className='marketfootermaintopinner1lefthead'>Free Tools</p>
                    </div>
                    <div className='marketfootermaintopinner1leftparadiv'>
                        <p className='marketfootermaintopinner1leftpara'>Website Grader</p>
                        <p className='marketfootermaintopinner1leftpara'>Make My Persona</p>
                        <p className='marketfootermaintopinner1leftpara'>Email Signature Generator</p>
                        <p className='marketfootermaintopinner1leftpara'>Blog Ideas Generator</p>
                        <p className='marketfootermaintopinner1leftpara'>Invoice Template Generator</p>
                        <p className='marketfootermaintopinner1leftpara'>Marketing Plan Generator</p>
                        <p className='marketfootermaintopinner1leftpara'>Free Business Templates</p>
                        <p className='marketfootermaintopinner1leftpara'>Industry Benchmark Data</p>
                        <p className='marketfootermaintopinner1leftpara'>Software Comparisons Library</p>
                        <p className='marketfootermaintopinner1leftpara'>Website Themes & Templates</p>
                    </div>
                </div>

                
                <div className='marketfootermaintopinner3left'>
                <div className='marketfootermaintopinner1leftheaddiv'>
                        <p className='marketfootermaintopinner1lefthead'>Company</p>
                    </div>
                    <div className='marketfootermaintopinner1leftparadiv'>
                        <p className='marketfootermaintopinner1leftpara'>About Us</p>
                        <p className='marketfootermaintopinner1leftpara'>Careers</p>
                        <p className='marketfootermaintopinner1leftpara'>Management Team</p>
                        <p className='marketfootermaintopinner1leftpara'>Board of Directors</p>
                        <p className='marketfootermaintopinner1leftpara'>Investor Relations</p>
                        <p className='marketfootermaintopinner1leftpara'>Blog</p>
                        <p className='marketfootermaintopinner1leftpara'>Contact Us</p>
                    </div>
                </div>
            
                <div className='marketfootermaintopinner3left'>
                <div className='marketfootermaintopinner1leftheaddiv'>
                        <p className='marketfootermaintopinner1lefthead'>Customers</p>
                    </div>
                    <div className='marketfootermaintopinner1leftparadiv'>
                        <p className='marketfootermaintopinner1leftpara'>Customer Support</p>
                        <p className='marketfootermaintopinner1leftpara'>Join a Local User Group</p>

                        <div className='marketfootermaintopinner1leftheaddiv'>
                        <p className='marketfootermaintopinner1lefthead'>Partners</p>
                        </div>

                        <p className='marketfootermaintopinner1leftpara'>All Partner Programs</p>
                        <p className='marketfootermaintopinner1leftpara'>Solutions Partner Program</p>
                        <p className='marketfootermaintopinner1leftpara'>App Partner Program</p>
                        <p className='marketfootermaintopinner1leftpara'>HubSpot for Startups</p>
                        <p className='marketfootermaintopinner1leftpara'>Affiliate Program</p>
                    </div> 

                    
                </div> 

            </div>
        </div>

        <div className='marketfootermiddlediv'>

            <div className='marketfootermiddledivleft'>
                <hr className='marketfootermiddledivleftline'/>
            </div>
            <div className='marketfootermiddledivmiddle'>
                <div className='marketfootermiddledivmiddlelogodiv'>
                    <img className='marketfootermiddledivmiddlelogo' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC" alt="logo" />
                </div>
                <div className='marketfootermiddledivmiddlelogodiv'>
                    <img className='marketfootermiddledivmiddlelogo' src="data:image/jpeg;base64,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" alt="logo" />
                </div>
                <div className='marketfootermiddledivmiddlelogodiv'>
                    <img className='marketfootermiddledivmiddlelogo' src="data:image/png;base64,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" alt="logo" />
                </div>
                <div className='marketfootermiddledivmiddlelogodiv'>
                    <img className='marketfootermiddledivmiddlelogo' src="data:image/png;base64,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" alt="logo" />
                </div>
                <div className='marketfootermiddledivmiddlelogodiv'>
                    <img className='marketfootermiddledivmiddlelogo' src="data:image/png;base64,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" alt="logo" />
                </div>
                <div className='marketfootermiddledivmiddlelogodiv'>
                    <img className='marketfootermiddledivmiddlelogo' src="data:image/png;base64,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" alt="logo" />
                </div>
            </div>
            
            <div className='marketfootermiddledivleft'>
                <hr className='marketfootermiddledivleftline'/>
            </div>

        </div>

        <div className='marketfooterbottom'>
            <div className='marketfooterbottom1'>
                <img src="https://www.hubspot.com/hubfs/WBZ-1165%20Global%20Nav%20Redesign/Wordmark-White.svg" alt="logo" />
            </div>
            <p className='marketpagecopy'>Copyright © 2022 HubSpot, Inc.</p>
            <div className='marketpagecopydown'>
                <p className='marketpagecopydownpara'>Legal Stuff</p>
                <p className='marketpagecopydownpara'>Privacy Policy</p>
                <p className='marketpagecopydownpara'>Security</p>
            </div>
        </div>

    </div>
  


</div>


        

        
       
    </div>









   
    
    
  
     )
     

    }
       




export default Toppage