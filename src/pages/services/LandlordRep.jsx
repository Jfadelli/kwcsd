import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServiceLayout from './ServiceLayout';

const marketingPlan = [
  {
    title: 'Brochure',
    text: 'We will create a digital and hard copy brochure/flyer to our targeted list of industries that we have identified.',
  },
  {
    title: 'Broker Cooperation',
    text: 'We will solicit outside broker cooperation through mass e-mails and specific broker mailings. (We will follow up via email with a sample digital brochure)',
  },
  {
    title: 'Internet / Listing Services',
    text: 'We will offer the property through various multiple listings services, including Co-Star LoopNet, RealNex, and CREXi.',
  },
  {
    title: 'Mailings',
    text: 'We will send out targeted mailings to the users we have identified with our marketing flyers.',
  },
  {
    title: 'Canvassing',
    text: 'We will hand deliver the brochure to all local companies in the target market.',
  },
];

export default function LandlordRep() {
  return (
    <ServiceLayout>
      <p>
        There are nearly always options available to tenants in the marketplace. As vacancies have
        increased, which are on the rise in some product types, Landlords are working hard to keep
        existing tenants. In this arena of competition between Landlords, it becomes imperative to
        have an aggressive marketing program tailored to the specific needs of the tenants in the
        marketplace while also balancing the financial goals of the property owner.
      </p>
      <p>
        Our Southern California advisory team is very selective in taking agency assignments. We
        recognize the value of our contribution to the assignment and work with landlords that are
        ready to be positioned for success.
      </p>
      <p>
        Accountability is also an important component of our marketing plan, as we keep our clients
        informed of all activity through regular reporting, meetings and discussions to the degree
        that is most desirable to the client.
      </p>
      <p>
        It has been confirmed through our experience that tenants are largely located within the
        “shadow” of a project. We will identify and pursue select tenants who best fit with each
        listing through a proactive and coordinated approach. In a planned and concentrated effort,
        we chart and develop a relationship with the proper class of tenant within a 5-mile “shadow”
        radius of every listing. In addition to pursuing local tenants, KW Commercial will place
        significant emphasis on marketing to the local commercial real estate broker community. This
        outreach leverages the tenant contacts and relationships of the entire commercial community
        to secure the best possible tenants for our clients.
      </p>

      <h2>Market Process</h2>
      <p>
        KW Commercial will work with each landlord management team to institute a plan to improve
        the presentation of all available suites to the marketplace.
      </p>
      <p>
        For each listing, the Marketing Team will formulate an exclusive detailed marketing plan.
        Each plan will include:
      </p>

      <Box component="dl" sx={{ my: 3 }}>
        {marketingPlan.map((item) => (
          <Box
            key={item.title}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '220px 1fr' },
              gap: { xs: 0.5, sm: 3 },
              py: 2,
              borderBottom: '1px dashed',
              borderColor: 'primary.main',
            }}
          >
            <Typography component="dt" variant="h4" sx={{ textTransform: 'uppercase', fontSize: '1rem', pt: 0.5 }}>
              {item.title}
            </Typography>
            <Typography component="dd" sx={{ m: 0 }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      <p>
        Our creativity and knowledge of investors and tenants in the marketplace, coupled with a
        great rapport with the brokerage community, offers a level of saturation and
        personalization that will enable us to discover and qualify solid prospects for each
        listing.
      </p>
    </ServiceLayout>
  );
}
