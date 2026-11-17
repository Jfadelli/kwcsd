import { useSearchParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { Page, Prose } from '../components/Page';
import FormShell from '../components/forms/FormShell';
import { agents, findAgent } from '../data/agents';
import { contactSchema, INQUIRY_TYPES, TIMEFRAMES } from '../lib/schemas';
import { submitForm } from '../lib/submitForm';
import { useForm } from '../lib/useForm';
import teamwork from '../assets/images/teamwork.webp';

export default function Contact() {
  const [params] = useSearchParams();
  const preselected = findAgent(params.get('agent'))?.id ?? '';

  const form = useForm({
    schema: contactSchema,
    initialValues: {
      inquiryType: '',
      timeframe: '',
      agentId: preselected,
      fullName: '',
      email: '',
      phone: '',
      message: '',
      website: '',
    },
    onSubmit: (values) => submitForm('contact', values),
  });
  const { field } = form;

  return (
    <Page title="Contact Us">
      <Prose sx={{ textAlign: 'center', mb: 2 }}>
        <p>
          We’re here to help with all your commercial real estate needs. Whether you’re looking to
          buy, sell, lease, or simply need expert advice, our team is ready to assist you.
        </p>
      </Prose>

      <FormShell
        form={form}
        image={teamwork}
        imageAlt="Commercial real estate team collaboration"
        successTitle="Thank you!"
        successText="Your message has been sent. One of our team members will get back to you shortly."
      >
        <TextField select label="I am looking to" required {...field('inquiryType')}>
          {INQUIRY_TYPES.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField select label="My timeframe is" required {...field('timeframe')}>
          {TIMEFRAMES.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Preferred agent"
          {...field('agentId')}
          sx={{ gridColumn: { sm: '1 / -1' } }}
          helperText={field('agentId').helperText.trim() || 'Optional. Otherwise the team will reply.'}
        >
          <MenuItem value="">No preference</MenuItem>
          {agents.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.name} ({a.specialization || 'Generalist'})
            </MenuItem>
          ))}
        </TextField>

        <TextField label="Full name" required autoComplete="name" {...field('fullName')} />
        <TextField label="Phone" required type="tel" autoComplete="tel" placeholder="(555) 555-5555" {...field('phone')} />
        <TextField
          label="Email"
          required
          type="email"
          autoComplete="email"
          {...field('email')}
          sx={{ gridColumn: { sm: '1 / -1' } }}
        />
        <TextField
          label="Message"
          required
          multiline
          minRows={4}
          placeholder="Tell us about your needs…"
          {...field('message')}
          sx={{ gridColumn: { sm: '1 / -1' } }}
        />
      </FormShell>
    </Page>
  );
}
