import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, HelpCircle, Phone, MessageSquare, Layers, Clock, FileText } from 'lucide-react';
import { contact } from '../data/siteData';
import './Pricing.css';

const TIERS = [
  {
    id: 'starter',
    name: 'Starter MVP',
    badge: 'Fast Launch',
    tagline: 'Ideal for early-stage founders & proof-of-concept software.',
    pricingLabel: 'Custom Scope Quote',
    pricingSub: 'Contact us for a transparent fixed-price estimate',
    features: [
      'Single-page or lightweight multi-page web application',
      'React + Node.js or PostgreSQL backend',
      'User authentication & role-based dashboard',
      'Google Sheets or database synchronization',
      'Mobile responsive design & performance audit',
      '30-day post-launch warranty & bug fixes',
    ],
    ctaText: 'Contact for Starter Quote',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Scale & Growth',
    badge: 'Most Popular',
    tagline: 'For established businesses upgrading workflows or building SaaS.',
    pricingLabel: 'Tailored Investment',
    pricingSub: 'Milestone-based quote based on your exact workflow',
    features: [
      'Full-stack business application (React / Node / Custom APIs)',
      'Custom API integrations & Webhooks pipeline',
      'WhatsApp Cloud API & automated invoicing workflow',
      'Role-based permissions & multi-user concurrent access',
      'Core Web Vitals 95+ score optimization',
      'Comprehensive technical handover & 60-day warranty',
    ],
    ctaText: 'Contact for Growth Quote',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise',
    badge: 'Bespoke Architecture',
    tagline: 'High-security microservices, dedicated engineering squads & ERPs.',
    pricingLabel: 'Bespoke Architecture',
    pricingSub: 'Private cloud / on-premise dedicated scoping',
    features: [
      'High-throughput distributed systems & microservices',
      'Bank-grade security, RBAC & tamper-proof audit trails',
      'Private VPC / On-Premise bare metal deployment',
      'Dedicated engineering sprint team with daily updates',
      'SLA-backed uptime & priority response',
      'Complete intellectual property & source code handover',
    ],
    ctaText: 'Contact for Enterprise Brief',
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'How do you determine the quote for a project?',
    a: 'Every engagement begins with a 30-minute discovery consultation. We break down your exact user flows, third-party integrations, and database schemas into an itemized, fixed milestone proposal. You only pay for what is agreed upon in writing.',
  },
  {
    q: 'Are there any hidden costs or surprise recurring invoices?',
    a: 'None. You own 100% of the source code and database. Unlike off-the-shelf SaaS, there are zero monthly per-user licensing fees payable to us.',
  },
  {
    q: 'How are milestone payments structured?',
    a: 'Typically 30% kickoff milestone, 40% halfway milestone after staging deployment demo, and 30% upon final production sign-off and complete source code handover.',
  },
  {
    q: 'Do I own the source code and database?',
    a: 'Yes, 100%. Upon final project sign-off, all intellectual property, Git repositories, domain configurations, and cloud deployment credentials are transferred completely to you.',
  },
];

const Pricing = () => {
  const [modelType, setModelType] = useState('project');

  return (
    <div className="pricing-page">
      <SEO
        title="Custom Software Pricing & Estimates | AshbitSoft"
        description="Predictable, scope-driven software development pricing. Contact us for custom fixed-price milestone proposals and dedicated engineering sprints."
        canonical="/pricing"
      />

      {/* Hero Section */}
      <section className="page-hero section--navy">
        <div className="container text-center" style={{ maxWidth: 840, margin: '0 auto' }}>
          <span className="eyebrow eyebrow--cyan">Scope-Driven Investment</span>
          <h1 className="display-lg text-white mt-16" style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.2rem)' }}>
            Transparent, Value-Driven Investment Built Around Your Scope
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text" style={{ margin: '16px auto 0' }}>
            No arbitrary flat rates, no recurring per-seat fees. We scope your exact operational requirements and deliver fixed-price milestone proposals with guaranteed code ownership.
          </p>

          {/* Model Toggle */}
          <div className="pricing-toggle-wrap" style={{ justifyContent: 'center' }}>
            <div className="pricing-toggle" role="radiogroup" aria-label="Engagement Model">
              <button
                type="button"
                className={`pricing-toggle__btn ${modelType === 'project' ? 'active' : ''}`}
                onClick={() => setModelType('project')}
              >
                Fixed-Price Milestone Sprints
              </button>
              <button
                type="button"
                className={`pricing-toggle__btn ${modelType === 'retainer' ? 'active' : ''}`}
                onClick={() => setModelType('retainer')}
              >
                Dedicated Engineering Retainer
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
                  <div className="pricing-card__amount" style={{ fontSize: '1.65rem' }}>
                    {tier.pricingLabel}
                  </div>
                  <div className="pricing-card__period">
                    {modelType === 'project'
                      ? 'One-time milestone investment · 100% owned IP'
                      : 'Monthly sprint cycles · Dedicated team access'}
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
          <div className="pricing-guarantee" data-reveal style={{ marginTop: 48 }}>
            <div className="pricing-guarantee__icon">
              <ShieldCheck size={32} />
            </div>
            <div className="pricing-guarantee__text">
              <h4>100% Code Ownership &amp; Bug-Free Delivery Warranty</h4>
              <p>
                Every project includes written transfer of intellectual property, complete repository access, and 30 to 60 days of complimentary post-deployment warranty support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Shapes Your Custom Quote Section */}
      <section className="section" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <header className="section-header text-center">
            <span className="eyebrow">Quote Transparency</span>
            <h2 className="display-md">What Shapes Your Custom Estimate?</h2>
            <p className="body-lg">
              We calculate project proposals based on four concrete technical dimensions:
            </p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 40 }}>
            <div className="card" style={{ padding: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(21, 94, 239, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', marginBottom: 14 }}>
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>Scope &amp; Modules</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                The number of distinct user roles, custom screens, complex calculations, and administrative workflows required.
              </p>
            </div>

            <div className="card" style={{ padding: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(18, 205, 235, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', marginBottom: 14 }}>
                <Zap size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>Integrations</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                Third-party connections including WhatsApp Business API, thermal receipt printers, biometric devices, or payment gateways.
              </p>
            </div>

            <div className="card" style={{ padding: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(22, 199, 183, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal)', marginBottom: 14 }}>
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>Delivery Timeline</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                Standard delivery vs. accelerated sprints to meet strict founder launch deadlines or investor product reviews.
              </p>
            </div>

            <div className="card" style={{ padding: 28 }}>
              <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(16, 43, 92, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy)', marginBottom: 14 }}>
                <FileText size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 8 }}>Data Migration</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                Importing existing historical records, Excel databases, or Tally ledgers into the new clean database.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft" aria-labelledby="pricing-faq-heading">
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
              <h3>Need a custom proposal tailored to your specific requirements?</h3>
              <p>We provide complimentary technical scoping calls and detailed milestone estimates within 24 hours.</p>
            </div>
            <div className="pricing-cta-card__actions">
              <a href={`tel:${contact.phoneRaw}`} className="btn btn-outline">
                <Phone size={15} /> Call Direct
              </a>
              <Link to="/contact" className="btn btn-primary">
                Contact For Custom Quote <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
