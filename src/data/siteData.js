// ═══════════════════════════════════════════════════════
// CENTRALIZED SITE CONFIGURATION — AshbitSoft v2.0
// Edit business info here — it propagates across the site.
// ═══════════════════════════════════════════════════════

export const siteConfig = {
  name: 'AshbitSoft',
  tagline: 'IT Solutions',
  domain: 'ashbit.in',
  url: 'https://ashbit.in',
  logo: '/logo.png',
  logoAlt: 'AshbitSoft - Custom Software Development and IT Solutions',
  description: 'Custom software development and IT solutions for startups, SMEs, and enterprises across Anuppur, Shahdol, and Madhya Pradesh.',
  founder: 'Ashish Kumar',
  founderTitle: 'Founder & Lead Engineer',
  established: '2022',
};

export const founder = {
  name: 'Ashish Kumar Rathour',
  role: 'Founder & Principal Engineer',
  image: '/founder_image%20.png',
  bio: 'Full-stack software architect specializing in scalable web ecosystems, Google Workspace workflow automations, and resilient cloud systems for growing enterprises.',
};

export const locations = [
  {
    city: 'Anuppur',
    label: 'Anuppur',
    district: 'Anuppur',
    state: 'Madhya Pradesh',
    postalCode: '484223',
    streetAddress: 'Ward No 12, Main Road',
    phone: '+91 96912 07533',
  },
  {
    city: 'Shahdol',
    label: 'Shahdol',
    district: 'Shahdol',
    state: 'Madhya Pradesh',
    postalCode: '484001',
    streetAddress: 'Station Road, Shahdol',
    phone: '+91 96912 07533',
  },
];

export const contact = {
  phone: '+91 96912 07533',
  phoneRaw: '+919691207533',
  whatsapp: '+91 76977 06427',
  whatsappRaw: '917697706427',
  email: 'support@ashbit.in',
  infoEmail: 'info@ashbit.in',
  address1: 'Anuppur, Madhya Pradesh, 484223, India',
  address2: 'Shahdol, Madhya Pradesh, 484001, India',
  addressShort: 'Anuppur & Shahdol, MP',
  postalCode1: '484223',
  postalCode2: '484001',
  city1: 'Anuppur',
  city2: 'Shahdol',
  state: 'Madhya Pradesh',
  country: 'India',
  web3formsKey: 'cf30a0de-ccdd-4770-9a70-761e8a001a7f',
};

export const social = {
  linkedin:  'https://linkedin.com/company/ashbitsoft',
  github:    'https://github.com/ashbitsoft',
  instagram: 'https://instagram.com/ashbitsoft',
  twitter:   'https://twitter.com/ashbitsoft',
  facebook:  'https://www.facebook.com/ashbitsoft',
};

export const stats = [
  { value: '50+',  label: 'Projects Delivered' },
  { value: '12k+', label: 'Hours of Engineering' },
  { value: '5k+',  label: 'Hours Saved for Clients' },
  { value: '98%',  label: 'Client Satisfaction' },
];

export const cta = {
  primary:      { text: 'Start a Project', path: '/contact' },
  secondary:    { text: 'View Our Work',   path: '/services' },
  consultation: { text: 'Get Free Consultation', path: '/contact' },
  pricing:      { text: 'View Pricing',   path: '/pricing' },
};

export const navLinks = [
  { name: 'Products', path: '/products', children: [
    { name: 'All Products Overview', path: '/products', desc: 'Software built to solve real business problems' },
    { name: 'Retail Management SaaS', path: '/products/retail-management', desc: 'Billing & customer retention platform (Coming Soon)' },
  ]},
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: null, children: [
    { name: 'All Solutions Overview', path: '/solutions', desc: 'Browse our complete catalog of business systems' },
    { name: 'For Startups',   path: '/solutions/startups',   desc: 'Fast MVP builds & scalable foundations' },
    { name: 'For SMEs',       path: '/solutions/smes',       desc: 'Process automation & system modernization' },
    { name: 'For Enterprises',path: '/solutions/enterprises',desc: 'High-security custom digital ecosystems' },
  ]},
  { name: 'Pricing',  path: '/pricing' },
  { name: 'Blog',     path: '/blog' },
  { name: 'Company',  path: null, children: [
    { name: 'About Us',        path: '/company/about',    desc: 'Our mission, team & methodology' },
    { name: 'FAQ',             path: '/company/faq',      desc: 'Answers to common questions' },
    { name: 'Security Policy', path: '/company/security', desc: 'Enterprise data protection' },
    { name: 'Privacy Policy',  path: '/company/policy',   desc: 'Privacy guidelines' },
  ]},
];
