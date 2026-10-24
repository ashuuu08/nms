import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  MapPin, CheckCircle2, ShieldCheck, Zap, Users,
  ArrowRight, Target, HeartHandshake, Quote, MessageSquare
} from 'lucide-react';
import { founder, locations, contact } from '../data/siteData';

const VALUES = [
  {
    icon: Target,
    title: 'Precision Engineering',
    desc: 'We write lean, maintainable, production-ready code. No bloated dependencies, no hasty shortcuts that come back to haunt your business months later.',
  },
  {
    icon: ShieldCheck,
    title: 'Absolute Code Sovereignty',
    desc: 'You hold 100% ownership of your source code, database credentials, and deployment infrastructure. Zero proprietary vendor lock-in, forever.',
  },
  {
    icon: HeartHandshake,
    title: 'Accessible & Accountable',
    desc: 'We operate registered physical studios in Anuppur and Shahdol. You interact directly with engineers who build your product—not intermediate sales reps.',
  },
  {
    icon: Zap,
    title: 'Value-First Velocity',
    desc: 'Every technical sprint is tied to measurable business ROI: eliminating hours of manual paperwork, automating invoice dispatch, or increasing transaction speed.',
  },
];

const MILESTONES = [
  {
    year: '2022',
    title: 'Founded in Anuppur, MP',
    desc: 'AshbitSoft established by Ashish Kumar Rathour with a mission to deliver top-tier, custom software engineering to businesses in Central India and beyond.',
  },
  {
    year: '2023',
    title: 'Studio Expansion to Shahdol',
    desc: 'Opened our second operational studio on Station Road, Shahdol, scaling our full-stack web and Google Workspace automation engineering capacity.',
  },
  {
    year: '2024',
    title: 'Enterprise & SaaS Specialization',
    desc: 'Shipped 50+ custom digital platforms, multi-clinic management systems, and automated billing suites across Madhya Pradesh and international clients.',
  },
  {
    year: '2026 (Current)',
    title: 'AI Automation & Cloud Ecosystems',
    desc: 'Engineering next-generation AI pipelines, bespoke ERP architectures, and offline-first mobile PWAs with 100% intellectual property ownership.',
  },
];

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="About AshbitSoft | Leadership, Story & Engineering Ethos"
        description="Learn about AshbitSoft's engineering ethos, founder Ashish Kumar Rathour, our client success track record, and our development methodology."
        canonical="/company/about"
      />

      {/* Hero Section */}
      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Our Story &amp; Purpose</span>
          <h1 className="display-lg text-white mt-16">
            Building Bespoke Software with<br />Relentless Craftsmanship
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Rooted in Madhya Pradesh, AshbitSoft engineers world-class web applications, automation pipelines, and enterprise systems that remove operational friction.
          </p>
        </div>
      </section>

      {/* Narrative Section with Restored Classic 2-Column Layout */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left Narrative Column */}
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="display-md mt-16" style={{ marginBottom: '20px' }}>
                Engineering Partners for Growing Enterprises
              </h2>
              <p className="body-lg" style={{ marginBottom: '16px', color: 'var(--text-body)' }}>
                Founded by <strong>{founder.name}</strong>, AshbitSoft emerged from a clear observation: businesses were losing countless hours to clunky legacy tools, brittle spreadsheets, and overpriced software that failed to scale.
              </p>
              <p className="body-md" style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                We bridge that gap by delivering nimble, scalable, and beautifully designed digital solutions. Whether engineering a custom SaaS platform from scratch or automating an entire Google Workspace invoicing pipeline, we hold every deliverable to strict production standards.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <MapPin size={16} style={{ color: 'var(--blue)' }} /> Anuppur &amp; Shahdol, MP
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <Users size={16} style={{ color: 'var(--teal)' }} /> 50+ Projects Shipped
                </div>
              </div>
            </div>

            {/* Right Classic Founder & Developer Card */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px 32px',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top Accent Gradient Bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, var(--blue), var(--cyan))'
              }} />

              {/* Founder Header with Crisp High-Resolution Portrait */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '18px' }}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 4px 14px rgba(16, 43, 92, 0.15)',
                    imageRendering: '-webkit-optimize-contrast',
                    flexShrink: 0
                  }}
                />
                <div>
                  <span className="eyebrow" style={{ color: 'var(--blue)', marginBottom: '2px', display: 'inline-block' }}>Leadership &amp; Engineering</span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '2px 0 2px', color: 'var(--navy)' }}>
                    {founder.name}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', margin: 0 }}>
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Founder & Developer Signature Quote */}
              <div style={{
                background: '#FAFBFD',
                borderLeft: '3px solid var(--blue)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                padding: '14px 16px',
                marginBottom: '16px'
              }}>
                <Quote size={18} style={{ color: 'var(--blue)', opacity: 0.4, marginBottom: 4 }} />
                <p style={{
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: 'var(--navy)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  "True software craftsmanship isn't about using complex buzzwords. It's about engineering systems so dependable and intuitive that you shut your laptop at 6 PM knowing every order, invoice, and rupee is completely accounted for."
                </p>
              </div>

              {/* Founder Bio */}
              <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.65', marginBottom: '16px' }}>
                "{founder.bio}"
              </p>

              {/* Footer Note & Direct Connection */}
              <div style={{
                borderTop: '1px solid var(--border-soft)',
                paddingTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <span style={{ fontSize: '0.78125rem', color: 'var(--text-muted)' }}>
                  Active full-stack architect · Direct client delivery
                </span>
                <a
                  href={`https://wa.me/${contact.whatsappRaw}?text=Hi%20Ashish,%20I'd%20like%20to%20discuss%20a%20software%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <MessageSquare size={14} /> Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section--soft">
        <div className="container">
          <header className="section-header text-center">
            <span className="eyebrow">Guiding Principles</span>
            <h2 className="display-md">Our Engineering Ethos</h2>
            <p className="body-lg">The core philosophies that guide every sprint, commit, and client interaction.</p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div key={i} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div className="icon-box icon-box--md icon-box--cyan">
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text-primary)' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.6' }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <header className="section-header text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">Milestones</span>
            <h2 className="display-md">Our Growth Journey</h2>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', borderLeft: '2px solid var(--border-soft)', paddingLeft: '28px', marginLeft: '12px' }}>
            {MILESTONES.map((m, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-36px',
                  top: '4px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--blue)',
                  border: '3px solid white',
                  boxShadow: '0 0 0 2px var(--blue)'
                }} />
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {m.year}
                </span>
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 700, margin: '4px 0 8px 0', color: 'var(--text-primary)' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Location Presence */}
      <section className="section section--alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {locations.map((loc, i) => (
              <div key={i} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-soft)',
                borderRadius: 'var(--radius-xl)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={20} style={{ color: 'var(--blue)' }} />
                  <span className="eyebrow" style={{ margin: 0 }}>{loc.label} Office</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{loc.city}, {loc.state}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                  {loc.streetAddress}, {loc.district}, {loc.state} — Pin {loc.postalCode}
                </p>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: 'auto' }}>
                  Active engineering and client consultation hub.
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch with Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
