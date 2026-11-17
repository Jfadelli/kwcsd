import * as Yup from 'yup';

import { agents } from '../data/agents';

export const INQUIRY_TYPES = [
  { value: 'buy', label: 'Buy' },
  { value: 'sell', label: 'Sell' },
  { value: 'lease', label: 'Lease' },
  { value: 'offerToLease', label: 'Offer to Lease' },
  { value: 'consult', label: 'Consult' },
];

export const TIMEFRAMES = [
  { value: 'lessThan3Months', label: 'Less than 3 Months' },
  { value: 'lessThan6Months', label: 'Less than 6 Months' },
  { value: 'lessThan12Months', label: 'Less than 12 Months' },
  { value: 'nextYear', label: 'Next Year' },
];

export const PROPERTY_TYPES = [
  { value: 'multifamily', label: 'Multifamily' },
  { value: 'office', label: 'Office' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'retail', label: 'Retail' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'recreation', label: 'Recreation' },
  { value: 'specialty', label: 'Specialty' },
];

const values = (list) => list.map((o) => o.value);

// Accepts any common format: (858) 555-1234, 858.555.1234, +1 858 555 1234...
const phone = Yup.string()
  .trim()
  .required('Phone number is required.')
  .test('phone', 'Enter a valid phone number, including area code.', (v) => {
    const digits = (v || '').replace(/\D/g, '');
    return digits.length === 10 || (digits.length === 11 && digits.startsWith('1')) ||
      (v || '').trim().startsWith('+') && digits.length >= 8 && digits.length <= 15;
  });

const email = Yup.string()
  .trim()
  .required('Email address is required.')
  .email('Enter a valid email address.')
  .max(254, 'That email address is too long.');

const name = (label) =>
  Yup.string().trim().required(`${label} is required.`).min(2, `${label} looks too short.`).max(100);

export const contactSchema = Yup.object({
  inquiryType: Yup.string()
    .required('Please choose what you’re looking to do.')
    .oneOf(values(INQUIRY_TYPES), 'Please choose what you’re looking to do.'),
  timeframe: Yup.string()
    .required('Please choose a timeframe.')
    .oneOf(values(TIMEFRAMES), 'Please choose a timeframe.'),
  agentId: Yup.string().oneOf(['', ...agents.map((a) => a.id)], 'Please choose an agent.'),
  fullName: name('Full name'),
  email,
  phone,
  message: Yup.string()
    .trim()
    .required('Please include a short message.')
    .max(5000, 'Please keep your message under 5,000 characters.'),
});

const isUS = (country) => /^(us|usa|u\.s\.a?\.?|united states( of america)?)$/i.test((country || '').trim());

export const propertySchema = Yup.object({
  name: name('Name'),
  email,
  phone,
  street_address: Yup.string().trim().required('Street address is required.').min(3, 'Street address looks too short.').max(200),
  city: Yup.string().trim().required('City is required.').min(2, 'City looks too short.').max(100),
  zip: Yup.string()
    .trim()
    .required('Zip code is required.')
    .max(12)
    .when('country', {
      is: isUS,
      then: (s) => s.matches(/^\d{5}(-\d{4})?$/, 'Enter a 5-digit zip code.'),
    }),
  country: Yup.string().trim().required('Country is required.').max(100),
  property_type: Yup.string()
    .required('Please select a property type.')
    .oneOf(values(PROPERTY_TYPES), 'Please select a property type.'),
  building_sf: Yup.string().trim().required('Building size is required.').max(50),
  lot_size: Yup.string().trim().required('Lot size is required.').max(50),
});
