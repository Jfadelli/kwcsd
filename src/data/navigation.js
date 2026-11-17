import { agents } from './agents';
import { services } from './services';

/*
 * Top navigation. An entry with `to` is a plain link; an entry with `items`
 * is a dropdown on desktop and a section in the mobile menu.
 */
export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'Services Offered',
    items: services.map((s) => ({ label: s.menuLabel, to: s.path })),
  },
  {
    label: 'Team Members',
    items: agents.map((a) => ({ label: a.name, to: `/team-bio/${a.id}` })),
  },
  {
    label: 'Property',
    items: [
      { label: 'Your Property Info', to: '/property/your-property-info' },
      { label: 'Property Search', to: '/property/property-search' },
    ],
  },
  { label: 'Contact Us', to: '/contact/contact-form' },
];
