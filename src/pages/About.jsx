import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Code2, Target, HeartHandshake, Award,
  MapPin, CheckCircle2, ArrowRight, ShieldCheck, Users
} from 'lucide-react';
import { founder, locations, stats } from '../data/siteData';

const VALUES = [
  {
    icon: Code2,
    title: 'Code as Craftsmanship',
    desc: 'We write software to be read and maintained for years, not just until launch day. Clean syntax, strict linting, and thorough testing.',
  },
  {
    icon: Target,
    title: 'Business-First Architecture',
    desc: 'Every technical choice must directly serve a commercial outcome — lowering operational costs, speeding up load times, or driving conversion.',
  },
  {
    icon: ShieldCheck,
    title: 'Radical Transparency',
    desc: 'No vague progress reports or opaque fees. You see live staging builds, daily commits, and itemized milestone breakdowns from day one.',
  },
  {
    icon: HeartHandshake,
    title: 'Enduring Partnerships',
    desc: 'We do not abandon clients post-launch. Every system includes dedicated warranty support, documentation, and long-term scaling guidance.',
  },
];

const MILESTONES = [
  { year: '2023', title: 'Founded in Anuppur & Shahdol', desc: 'Started with a mission to deliver Silicon-Valley caliber engineering to regional enterprises and modern startups.' },
  { year: '2024', title: '50+ Deployments Milestone', desc: 'Delivered web platforms, automated ERP pipelines, and Google Workspace automations saving thousands of team hours.' },
  { year: '2025', title: 'AI & Enterprise Specialization', desc: 'Integrated OpenAI APIs, custom vector databases, and Java Spring Boot architectures for high-throughput clients.' },
  { year: '2026', title: 'Dual-Hub Regional Expansion', desc: 'Cemented regional presence across Anuppur (484223) & Shahdol (484001) while serving international client bases.' },
];

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title="About AshbitSoft | Software Engineering Team & Mission"
        description="Learn about AshbitSoft's engineering ethos, founder Ashish Kumar, our client success track record, and our development methodology."
        canonical="/company/about"
      />

      {/* Hero */}
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

      {/* Narrative Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
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

            {/* Founder Card */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-soft)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: 'linear-gradient(90deg, var(--blue), var(--cyan))'
              }} />
              <span className="eyebrow" style={{ color: 'var(--blue)' }}>Leadership</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '8px', marginBottom: '4px' }}>
                {founder.name}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                {founder.role}
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '20px' }}>
                "{founder.bio}"
              </p>
              <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '16px' }}>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Active contributor and architect specializing in Full-Stack Web Development, Google Apps Script automation, and high-performance system design.
                </p>
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
