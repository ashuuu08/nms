// ═══════════════════════════════════════════════════════
// ASHBITSOFT — Products Content & Configuration
// Centralized data for upcoming and active SaaS products.
// ═══════════════════════════════════════════════════════

export const products = [
  {
    id: 'retail-management',
    name: 'Ashbit RetailCore',
    category: 'Retail Management SaaS',
    status: 'Coming Soon',
    badge: 'Upcoming SaaS',
    slug: 'retail-management',
    path: '/products/retail-management',
    headline: 'More Than Billing. A Smarter Way to Bring Customers Back.',
    tagline: 'Smart Billing & Customer Retention Platform',
    description:
      'A modern retail billing and customer-retention platform that helps businesses manage sales, understand customer buying patterns, and encourage repeat purchases through personalized offers and loyalty incentives.',
    highlights: [
      'Fast, organized billing and invoice management.',
      'Customer profiles and purchase history.',
      'Flexible discount and promotional rules.',
      'Customer loyalty and repeat-purchase incentives.',
      'Sales insights and business performance reports.',
      'Customer engagement features designed around consent and relevant offers.',
    ],
    plannedCapabilities: [
      {
        id: 'billing',
        number: '01',
        title: 'Smart Billing & Invoices',
        desc: 'Create and manage sales invoices with an organized, fast checkout workflow tailored for everyday counter operations.',
      },
      {
        id: 'history',
        number: '02',
        title: 'Customer Purchase History',
        desc: 'Maintain organized customer profiles and view previous purchase history to deliver attentive, informed service.',
      },
      {
        id: 'promotions',
        number: '03',
        title: 'Flexible Promotions',
        desc: 'Configure promotional rules using purchase-value thresholds, eligible product categories, minimum spend requirements, and validity dates.',
      },
      {
        id: 'loyalty',
        number: '04',
        title: 'Loyalty & Repeat-Purchase Incentives',
        desc: 'Design reward programs that give shoppers a genuine reason to return, while providing visibility into redemption rates and repeat visits.',
      },
      {
        id: 'insights',
        number: '05',
        title: 'Sales & Business Insights',
        desc: 'Review practical summaries of daily revenue, customer footfall patterns, high-performing product lines, and promotion effectiveness.',
      },
      {
        id: 'engagement',
        number: '06',
        title: 'Customer Engagement',
        desc: 'Explore consent-aware communication and promotional message workflows with transparent opt-in and opt-out controls.',
      },
    ],
    problemPoints: [
      {
        title: 'Limited Customer Visibility',
        desc: 'Purchase history can be difficult to organize across paper registers or basic point-of-sale systems, making customer buying patterns hard to use meaningfully.',
      },
      {
        title: 'Generic Discounts',
        desc: 'Businesses often need more flexibility than applying the same static percentage offer to every customer regardless of order size or loyalty.',
      },
      {
        title: 'Missed Repeat Sales',
        desc: 'Retailers need practical, organized methods to encourage another visit and clearly understand which promotional efforts actually bring customers back.',
      },
    ],
    illustrativeExamples: [
      {
        threshold: 'Purchase above ₹1,000',
        offer: 'Example Offer: 10% Off Next Visit',
        note: 'Configured by retailer based on minimum ticket size',
      },
      {
        threshold: 'Purchase above ₹2,000',
        offer: 'Example Offer: 15% Off or Selected Reward',
        note: 'Higher spend tier with customized incentive rules',
      },
    ],
    targetAudiences: [
      {
        title: 'Clothing & Fashion Stores',
        desc: 'Multi-category apparel shops seeking to reward repeat shoppers and track seasonal buying preferences.',
      },
      {
        title: 'Footwear & Accessories Retailers',
        desc: 'Independent retail outlets looking to maintain customer contact lists and offer personalized seasonal promotions.',
      },
      {
        title: 'Small & Medium-Sized Retailers',
        desc: 'Growing local storefronts upgrading from basic billing machines to a cohesive customer-retention workflow.',
      },
    ],
    differentiators: [
      {
        title: 'Operational Simplicity',
        desc: 'Designed for quick counter checkout with clean, uncluttered screens that staff can master with minimal training.',
      },
      {
        title: 'Customer-Retention Focus',
        desc: 'Built specifically around understanding buyer frequency and turning occasional walk-ins into loyal, regular customers.',
      },
      {
        title: 'Measurable Promotion Performance',
        desc: 'Clear visibility into how many customers received, redeemed, and returned after an incentive was issued.',
      },
    ],
    faqs: [
      {
        q: 'When will the product launch?',
        a: "We're working towards a release and will share updates when more details are confirmed.",
      },
      {
        q: 'Is the product available to use today?',
        a: 'The product is currently in development. Availability will be announced when the relevant features are ready.',
      },
      {
        q: 'Which businesses is it intended for?',
        a: 'It is initially being designed with small and medium-sized retail businesses in mind, with the final supported use cases to be confirmed.',
      },
      {
        q: 'Will it support custom promotions?',
        a: 'Flexible promotional rules are part of the planned product direction. The exact options will be confirmed closer to launch.',
      },
      {
        q: 'How can I express interest?',
        a: 'Use the early-access contact option on this page to share your interest.',
      },
    ],
  },
];
