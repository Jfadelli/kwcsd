import React from 'react';
import { Route } from 'react-router-dom'


import Nav from './components/Nav'
import Home from './components/Home'
import ThankYou from './components/thankYou'


// Services
import TenantRep from './components/services/tenant-rep'
import LandlordRep from './components/services/landlord-rep'
import InvestmentAcquisitionAndSales from './components/services/Investment-Acq'
import DevelopmentServices from './components/services/development-services'

import Button from '@material-ui/core/Button';


function App() {
  return (
    <div>
        <Nav />
        <Route exact path='/' component={Home}/>
        <Route path='/thank-you' component={ThankYou} />
        <Route path='/services/tenant-rep' component={TenantRep} />
        <Route path='/services/landlord-rep' component={LandlordRep} />
        <Route path='/services/Investment-Acq' component={InvestmentAcquisitionAndSales} />
        <Route path='/services/development-services' component={DevelopmentServices} />

    </div>
  );
}

export default App;
