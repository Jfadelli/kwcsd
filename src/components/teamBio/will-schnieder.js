import React from 'react'
import Will from '../../static/images/willheadshot.png'
import Footer from '../footer'

export default function WillSchnieder() {
    return (
        <div className="bio-content">
            <div className="bio-header">
                <section className="bio-card">
                    <a href="mailto:will@kwcommercial.com"><img className="headshot" alt="Will Schneider" src={Will} title="Will Schnieder" /></a>
                    <h2>Will Schnieder</h2>
                    <p>760.450.4100</p>
                    <a className="bio-email" href="mailto:will@kwcommercial.com">will@kwcommercial.com</a>
                </section>
                <section className="bio-highlights">
                    <a href="https://www.loopnet.com/brokerdirectory/profile/will-schneider/wb7jxwl">
                    <img className="bio-prop-photo" alt="link to loopnet listing" src="https://images1.loopnet.com/i2/hU3AOPYluQ3AhAPo1uUnk0NYB4DiVaZaRga8xQr43dM/112/image.jpg"/>
                    </a>
                </section>
            </div>
            <div className="bio-body">  
                <section className="body">
                    <p>William “Will” Schneider, an Advisor for the SVN Asset Advisory Group (“SVNAAG”), specializes in multi-family sales and office sales and leasing. Will brings to SVNAAG a unique background in commercial real estate, finance, and law. Before joining SVNAAG, Will was the Vice President of Investment Sales, Multi-Family Group for a mid-size, boutique commercial real estate firm in San Diego. In this capacity, Will branched out into office sales and leasing. Will has also been a commercial mortgage broker who financed a variety of commercial properties including multi-family, industrial, and office buildings. He began his career as a loan officer for the Bank of America, where he made consumer and commercial loans.</p>
                    <p>In addition to his real estate and finance positions, Will had a successful career for many years as a litigation attorney, judge pro tem, arbitrator, and mediator in Los Angeles and San Diego counties. During this time, Will purchased a series of multi-family properties for his own portfolio by completing 1031 tax-deferred exchanges. Will retired from the practice of law in December 2012 to focus exclusively on commercial real estate brokerage.</p>
                    <p>Will’s transition from attorney to commercial real estate broker was the result of having evaluated numerous multi-family and commercial properties in California and across the nation as an investor and commercial mortgage broker. Will has a passion for the commercial real estate business. He believes that every commercial property has its own unique character which brings excitement and opportunity. Furthermore, with SVN’s talented staff of professionals and its global reach of offices and advisors, SVNAAG provides the ideal platform to deliver the finest local and national commercial real estate services available</p>.
                    <p>Will is a licensed California real estate broker and a member of the National Association of Realtors (“NAR”), the San Diego Association of Realtors (“SDAR”), and the North San Diego County Association of Real Estate-Commercial Division. He is also a member of the Carlsbad Chamber of Commerce and he participates on the planning committee for the Mira Costa College Real Estate Advisory Board. Will graduated from U.C.L.A. with a Bachelor of Science degree in Business Administration, and he received his Juris Doctor degree from Whittier College School of Law.sociation</p>
                </section>
            </div>
            <Footer/>
        </div>
    )
}