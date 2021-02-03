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

// Team Bio
import MarkBio from './components/teamBio/mark-hughes'
import LibbyBio from './components/teamBio/libby-brignon'
import WillBio from './components/teamBio/will-schnieder'
import VanBio from './components/teamBio/van-spears'
import AntoniaBio from './components/teamBio/antonia-bokelman'
import SueBio from './components/teamBio/sue-na'

// Misc Links
import YourPropertyInfo from './components/propertyValuation/YourPropertyInfo'
import Contact from './components/contact/ContactForm'
import Referrals4You from './components/referrals/referrals'


function App() {
  const classes = useStyles();
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
              <Route path='/team-bio/antonia-bokelman' component={AntoniaBio} />
              <Route path='/team-bio/libby-brignon' component={LibbyBio} />
              <Route path='/team-bio/mark-hughes' component={MarkBio} />
              <Route path='/team-bio/sue-na' component={SueBio} />
              <Route path='/team-bio/van-spears' component={VanBio} />
              <Route path='/team-bio/will-schnieder' component={WillBio} />

              {/* property valuation links */}
              <Route path='/property-valuation/your-property-info' component={YourPropertyInfo} />

              {/* contact links */}
              <Route path='/contact/contact-form' component={Contact} />

              {/* referral links */}
              <Route path='/referrals/referrals4you' component={Referrals4You} />
              </Switch>
            </ThemeProvider>
          </CSSTransition>

        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
