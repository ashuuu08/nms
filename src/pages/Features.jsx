import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Zap, ShieldCheck, Cpu, Database, Cloud, Code2,
  Lock, RefreshCw, BarChart3, CheckCircle2, ArrowRight
} from 'lucide-react';

const FEATURES = [
  {
    icon: Zap,
    title: 'Sub-100ms Performance',
    tagline: 'Engineered for speed & Core Web Vitals',
    desc: 'We optimize bundle sizes, leverage server-side caching, edge delivery, and modern asset compression so your web app loads instantly on all devices.',
    points: ['95+ Google PageSpeed score', 'Instant client-side routing', 'Edge CDN media delivery', 'Zero bloat architecture'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-Grade Security',
    tagline: 'Defense in depth by default',
    desc: 'From OAuth 2.0 and JWT authentication to encrypted database fields and automated input sanitization, security is foundational, not an afterthought.',
    points: ['OWASP Top 10 mitigation', 'AES-256 data encryption', 'Strict CSP and security headers', 'Rate limiting & brute force defense'],
  },
  {
    icon: Database,
    title: 'Scalable Data Architecture',
    tagline: 'Prepared for 10x query volume',
    desc: 'Clean database normalization, indexed queries, connection pooling, and automated backup routines designed for consistent high throughput.',
    points: ['PostgreSQL & MongoDB clustering', 'Redis caching layers', 'Automated daily failover backups', 'Zero-downtime database migrations'],
  },
  {
    icon: RefreshCw,
    title: 'Automated CI/CD Pipelines',
    tagline: 'Ship updates with complete confidence',
    desc: 'Automated test suites, preview environments for every pull request, and zero-downtime production deployments on modern cloud platforms.',
    points: ['GitHub Actions automated tests', 'Instant preview branches', 'Zero-downtime rolling deploys', 'Instant rollback safety switch'],
  },
  {
    icon: Cpu,
    title: 'Native API & Webhook Integrations',
    tagline: 'Connect every operational tool',
    desc: 'Seamlessly bind your custom software to Google Workspace, WhatsApp Business API, payment gateways (Stripe/Razorpay), and internal CRMs.',
    points: ['Custom REST & GraphQL endpoints', 'Trigger-based webhook pipelines', 'Robust retry queues with dead-lettering', 'Automated error monitoring & alerts'],
  },
  {
    icon: BarChart3,
    title: 'Built-in Analytics & Auditing',
    tagline: 'Complete operational visibility',
    desc: 'Full user action tracking, audit logs, and operational dashboards that give you actionable business intelligence right out of the box.',
    points: ['Structured user audit logs', 'Real-time performance telemetry', 'Privacy-compliant event metrics', 'Custom KPI dashboards'],
  },
];

const Features = () => {
  return (
    <div className="features-page">
      <SEO
        title="Features - What Sets Us Apart | AshbitSoft"
        description="Discover the technical features that make AshbitSoft different: performance, security, scalability, and innovation built into every project."
        canonical="/features"
      />

      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Engineered Standards</span>
          <h1 className="display-lg text-white mt-16">
            Platform Features &amp;<br />Technical Capabilities
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Discover the technical features that make AshbitSoft different: enterprise security, extreme performance, and resilient architecture built into every deployment.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="service-card" style={{ opacity: 1, transform: 'none' }}>
                  <div className="service-card__top">
                    <div className="icon-box icon-box--lg">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="service-card__headline">{feat.title}</h3>
                  <p className="eyebrow" style={{ color: 'var(--blue)' }}>{feat.tagline}</p>
                  <p className="service-card__desc body-md">{feat.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {feat.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', color: 'var(--text-body)' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="section-actions mt-32" style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Build with These Standards <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
