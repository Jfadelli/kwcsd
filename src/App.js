import React from 'react';
import { Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import Home from './components/Home'
import ThankYou from './components/thankYou'


// Services
import TenantRep from './components/services/tenant-rep'
import LandlordRep from './components/services/landlord-rep'
import InvestmentAcquisitionAndSales from './components/services/Investment-Acq'
import DevelopmentServices from './components/services/development-services'

// Team Bio
import MarkBio from './components/teamBio/mark-hughes'
import LibbyBio from './components/teamBio/libby-brignon'
import WillSchnieder from './components/teamBio/will-schnieder'

// Misc Links
import YourPropertyInfo from './components/propertyValuation/YourPropertyInfo'
import Contact from './components/contact/ContactForm'
import Referrals4You from './components/referrals/referrals'

function App() {
  return (
    <div>
      <Nav />
        <Route exact path='/' component={Home}/>
        <Route path='/thank-you' component={ThankYou} />

        {/* services offered links */}
        <Route path='/services/tenant-rep' component={TenantRep} />
        <Route path='/services/landlord-rep' component={LandlordRep} />
        <Route path='/services/Investment-Acq' component={InvestmentAcquisitionAndSales} />
        <Route path='/services/development-services' component={DevelopmentServices} />

        {/* team bio links */}
        <Route path='/services/mark-hughes' component={MarkBio} />
        <Route path='/services/libby-brignon' component={LibbyBio} />
        <Route path='/services/will-schnieder' component={WillSchnieder} />

        {/* property valuation links */}
        <Route path='/property-valuation/your-property-info' component={YourPropertyInfo} />

        {/* contact links */}
        <Route path='/contact/contact-form' component={Contact} />

        {/* referral links */}
        <Route path='/referrals/referrals4you' component={Referrals4You} />

    </div>
  );
}

export default App;
