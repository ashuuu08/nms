import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { contact } from '../data/siteData';
import './Pricing.css';

const TIERS = [
  {
    id: 'starter',
    name: 'Starter MVP',
    badge: 'Fast Launch',
    tagline: 'Ideal for early-stage founders & proof-of-concept software.',
    projectPrice: '₹45,000',
    retainerPrice: '₹25,000/mo',
    features: [
      'Single-page or lightweight multi-page web application',
      'React + Node.js or Supabase backend',
      'User authentication & role-based dashboard',
      'Google Sheets or database sync',
      'Mobile responsive design & performance audit',
      '30-day post-launch warranty & bug fixes',
    ],
    ctaText: 'Start Starter Project',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Scale & Growth',
    badge: 'Most Popular',
    tagline: 'For established businesses upgrading workflows or building SaaS.',
    projectPrice: '₹1,20,000',
    retainerPrice: '₹55,000/mo',
    features: [
      'Full-stack enterprise application (React / Node / Java)',
      'Custom API integrations & Webhooks pipeline',
      'Google Workspace & automated invoicing workflow',
      'AI chatbot or smart document extraction integration',
      'Role-based permissions, multi-tenancy support',
      'Core Web Vitals 95+ score optimization',
      'Comprehensive technical handover & 60-day warranty',
    ],
    ctaText: 'Start Scale Project',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise',
    badge: 'Bespoke Architecture',
    tagline: 'High-security microservices, dedicated engineering squads & ERPs.',
    projectPrice: 'Custom Quote',
    retainerPrice: '₹1,10,000+/mo',
    features: [
      'High-throughput distributed systems & microservices',
      'Java Spring Boot / Node.js backend with bank-grade security',
      'Enterprise database architecture & migration',
      'Dedicated engineering sprint team with daily standups',
      'SLA-backed uptime & priority 2-hour response',
      'Full compliance & security vulnerability audits',
    ],
    ctaText: 'Request Technical Brief',
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'Are there any hidden costs or surprise invoices?',
    a: 'None. Every engagement starts with a scoped specification document and fixed milestone quotation. You only pay for what is agreed upon in writing.',
  },
  {
    q: 'How are payments structured?',
    a: 'Typically 30% kickoff milestone, 40% halfway milestone after staging deployment demo, and 30% upon final production sign-off and source code handover.',
  },
  {
    q: 'Do I own the source code?',
    a: 'Yes, 100%. Upon final settlement, all intellectual property, Git repositories, domain configurations, and deployment keys are transferred completely to you.',
  },
  {
    q: 'Can we switch from project-based to monthly retainer?',
    a: 'Absolutely. Many clients start with a fixed-scope build and transition into a monthly retainer for continuous feature iterations and performance monitoring.',
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('project');

  return (
    <div className="pricing-page">
      <SEO
        title="Transparent Software Development Pricing & Plans | AshbitSoft"
        description="Predictable, transparent software development pricing. Fixed-price proposals for projects and flexible retainers for ongoing development."
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Clear & Transparent Pricing</span>
          <h1 className="display-lg text-white mt-16">
            Straightforward, Value-Driven<br />Investment Plans
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            No surprise billing or vendor lock-in. Tailored development scopes built to maximize return on investment for businesses in MP and globally.
          </p>

          {/* Toggle */}
          <div className="pricing-toggle-wrap">
            <div className="pricing-toggle" role="radiogroup" aria-label="Billing Type">
              <button
                type="button"
                className={`pricing-toggle__btn ${billingCycle === 'project' ? 'active' : ''}`}
                onClick={() => setBillingCycle('project')}
              >
                Fixed-Price Project
              </button>
              <button
                type="button"
                className={`pricing-toggle__btn ${billingCycle === 'retainer' ? 'active' : ''}`}
                onClick={() => setBillingCycle('retainer')}
              >
                Monthly Retainer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section section--soft">
        <div className="container">
          <div className="pricing-grid">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`pricing-card ${tier.highlighted ? 'pricing-card--popular' : ''}`}
              >
                {tier.highlighted && (
                  <div className="pricing-card__badge-ribbon">
                    <span>{tier.badge}</span>
                  </div>
                )}
                <div className="pricing-card__header">
                  <span className="eyebrow">{tier.badge}</span>
                  <h3 className="pricing-card__title">{tier.name}</h3>
                  <p className="pricing-card__tagline">{tier.tagline}</p>
                </div>

                <div className="pricing-card__price-box">
                  <div className="pricing-card__amount">
                    {billingCycle === 'project' ? tier.projectPrice : tier.retainerPrice}
                  </div>
                  <div className="pricing-card__period">
                    {billingCycle === 'project' ? 'one-time investment' : 'billed monthly, cancel anytime'}
                  </div>
                </div>

                <div className="pricing-card__features-title">What is included:</div>
                <ul className="pricing-card__features">
                  {tier.features.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pricing-card__footer">
                  <Link
                    to="/contact"
                    className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'} btn-block`}
                  >
                    {tier.ctaText} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee banner */}
          <div className="pricing-guarantee" data-reveal>
            <div className="pricing-guarantee__icon">
              <ShieldCheck size={32} />
            </div>
            <div className="pricing-guarantee__text">
              <h4>100% Code Ownership &amp; Bug-Free Delivery Warranty</h4>
              <p>
                Every project includes written handover of intellectual property, repository access, and 30 to 60 days of post-deployment warranty support with zero retainers required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="pricing-faq-heading">
        <div className="container">
          <header className="section-header text-center">
            <span className="eyebrow">Pricing Queries</span>
            <h2 id="pricing-faq-heading" className="display-md">Frequently Asked Questions</h2>
            <p className="body-lg">
              Everything you need to know about our contract structures, milestones, and billing policies.
            </p>
          </header>

          <div className="pricing-faqs-grid">
            {FAQS.map((faq, i) => (
              <div key={i} className="pricing-faq-card">
                <div className="pricing-faq-card__q">
                  <HelpCircle size={18} className="text-blue" />
                  <h4>{faq.q}</h4>
                </div>
                <p className="pricing-faq-card__a">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Quick contact trigger */}
          <div className="pricing-cta-card mt-32">
            <div className="pricing-cta-card__content">
              <h3>Need a custom proposal tailored to specific requirements?</h3>
              <p>We provide complimentary technical scoping calls and detailed milestone estimates within 24 hours.</p>
            </div>
            <div className="pricing-cta-card__actions">
              <a href={`tel:${contact.phoneRaw}`} className="btn btn-outline">
                <Phone size={15} /> Call Direct
              </a>
              <Link to="/contact" className="btn btn-primary">
                Request Custom Quote <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
