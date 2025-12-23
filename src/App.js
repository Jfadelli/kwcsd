import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './styles/theme'
import './style.css'

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './styles/fade.css'

// Components
import Nav from './components/Nav'
import Home from './components/Home'
import ThankYou from './components/thankYou'

// Services
import TenantRep from './components/services/tenant-rep'
import LandlordRep from './components/services/landlord-rep'
import InvestmentAcquisitionAndSales from './components/services/Investment-Acq'
import DevlopmentAndEntitlementServices from './components/services/DevelopmentAndEntitlementServices'

// New Multi Bio Component
import Bio from './components/teamBio/Bio'

// Property
import YourPropertyInfo from './components/property/YourPropertyInfo'
import PropertySearch from './components/RealNex/PropertySearch'



// Misc Links
import Contact from './components/contact/ContactForm'
// import Referrals4You from './components/referrals/referrals'

import { Agent } from './components/teamBio/agentInfo/agentInfoList'

import packageJson from "../package.json";




function App() {
  const location = useLocation();
  const Agents = Object.values(Agent);

  useEffect(() => {
    // Cache invalidation on version updates
    const version = localStorage.getItem('version');
    if (version !== packageJson.version) {
      if ('caches' in window) {
        caches.keys().then((names) => {
          // Delete all the cache files
          names.forEach(name => {
            caches.delete(name);
          })
        });
      }

      localStorage.clear();
      localStorage.setItem('version', packageJson.version);
      // Note: Removed reload to prevent infinite loop
      // window.location.reload(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Nav />
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            timeout={500}
            classNames='fade'>
            <Routes location={location}>
              <Route path='/' element={<Home />} />
              <Route path='/thank-you' element={<ThankYou />} />

              {/* services offered links */}
              <Route path='/services/tenant-rep' element={<TenantRep />} />
              <Route path='/services/landlord-rep' element={<LandlordRep />} />
              <Route path='/services/Investment-Acq' element={<InvestmentAcquisitionAndSales />} />
              <Route path='/services/development-and-entitlement-services' element={<DevlopmentAndEntitlementServices />} />

              {/* team bio links */}
              {Agents.map(el => (
                <Route
                  key={el.pageLocation}
                  path={`/team-bio/${el.pageLocation}`}
                  element={<Bio />}
                />
              ))}

              {/* property links */}
              <Route path='/property/your-property-info' element={<YourPropertyInfo />} />
              <Route path='/property/property-search' element={<PropertySearch />} />

              {/* contact links */}
              <Route path='/contact/contact-form' element={<Contact />} />

              {/* referral links */}
              {/* <Route path='/referrals/referrals4you' element={<Referrals4You />} /> */}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </ThemeProvider>
  );
}

export default App;
