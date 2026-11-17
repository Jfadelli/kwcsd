import markHeadshot from '../assets/images/mark-hughes.webp';
import libbyHeadshot from '../assets/images/libby-brignon.webp';
import sueHeadshot from '../assets/images/sue-na.webp';
import willHeadshot from '../assets/images/will-schneider.webp';
import peterHeadshot from '../assets/images/peter-kim.webp';

import markListing from '../assets/images/listing-mark-hughes.webp';
import libbyListing from '../assets/images/listing-libby-brignon.webp';
import sueListing from '../assets/images/listing-sue-na.webp';
import willListing from '../assets/images/listing-will-schneider.webp';

/*
 * Team roster. The order here is the order in the menu and the bio arrows.
 *
 * To add an agent:
 *   1. Add their photos to the image script (scripts/optimize_images.py) and run it.
 *   2. Add an entry below. `id` becomes the page URL: /team-bio/<id>
 *   3. Add the same `id` and email to AGENTS in api/config.php on the server,
 *      so the contact form can route messages to them.
 *
 * `bio` is a list of blocks. A string is a paragraph; { heading, items } is a
 * bulleted list with a lead-in line.
 */
export const agents = [
  {
    id: 'mark-hughes',
    name: 'Mark Hughes',
    phone: '714.614.7357',
    email: 'mhughes@kwcommercial.com',
    specialization: 'Team Lead | Generalist',
    loopnetLink: 'http://www.loopnet.com/brokerdirectory/profile/Mark%20Hughes/6glpewv',
    headshot: markHeadshot,
    listingImage: markListing,
    bio: [
      'Mr. Hughes has over 30 years of experience covering all aspects of commercial real estate brokerage, development, marketing, finance, and management. He has made extensive development and civic contributions to San Diego County.',
      'Mr. Hughes is currently the Managing Director of Commercial Services at KW Commercial, Carmel Valley / Del Mar. He previously was a Senior Advisor at Sperry Van Ness, specializing in land, multifamily and investment property.',
      'Mr. Hughes has extensive experience in investment analysis and the marketing of commercial real estate, utilizing communication skills built upon his education in Journalism and Communication and his military service as a USAF Public Relations Officer. As the Director of Marketing for Century Southwest Corporation, Mr. Hughes built the sales organization, and sold over $35 million of Stock Cooperative units. He also created and implemented the marketing plan for the Carlsbad Airport Centre, and was Vice President at Hubbert Advertising, a Real Estate Advertising and Public Relations Firm.',
      'Mr. Hughes’ experience also includes development and asset management. As a developer, Mr. Hughes focused on land acquisition, investment properties, due diligence, and the entitlement processing of major real estate projects.',
      {
        heading: 'His major projects have included:',
        items: [
          'The 330 acre Carlsbad Airport Centre, an upscale R & D development',
          'Land acquisition, planning and entitlement of a $120 million mixed use project in Oceanside, California',
          'The development and management of over 5,000 multifamily units in California, Arizona and Virginia',
          'The development and expansion of over 350,000 sf of neighborhood shopping centers',
        ],
      },
      'Complementing his brokerage, development and asset management skills, Mr. Hughes has a depth of financial experience, negotiating and structuring both debt and equity positions. As a Director of Allied Capital, and Center Financial, Mr. Hughes negotiated financing for major real estate developments including shopping centers, apartment complexes, hotels and subdivisions.',
      'Mr. Hughes maintains a broad network of industry contacts, including acting as a Senior Consultant for the Kosmont Company (www.Kosmont.com), providing clients with feasibility, entitlement, land planning and project management consulting services.',
      {
        heading: 'Mr. Hughes’ civic contributions include:',
        items: [
          'Founder, California State University, San Marcos',
          'Founding Member, Carlsbad Economic Enhancement Committee',
          'Former Director, Oceanside Economic Development Committee',
          'Former Chairman, Oceanside Redevelopment Advisory Committee',
          'Past President, Oceanside Merchants Association',
        ],
      },
      'Mr. Hughes’ extensive experience is more valuable than ever in today’s dynamic real estate market. Contact his KW Commercial office today.',
    ],
  },
  {
    id: 'libby-brignon',
    name: 'Libby Brignon',
    phone: '858.720.1900',
    email: 'ebrignon@kwcommercial.com',
    specialization: 'Land',
    loopnetLink: 'https://www.loopnet.com/brokerdirectory/profile/elizabeth-brignon/3jgrjrd',
    headshot: libbyHeadshot,
    listingImage: libbyListing,
    bio: [
      'Elizabeth Brignon (Libby) is an Associate Broker at KW Commercial Carmel Valley / Del Mar and a member of the Pacific Commercial Partners Team focusing on investment acquisition and sales, primarily in the land and multifamily sectors, as well as commercial leasing across Southern California. She is a third-generation real estate professional having been involved in various sectors of commercial real estate for over 15 years with professional experience ranging from development and construction to finance and acquisitions.',
      'Elizabeth is a licensed CA Real Estate Broker who holds a Master’s degree in Business Administration (MBA) with a focus on finance and management as well as a Master of Science in Real Estate (MSRE) from the University of San Diego. She is a Certified Commercial Investment Member (CCIM) as well as a member of the National Association of Realtors (NAR) and Urban Land Institute San Diego/Tijuana Chapter (ULI). Her experience and educational background facilitate seamless real estate transactions and add depth to the buying and selling process.',
      'Prior to joining KW Commercial, Elizabeth worked as an investment analyst for a developer of multifamily apartment projects and has been party to several mid to large scale land development deals. She oversaw numerous projects throughout Southern California and Texas with her greatest project involving hands-on support from acquisition to completion, in the development of a 226-unit garden style multifamily development in Arlington, Texas. Other skills include in-depth property valuation, entitlement processing, contract management, as well as market and financial analysis.',
    ],
  },
  {
    id: 'sue-na',
    name: 'Sue Na',
    phone: '858.720.1900',
    email: 'suena@kwcommercial.com',
    specialization: 'Flex/Industrial | Multi Unit | Retail',
    loopnetLink: 'https://www.loopnet.com/brokerdirectory/profile/sue-na/24tjdh8',
    headshot: sueHeadshot,
    listingImage: sueListing,
    bio: [
      'Sue has always been in the world of sales and the entrepreneur, starting her first sales business at age 14. She has combined 37 years of sales experience and 20 years of real estate experience. Sue has been a resident of San Diego for over 30 years and has a great knowledge of the overall San Diego market.',
      'Sue has strong negotiation skills, and a great sense of urgency. She accomplishes tasks with quality and effectiveness, and is sought out by others for help and expertise. She gifts clients with clarity, excellence and movement. Sue is also fluent in both Korean and English.',
    ],
  },
  {
    id: 'will-schneider',
    name: 'Will Schneider',
    phone: '760.450.4100',
    email: 'willschneider@kwcommercial.com',
    specialization: 'Industrial | Multi-Family | Office',
    loopnetLink: 'https://www.loopnet.com/brokerdirectory/profile/will-schneider/wb7jxwl',
    headshot: willHeadshot,
    listingImage: willListing,
    bio: [
      'William “Will” Schneider is a Senior Broker-Associate for the KW Commercial Carmel Valley / Del Mar office in San Diego, CA. Will specializes in industrial and office sales and leasing, multi-family investment sales, and 1031 tax-deferred exchanges, an excellent way to build wealth through commercial real estate. Will has also joined the elite Pacific Commercial Partners Team at KW Commercial under Team Leader Mark Hughes, to provide a wider variety of commercial real estate services to his clients.',
      'Before joining KW Commercial, Will was a broker-associate for SVN (formerly Sperry Van Ness). Prior to that, he was the vice-president of multi-family investment sales for a boutique commercial real estate firm in San Diego. Will has also been a commercial mortgage broker who financed a variety of commercial properties including multi-family, industrial, and office buildings. He began his career as a loan officer for the Bank of America making consumer and commercial loans.',
      'In addition to his real estate and finance background, Will had a successful career for many years as a litigation attorney in private practice and government service and he did community service as a judge pro tem, arbitrator, and mediator in Los Angeles and San Diego counties. During this time, Will purchased a series of multi-family properties for his own portfolio by successfully utilizing 1031 tax-deferred exchanges. Will transitioned from the practice of law in December 2012 to focus exclusively on commercial real estate brokerage.',
      'Will graduated from U.C.L.A. with a Bachelor of Science degree in Business Administration and he received his Juris Doctor degree from Whittier College School of Law. Will is a licensed California real estate broker and a member of the National, California, and San Diego Association of Realtors. He is also a member of the Carlsbad Chamber of Commerce, Business Resource Committee. Will and his wife have lived in San Diego County since 1993 where they raised two sons.',
    ],
  },
  {
    id: 'peter-kim',
    name: 'Peter Kim',
    phone: '619.955.2712',
    // TODO: replace with Peter's KW Commercial address when available.
    email: 'pkim0812@gmail.com',
    specialization: '',
    // TODO: this currently points at Mark's LoopNet profile.
    loopnetLink: 'https://www.loopnet.com/commercial-real-estate-brokers/profile/mark-hughes/e7zre6nb',
    headshot: peterHeadshot,
    listingImage: null,
    bio: [
      'Peter Kim is a dynamic and passionate commercial real estate agent with a specialization in retail and multifamily properties. As a newcomer to the industry, Peter brings fresh ideas and a hunger for success to his clients.',
      'Peter has always worked in the field of restaurants and retail either part time or full time since he was 16. With over 10 years of experience in restaurants and the retail industry, Peter brings a unique perspective and valuable insights to his clients. Peter has a deep understanding of the unique challenges and opportunities that these clients face. He leverages his expertise to help clients find the perfect location for their business and negotiate favorable lease or purchase terms.',
      'Peter’s passion for commercial real estate and his desire to help clients achieve their goals led him to join the Pacific Commercial Partners Team at KW Commercial. With his dedication, passion, and expertise in retail and multifamily properties, he’s the perfect partner to help you achieve your real estate goals.',
    ],
  },
];

export const findAgent = (id) => agents.find((a) => a.id === id);
