import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import App from '../App';
import theme from '../theme';

function renderAt(path) {
  return render(
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </ThemeProvider>,
  );
}

beforeEach(() => {
  window.scrollTo = vi.fn();
  global.fetch = vi.fn();
});

describe('pages', () => {
  it('renders the home page', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: 'Pacific Commercial Partners' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Development & Entitlement' })).toHaveAttribute(
      'href',
      '/services/development-and-entitlement-services',
    );
  });

  it('renders a team member bio with full email address', async () => {
    renderAt('/team-bio/will-schneider');
    expect(await screen.findByRole('heading', { name: 'Will Schneider' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'willschneider@kwcommercial.com' })).toHaveAttribute(
      'href',
      'mailto:willschneider@kwcommercial.com',
    );
    expect(screen.getByText(/Senior Broker-Associate/)).toBeInTheDocument();
  });

  it('shows not found for an unknown agent', async () => {
    renderAt('/team-bio/nobody');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('renders the development & entitlement page (v1 bug: it was blank)', async () => {
    renderAt('/services/development-and-entitlement-services');
    expect(await screen.findByText(/Compensation structure is negotiable/)).toBeInTheDocument();
  });
});

describe('contact form', () => {
  it('blocks submit and shows errors when required fields are empty', async () => {
    renderAt('/contact/contact-form');
    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', { name: 'Submit' }));
    expect(await screen.findByText('Full name is required.')).toBeInTheDocument();
    expect(screen.getByText('Please include a short message.')).toBeInTheDocument();
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('sends the agent id (never an email address) and shows success', async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'success', message: 'sent' }),
    });
    renderAt('/contact/contact-form?agent=will-schneider');
    const user = userEvent.setup();

    const pick = async (label, option) => {
      await user.click(await screen.findByRole('combobox', { name: new RegExp(label) }));
      await user.click(within(screen.getByRole('listbox')).getByRole('option', { name: option }));
    };
    await pick('I am looking to', 'Lease');
    await pick('My timeframe is', 'Less than 6 Months');
    await user.type(screen.getByRole('textbox', { name: /Full name/ }), 'Jane Tester');
    await user.type(screen.getByRole('textbox', { name: /Phone/ }), '(858) 555-1234');
    await user.type(screen.getByRole('textbox', { name: /Email/ }), 'jane@example.com');
    await user.type(screen.getByRole('textbox', { name: /Message/ }), 'Hello');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const [url, init] = global.fetch.mock.calls[0];
    expect(url).toBe('/api/send_email.php');
    const body = JSON.parse(init.body);
    expect(body).toMatchObject({
      formType: 'contact',
      inquiryType: 'lease',
      agentId: 'will-schneider',
      fullName: 'Jane Tester',
      website: '',
    });
    expect(JSON.stringify(body)).not.toMatch(/@kwcommercial\.com/);
    expect(await screen.findByText('Thank you!')).toBeInTheDocument();
  });

  it('shows the server error message when sending fails', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ status: 'fail', message: 'Too many submissions from your connection.' }),
    });
    renderAt('/property/your-property-info');
    const user = userEvent.setup();
    await user.type(await screen.findByRole('textbox', { name: /^Name/ }), 'Bob Owner');
    await user.type(screen.getByRole('textbox', { name: /Email/ }), 'bob@example.com');
    await user.type(screen.getByRole('textbox', { name: /Phone/ }), '8585559999');
    await user.type(screen.getByRole('textbox', { name: /Street address/ }), '1 Main St');
    await user.type(screen.getByRole('textbox', { name: /City/ }), 'Carlsbad');
    await user.type(screen.getByRole('textbox', { name: /Zip/ }), '92008');
    await user.click(screen.getByRole('combobox', { name: /Property type/ }));
    await user.click(within(screen.getByRole('listbox')).getByRole('option', { name: 'Office' }));
    await user.type(screen.getByRole('textbox', { name: /Building size/ }), '5,000');
    await user.type(screen.getByRole('textbox', { name: /Lot size/ }), '1 acre');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(await screen.findByText('Too many submissions from your connection.')).toBeInTheDocument();
  });
});
