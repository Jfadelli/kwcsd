import { contactSchema, propertySchema } from '../lib/schemas';

const validContact = {
  inquiryType: 'lease',
  timeframe: 'lessThan6Months',
  agentId: '',
  fullName: 'Jane Tester',
  email: 'jane@example.com',
  phone: '(858) 555-1234',
  message: 'Looking for 2,000 sf in Carlsbad.',
};

const validProperty = {
  name: 'Bob Owner',
  email: 'bob@example.com',
  phone: '858.555.9999',
  street_address: '1 Main St',
  city: 'Carlsbad',
  zip: '92008',
  country: 'United States',
  property_type: 'office',
  building_sf: '5,000 sq ft',
  lot_size: '0.5 acres',
};

describe('contactSchema', () => {
  it('accepts a complete form', async () => {
    await expect(contactSchema.isValid(validContact)).resolves.toBe(true);
  });

  it('rejects an empty form with an error for every required field', async () => {
    const err = await contactSchema
      .validate({}, { abortEarly: false })
      .catch((e) => e);
    const fields = new Set(err.inner.map((e) => e.path));
    expect([...fields].sort()).toEqual(
      ['email', 'fullName', 'inquiryType', 'message', 'phone', 'timeframe'].sort(),
    );
  });

  it.each(['(858) 555-1234', '858.555.1234', '8585551234', '+1 858 555 1234', '1-858-555-1234'])(
    'accepts phone %s',
    async (phone) => {
      await expect(contactSchema.isValid({ ...validContact, phone })).resolves.toBe(true);
    },
  );

  it.each(['555-1234', 'call me', '12345'])('rejects phone %s', async (phone) => {
    await expect(contactSchema.isValid({ ...validContact, phone })).resolves.toBe(false);
  });

  it('only allows known agents', async () => {
    await expect(contactSchema.isValid({ ...validContact, agentId: 'will-schneider' })).resolves.toBe(true);
    await expect(contactSchema.isValid({ ...validContact, agentId: 'someone@evil.com' })).resolves.toBe(false);
  });
});

describe('propertySchema', () => {
  it('accepts a complete form', async () => {
    await expect(propertySchema.isValid(validProperty)).resolves.toBe(true);
  });

  it('requires a 5-digit zip in the US', async () => {
    await expect(propertySchema.isValid({ ...validProperty, zip: '9200' })).resolves.toBe(false);
    await expect(propertySchema.isValid({ ...validProperty, zip: '92008-1234' })).resolves.toBe(true);
  });

  it('allows other postal codes outside the US', async () => {
    await expect(
      propertySchema.isValid({ ...validProperty, country: 'Canada', zip: 'V6B 1A1' }),
    ).resolves.toBe(true);
  });

  it('requires a property type', async () => {
    await expect(propertySchema.isValid({ ...validProperty, property_type: '' })).resolves.toBe(false);
  });
});
