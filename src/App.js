import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './styles/theme'
import { useStyles } from './styles/style'

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
import DevelopmentServices from './components/services/development-services'

// New Multi Bio Component
import Bio from './components/teamBio/Bio'

// Property
import YourPropertyInfo from './components/property/YourPropertyInfo'
import PropertySearch from './components/buildoutPluggin/PropertySearch'



// Misc Links
import Contact from './components/contact/ContactForm'
import Referrals4You from './components/referrals/referrals'

import { Agent } from './components/teamBio/agentInfo/agentInfoList'



function App() {
  const classes = useStyles();
  let Agents = Object.values(Agent)

  return (
    <div className={classes.app}>
      <Nav />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={500}
            classNames='fade'>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route path='/thank-you' component={ThankYou} />

                {/* services offered links */}
                <Route path='/services/tenant-rep' component={TenantRep} />
                <Route path='/services/landlord-rep' component={LandlordRep} />
                <Route path='/services/Investment-Acq' component={InvestmentAcquisitionAndSales} />
                <Route path='/services/development-services' component={DevelopmentServices} />

                {/* team bio links */}
                {Agents.map(el => {
                  return (
                    <Route path={`/team-bio/`+el.pageLocation} component={Bio} />
                  )
                })}

                {/* property links */}
                <Route path='/property/your-property-info' component={YourPropertyInfo} />
                <Route path='/property/property-search' component={PropertySearch} />

                {/* contact links */}
                <Route path='/contact/contact-form' component={Contact} />

                {/* referral links */}
                {/* <Route path='/referrals/referrals4you' component={Referrals4You} /> */}
              </Switch>
            </ThemeProvider>
          </CSSTransition>

        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
