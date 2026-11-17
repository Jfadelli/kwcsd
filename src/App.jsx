import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Other pages load on demand, so the home page downloads less up front.
const TenantRep = lazy(() => import('./pages/services/TenantRep'));
const LandlordRep = lazy(() => import('./pages/services/LandlordRep'));
const InvestmentAcquisition = lazy(() => import('./pages/services/InvestmentAcquisition'));
const DevelopmentEntitlement = lazy(() => import('./pages/services/DevelopmentEntitlement'));
const TeamBio = lazy(() => import('./pages/TeamBio'));
const PropertyValuation = lazy(() => import('./pages/PropertyValuation'));
const PropertySearch = lazy(() => import('./pages/PropertySearch'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="services/tenant-rep" element={<TenantRep />} />
        <Route path="services/landlord-rep" element={<LandlordRep />} />
        <Route path="services/Investment-Acq" element={<InvestmentAcquisition />} />
        <Route
          path="services/development-and-entitlement-services"
          element={<DevelopmentEntitlement />}
        />

        <Route path="team-bio/:agentId" element={<TeamBio />} />

        <Route path="property/your-property-info" element={<PropertyValuation />} />
        <Route path="property/property-search" element={<PropertySearch />} />

        <Route path="contact/contact-form" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
