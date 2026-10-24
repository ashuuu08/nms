import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ShieldCheck, CheckCircle2, ArrowRight, Server, Lock,
  Cpu, Database, Layers, FileCheck, Users, Clock, Globe
} from 'lucide-react';

const ENTERPRISE_CAPABILITIES = [
  {
    icon: Lock,
    title: 'Zero-Trust Security & RBAC',
    desc: 'Fine-grained role-based permissions, multi-factor authentication, session expiration policies, and immutable audit logging for full regulatory compliance.',
    specs: ['Multi-tenant or dedicated isolation', 'Tamper-proof audit logs', 'AES-256 & TLS 1.3 encryption'],
  },
  {
    icon: Server,
    title: 'Dedicated VPC & On-Premise Deployment',
    desc: 'Deploy on your private AWS / GCP virtual private cloud or on-premise physical servers. Retain 100% control over database storage and network firewalls.',
    specs: ['Private subnet architecture', 'Automated geo-replicated backups', 'Zero third-party vendor tracking'],
  },
  {
    icon: Cpu,
    title: 'High-Concurrency Distributed Engines',
    desc: 'Engineered with fast asynchronous event queues, Redis caching layers, and resilient relational database pooling to sustain tens of thousands of concurrent daily actions.',
    specs: ['Sub-100ms API response time', 'Stateless horizontally scalable nodes', 'Auto-recovery health checks'],
  },
  {
    icon: Layers,
    title: 'Enterprise Integration Middleware',
    desc: 'Bi-directional synchronization bridges connecting your legacy software, ERP backbones, SAP, biometric turnstiles, and custom third-party APIs without data collisions.',
    specs: ['REST & GraphQL endpoints', 'OpenAPI / Swagger live docs', 'Webhook queue retries'],
  },
];

const GOVERNANCE_ITEMS = [
  { label: '100% Source Code & IP Handover', desc: 'Full ownership of all git repositories, documentation, and architecture assets.' },
  { label: 'Indian DPDP & Global Compliance Ready', desc: 'Explicit consent logs, data erasure hooks, and encrypted personal identifier columns.' },
  { label: '30-Day Hypercare Post-Launch Warranty', desc: 'Immediate bug remediation and dedicated engineer standby during operational rollouts.' },
  { label: 'Direct Access to Senior Architects', desc: 'Direct technical collaboration with Ashish Kumar and lead engineers without junior proxy layers.' },
];

const Enterprises = () => {
  return (
    <div className="enterprise-solution-page">
      <SEO
        title="Enterprise Digital Infrastructure & Custom Software | AshbitSoft"
        description="High-security distributed systems, dedicated VPC deployment, role-based access architectures, and dedicated engineering sprints for large organizations."
        canonical="/solutions/enterprises"
      />

      {/* Hero Header */}
      <section className="page-hero section--navy" style={{ padding: '88px 0 76px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ShieldCheck size={14} /> For Organizations &amp; Enterprises
          </span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 18 }}>
            Scalable Enterprise Software Architecture &amp; Private Cloud Systems
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.08rem', maxWidth: 640, margin: '0 auto 30px', lineHeight: 1.65 }}>
            Bespoke digital infrastructure engineered for high concurrency, uncompromising data sovereignty, and zero recurring seat license overhead.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Initiate Architecture Review <ArrowRight size={16} />
            </Link>
            <Link to="/company/security" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              Inspect Security Standards
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 36, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Lock size={16} style={{ color: 'var(--cyan)' }} /> Private VPC / On-Premise Hosting
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Server size={16} style={{ color: 'var(--cyan)' }} /> 99.9% Production Uptime Architecture
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <FileCheck size={16} style={{ color: 'var(--cyan)' }} /> Full IP &amp; Code Sovereignty
            </span>
          </div>
        </div>
      </section>

      {/* Core Enterprise Architecture Pillars */}
      <section className="section section--soft" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, margin: '0 auto 44px' }}>
            <span className="eyebrow eyebrow--navy">High-Assurance Engineering</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', fontWeight: 800, marginTop: 10, marginBottom: 12 }}>
              Enterprise Architectural Standards
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.984375rem', lineHeight: 1.6 }}>
              Systems engineered to handle demanding operational volumes with zero degradation in speed or security.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {ENTERPRISE_CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 18px rgba(16,43,92,0.04)'
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(21, 94, 239, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue)',
                    marginBottom: 18
                  }}>
                    <Icon size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 10 }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: 20 }}>
                    {cap.desc}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border-soft)' }}>
                    {cap.specs.map((s, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78125rem', color: 'var(--navy)', marginBottom: 6, fontWeight: 600 }}>
                        <CheckCircle2 size={13} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance & Compliance Strip */}
      <section className="section" style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="eyebrow eyebrow--cyan">Risk Mitigation</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, marginTop: 10 }}>
              Governance, IP Sovereignty &amp; Warranties
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {GOVERNANCE_ITEMS.map((g, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 22px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--teal)' }} />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                    {g.label}
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-soft)', padding: '0 0 80px' }}>
        <div className="container">
          <div className="card" style={{
            background: 'linear-gradient(135deg, #091D40 0%, #102B5C 100%)',
            color: '#FFFFFF',
            padding: '48px 40px',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 28,
            flexWrap: 'wrap'
          }}>
            <div>
              <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 12 }}>Enterprise Technical Scoping</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 8 }}>
                Schedule a Systems Architecture Discovery Call
              </h2>
              <p style={{ color: '#CBD7E8', fontSize: '0.95rem', margin: 0 }}>
                Directly explore feasibility, private cloud deployment, and integration roadmaps with Ashish Kumar.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ flexShrink: 0 }}>
              Initiate Technical Scoping <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprises;
