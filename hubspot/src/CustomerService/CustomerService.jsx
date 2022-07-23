import React from 'react';
import './CustomerService.css';

const CustomerService = () => {
  return (
    <div>
        
    <div className='customerservicemaindiv'>
        <div className='customerserviceleftdiv'>
            <img className='imglogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png" alt="logo" />
        </div>
        <div className='customerservicemiddlediv'>
            <p className='customerservicemiddlepara'>Help Center</p>
        </div>
        <div className='customerservicerigthdiv'>
            <p>Software</p>
            <p>Pricing</p>
            <p>Resources</p>
            <p>Partners</p>
            <p>About</p>
        </div>
        </div>

        <div className='customerservicesearch'>
            <div className='customerservicesearchheaddiv'>
                <p className='customerservicesearchhead'>How can we help?</p>
            </div>
            <div className='customerservicesearchinputdiv'>
            <input className='customerservicesearchinput' type="text" placeholder='Search all help and learning resources' />
            </div>
        </div>

        <div className='hubspotmaindiv'>
            <div className='hubspotmaintopdiv'>
                <div className='hubspotmaintopinnerdiv'>
                    <div className='hubspotmaintopinnerheaddiv'>
                        <p className='hubspotmaintopinnerhead'>Community</p>
                    </div>
                    <div className='hubspotmaintopinnerimgdiv'>
                        <img className='hubspotmaintopinnerimg' src="https://static.hsappstatic.net/ui-images/static-2.331/optimized/mobile-onboarding-welcome.svg" alt="" />
                    </div>
                    <div className='hubspotmaintopinnerparadiv'>
                        <p className='hubspotmaintopinnerpara'>Start a discussion, browse solutions, and get tips from HubSpot experts</p>
                    </div>
                </div>

                <div className='hubspotmaintopinnerdiv'>
                <div className='hubspotmaintopinnerheaddiv'>
                        <p className='hubspotmaintopinnerhead'>Knowledge Base</p>
                    </div>
                    <div className='hubspotmaintopinnerimgdiv'>
                        <img className='hubspotmaintopinnerimg' src="https://static.hsappstatic.net/ui-images/static-2.331/optimized/knowledge-base.svg" alt="" />
                    </div>
                    <div className='hubspotmaintopinnerparadiv'>
                        <p className='hubspotmaintopinnerpara'>Read how-to articles and guides for all HubSpot tools</p>
                    </div>
                </div>

                <div className='hubspotmaintopinnerdiv'>
                <div className='hubspotmaintopinnerheaddiv'>
                        <p className='hubspotmaintopinnerhead'>Academy</p>
                    </div>
                    <div className='hubspotmaintopinnerimgdiv'>
                        <img className='hubspotmaintopinnerimg' src="https://static.hsappstatic.net/ui-images/static-2.331/optimized/training-academy.svg" alt="" />
                    </div>
                    <div className='hubspotmaintopinnerparadiv'>
                        <p className='hubspotmaintopinnerpara'>Watch video trainings and get certified in HubSpot</p>
                    </div>
                </div>

            </div>
            <div className='hubspotmainbottomdiv'>
            <div className='hubspotmaintopinnerdiv'>
            <div className='hubspotmaintopinnerheaddiv'>
                        <p className='hubspotmaintopinnerhead'>Developer Documentation</p>
                    </div>
                    <div className='hubspotmaintopinnerimgdiv'>
                        <img className='hubspotmaintopinnerimg' src="https://static.hsappstatic.net/ui-images/static-2.331/optimized/api.svg" alt="" />
                    </div>
                    <div className='hubspotmaintopinnerparadiv'>
                        <p className='hubspotmaintopinnerpara'>Read reference documentation for API and CMS development</p>
                    </div>
            </div>

                <div className='hubspotmaintopinnerdiv'>
                <div className='hubspotmaintopinnerheaddiv'>
                        <p className='hubspotmaintopinnerhead'>Customer Blog</p>
                    </div>
                    <div className='hubspotmaintopinnerimgdiv'>
                        <img className='hubspotmaintopinnerimg' src="https://static.hsappstatic.net/ui-images/static-2.331/optimized/training-crm.svg" alt="" />
                    </div>
                    <div className='hubspotmaintopinnerparadiv'>
                        <p className='hubspotmaintopinnerpara'>Read examples of how real customers use HubSpot for their business</p>
                    </div>
                </div>

                <div className='hubspotmaintopinnerdiv'>
                <div className='hubspotmaintopinnerheaddiv'>
                        <p className='hubspotmaintopinnerhead'>Solutions Partners</p>
                    </div>
                    <div className='hubspotmaintopinnerimgdiv'>
                        <img className='hubspotmaintopinnerimg' src="https://static.hsappstatic.net/ui-images/static-2.331/optimized/team.svg" alt="" />
                    </div>
                    <div className='hubspotmaintopinnerparadiv'>
                        <p className='hubspotmaintopinnerpara'>Work with a certified Partner to do more in HubSpot</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='customerservicebottomdiv'>
            <div className='customerservicebottominnerdiv'>
                <div className='customerservicebottominnerlogodiv'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABbCAMAAABUORtaAAAAe1BMVEX39/f/XQD3+fr/TQD+cUH52c72////WAD/UwD/UAD3/f7/SgD8qIz39fP46OL3+/v47en6yrn449351cn7rpf+azH/RAD+cTz/Yh39kW/7uKX/XA79jGn6w7P53dT8nH/6z8L9h2H9gVf9e1H/Zif8oYf8l3j+d0r6x72Bzby+AAAEG0lEQVRoge1Z22KqMBCEoLkpBhGt0qK2Vtv//8JTi8luIIBAeDqdRyQZsruZncQg+IN/KKImnV+qzfcmkJPNT0gmBBfRMiYTEcQzEd7Bt8k0oVIvLCzB9pOsQh54qMHeJ8gF2UQhIFr7p6CfIQbzngmZC4uBL6lnhvg1tMETv8mWJ15hYG9eM0HSKKwimvtcBL3orRCatbCtx0zItVmCOBsKkfuLE9maDz/QpaHYx74IZGYqlSUk3puAXX0tIjYEPKOBLEzIFis/yaY3k+bXe3Lp1ijgu5dkk6NZQnRWvw9Q3n2IhzSVyj7KuMuDebL1wIArNS3nI4nXilVGkPhNR51mhoKPrlg0mYDJlKlYdhqZbLJyBkStTfbFcVwqKCT1Bdc+Sv9l1CLIcWFXqoZKG37oCwn24sP+VLQNP0cwyAI2W0UgSAJ6PqJioXXWRU7m0CkGN1R6NZO81steYUkfRkASk01RyIBIDBKos/l5cRy2CPoO8kN/WvV1Cbj+zEk/zO9fgzKhNpDmDfkp3B0H7O5PUth2gyyghDbwRi25u3OmxM7TgDAhkyd+ayXBnqz0YzFU7AALWBsdbxFDaQJkHtmUvZYAJm9fPlFfDBhm5Xxoz/e1gCQFTS3KsVBad7krn+FqmPcTDzB5bPb4OHlDDPqL7YruAddukhk6A2kRIQn02KJPnFyKgIQIiZ0cZgFRpYKqkTOcUfi3CfowCxhDo8/MKDJHa4C0tih8M1B32UOBoJYd8hTmoo1dqhHI01kdMkYMKOSqvwXEXR5HVqJqtZ4jt/AUgwKTx1M8gpqchnscDtRQn7OAYPLYzYorbXIw0unaGoFM3sJ+HXknmzpQoJLdFrDF9cqlYcjsX9QZkt1pAbFzr1Q3bGqeV6ZRl6crFpm8WumBWRVnUh1WOcU0o237qLmORVTzFu5N6gCSgPopkKx2osSu3tAgfTxvi1OHjBXrEoXj21xi6Xht2Wby7leJD7gGg+DfGheB20lvtyuhYhdp0yJQJx5wK4K2fJMFrJg8B2IN149PWEDVZU1i7SsXTgp5rRqg6gtQDQ32Kta7sUHfkInLXFEmUNFXdxa6GGpG1AY9ddrcLgZ8p/JW+0iHyevPoMCOiNot4DPHjU4GbAFfKot46sjUzUBWYCIqkZDmztkRwecZmg+XyDG2HATiHSsRtXRj9wEZH7+zFkFaaTS/gvRfIP2nN9iNbcawVVs1BSgD3AISX9cgv5NBH16YikU25UIVGQeFZtONmCSaNOTFcT4aa0jqIxMEekfIo/GAY4Yoypjjw41f8OXj+jSbioGdHkfWQnS/PAh6c+HDjV8ILXFow3kFvnjfTkHB0X+bRJ2YYKx70NNgjPNbgNWFJvnhMvOHyyFfVboAkXKsXljacb8J/MP/hX8oVER6+BB2QgAAAABJRU5ErkJggg==" alt="" />
                </div>
                <div className='customerservicebottominnerheaddiv'>
                    <p className='customerservicebottominnerhead'>Get real time updates about outages and reliability</p>
                </div>
                <div className='customerservicebottominnerbtndiv'>
                    <button className='customerservicebottominnerbtn'>View</button>
                </div>
            </div>

            <div className='customerservicebottominnerdiv'>
            <div className='customerservicebottominnerlogodiv'>
                <img src="data:image/png;base64,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" alt="" />
            </div>
                <div className='customerservicebottominnerheaddiv'>
                <p className='customerservicebottominnerhead'>Get real time updates about outages and reliability</p>
                </div>
                <div className='customerservicebottominnerbtndiv'>
                <button className='customerservicebottominnerbtn'>View</button>
                </div>
            </div>

            <div className='customerservicebottominnerdiv'>
            <div className='customerservicebottominnerlogodiv'>
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
                <div className='customerservicebottominnerheaddiv'>
                <p className='customerservicebottominnerhead'>Get real time updates about outages and reliability</p>
                </div>
                <div className='customerservicebottominnerbtndiv'>
                <button className='customerservicebottominnerbtn'>View</button>
                </div>
            </div>
        </div>

        <div className='demopagefooter'>
        <div className='demopagefooterdiv'>
        <h4 className='demopagefooterheading'>Copyright © 2022 HubSpot, Inc.</h4>
        </div>
        <div className='demopagefooterlinkdiv'>
            <div className='legalstuff'>
                <p>Legal Stuff</p>
            </div>
            <div className='legalstuff2'>
            <p>Privacy Policy</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default CustomerService;