import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ShieldCheck, Lock, Key, Server, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

const SECURITY_PILLARS = [
  {
    icon: Lock,
    title: 'Data Encryption Everywhere',
    desc: 'All data is encrypted in transit using TLS 1.3 with strict HSTS policies. At rest, databases and file stores leverage AES-256 encryption standard.',
  },
  {
    icon: Key,
    title: 'Zero-Trust Authentication',
    desc: 'We enforce robust identity verification using OAuth 2.0, OpenID Connect, secure JWTs with short expiry, and multi-factor authentication (MFA).',
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure Hardening',
    desc: 'Production applications are isolated in private VPC subnets with strict security groups, web application firewalls (WAF), and DDoS mitigation.',
  },
  {
    icon: ShieldCheck,
    title: 'OWASP Top 10 Mitigation',
    desc: 'Systematic protection against SQL injection, cross-site scripting (XSS), CSRF attacks, server-side request forgery (SSRF), and broken access controls.',
  },
];

const Security = () => {
  return (
    <div className="security-page">
      <SEO
        title="Security & Data Protection Policy | AshbitSoft"
        description="Our enterprise-grade security practices: AES-256 encryption, OAuth 2.0 authentication, GDPR compliance, and regular penetration testing."
        canonical="/company/security"
      />

      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Trust &amp; Compliance</span>
          <h1 className="display-lg text-white mt-16">
            Security &amp; Data Protection Standards
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Enterprise-grade security practices built into our development methodology, infrastructure management, and data governance.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {SECURITY_PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                }}>
                  <div className="icon-box icon-box--md icon-box--cyan" style={{ marginBottom: '16px' }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '16px' }}>
              Responsible Disclosure &amp; Vulnerability Reporting
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '20px' }}>
              We take the security of our systems and client software extremely seriously. If you have discovered a security vulnerability or bug in any service maintained by AshbitSoft, we ask that you report it to us immediately via our dedicated security channel.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-body)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--teal)' }} />
                <span>Email our security team directly at <strong>security@ashbit.in</strong></span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-body)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--teal)' }} />
                <span>Please provide proof-of-concept steps and allow 48 hours for triage</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: 'var(--text-body)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--teal)' }} />
                <span>We commit to not pursuing legal action against bona-fide ethical researchers</span>
              </li>
            </ul>
            <Link to="/contact" className="btn btn-primary">
              Contact Security Officer <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
