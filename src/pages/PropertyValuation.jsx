import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Page, Prose } from '../components/Page';
import FormShell from '../components/forms/FormShell';
import { PROPERTY_SEARCH_INTRO } from '../components/PropertySearchSection';
import { propertySchema, PROPERTY_TYPES } from '../lib/schemas';
import { submitForm } from '../lib/submitForm';
import { useForm } from '../lib/useForm';
import highRise from '../assets/images/high-rise.webp';

const full = { gridColumn: { sm: '1 / -1' } };

export default function PropertyValuation() {
  const form = useForm({
    schema: propertySchema,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      street_address: '',
      city: '',
      zip: '',
      country: 'United States',
      property_type: '',
      building_sf: '',
      lot_size: '',
      website: '',
    },
    onSubmit: (values) => submitForm('property_valuation', values),
  });
  const { field } = form;

  return (
    <Page title="Property Valuation">
      <Prose sx={{ mb: 2 }}>
        <p>{PROPERTY_SEARCH_INTRO}</p>
      </Prose>

      <FormShell
        form={form}
        image={highRise}
        imageAlt="High-rise commercial building"
        successTitle="Request received"
        successText="Thank you. Our team will review your property and follow up with a market analysis shortly."
      >
        <Typography variant="h4" component="h2" sx={{ ...full, mb: 1.5 }}>
          Your contact information
        </Typography>
        <TextField label="Name" required autoComplete="name" {...field('name')} sx={full} />
        <TextField label="Email" required type="email" autoComplete="email" {...field('email')} />
        <TextField label="Phone" required type="tel" autoComplete="tel" placeholder="(555) 555-5555" {...field('phone')} />

        <Typography variant="h4" component="h2" sx={{ ...full, mt: 1, mb: 1.5 }}>
          Property information
        </Typography>
        <TextField label="Street address" required autoComplete="street-address" {...field('street_address')} sx={full} />
        <TextField label="City" required autoComplete="address-level2" {...field('city')} />
        <TextField label="Zip code" required autoComplete="postal-code" inputMode="numeric" {...field('zip')} />
        <TextField label="Country" required autoComplete="country-name" {...field('country')} />
        <TextField select label="Property type" required {...field('property_type')}>
          {PROPERTY_TYPES.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField label="Building size" required placeholder="e.g. 5,000 sq ft" {...field('building_sf')} />
        <TextField label="Lot size" required placeholder="e.g. 10,000 sq ft or 0.25 acres" {...field('lot_size')} />
      </FormShell>
    </Page>
  );
}
