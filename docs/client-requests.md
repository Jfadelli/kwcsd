# Client change requests

Newest first. `[x]` = done, `[ ]` = open.

## 11.16.26: Will Schneider (bio page) + team-site suggestions

1. [x] Lower and center headshot so the top of his head isn't cut off. New headshot (WSS_Head_Shots_Saccardi_006) added.
2. [x] Show the full email address (not cut off). Fixed in v2: the address wraps instead of truncating.
3. [x] Replace the Legacy Gymnastics photo with the LGA "Grand Opening" photo (12-03-22).
4. [x] First line of bio: "broker-associate" → "Senior Broker-Associate" (KW Commercial approval letter dated 3/22/24).
5. [x] Heather Mattlin still listed: removed in code since 5.30.25. Still visible on the live site until v2 is deployed.
6. [x] Rename "Team Bio" menu → "Team Members". (Page URLs unchanged.)

## v2 rebuild (11.16.26)

- [x] Contact Us and Property Valuation forms working (PHP endpoint was never deployed; contact form also always sent an invalid form type)
- [x] Form email locked down: recipients chosen on the server, honeypot, rate limit, optional reCAPTCHA v3
- [x] Required-field validation and inline success/error messages (no more pop-up alerts)
- [x] Create React App → Vite; React 19, MUI 7, React Router 7
- [x] One styling approach (MUI `sx`) instead of four
- [x] Images: ~49 MB → under 1 MB
- [x] Mobile: menu grouped by section; prev/next arrows no longer cover the text
- [x] Removed dead code (old stepper form, Heroku property gallery, unused images and packages)

## Earlier logs (from v1 README)

5.30.25
1. [x] Home Page: This page has dropdowns in the banner at the top  of the page and 3 major categories in red (Pacific Commercial Partners, Our Services, and Property Search)
   1. [x] Under “Our Services”… if you click on “Development & Entitlement” nothing comes up.  If you go to the “Services Offered” in the top banner, you get the same list, but there is verbiage under “Entitlement Services” … copy that verbiage and use it under “Development and Entitlement”.
2. [x] Under “Property Search” change the lead paragraph to:
   1. [x] “Please identify any listed KW Commercial property for Sale or Lease that you are interested in and we will thoroughly research the market and provide you with a report indicating our opinion of the value of the investment, the competitive Sale or Lease values in the market, and alternate market opportunities we identify that meet your criteria. We will represent you in any Sale or Lease opportunity and the Seller or Building Owner will compensate us through their listing agent at no cost to you. We can also search multiple national commercial listing services for you.”
3. [x] Jason… if you need to use a slightly smaller font to make this work, that’s ok.
4. [x] In the “TEAM BIO” dropdown, eliminate the Bio for Heather Mattlin- I am asking the other team members to submit any changes they wish to make in their individual bios and will get those to you as available.
5. [x] In the “PROPERTY” dropdown on the Home Page, let’s change the title to “YOUR PROPERTY INFO & PROPERTY SEARCH” and 
   1. [x] let’s find a picture of a high-rise office or residential building to use.  
   2. [x] Also change the first paragraph to the same verbiage as above for the “Property Search” category on the Home page.
6. [x] On the top banner of the Home page change the title “CONTACT” to “CONTACT US”


2. Personal Audit
   1. [x] temp update contact to open email client
      - [wip] Find & Deploy mail server solution in cPanel 
   2. [x] Update banner white space




4.5.22
1. Update work Order
   1. U.I.
      - [ ] 1. Refresh Style Elements
      - [ ] 3. Colors, Fonts, Font Sizes
   2. Fix Broken Intake Form 
      - [ ] 1. Contact us
      - [ ] 2. Property Intake
      - [x] 3. Integrate RealNex iFrame 
   3. Update Roster
      - [x] 1. Remove Van and Tommy*
      - [x] 2. Add PK
   4. Update Content
      - [x] 1. Typographical errors
      - [x] 2. Modified Content
      - [ ] 




## Ideas / not started

1. Buildout integration
2. Admin screen so the team can edit bios and content without a code change
