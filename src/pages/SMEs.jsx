import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Briefcase, CheckCircle2, ArrowRight, ShieldCheck,
  Zap, Clock, FileSpreadsheet, Database, MessageSquare,
  Printer, Users, Check, RefreshCw, BarChart2
} from 'lucide-react';

const SME_PILLARS = [
  {
    icon: FileSpreadsheet,
    title: 'Spreadsheet Replacement',
    oldWay: 'Slow, bloated Excel files that crash with multiple users and have zero access security.',
    ashbitWay: 'Centralized PostgreSQL database with instant search, role-based controls, and automated backups.',
    metric: 'Zero data overwrites',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & SMS Invoicing',
    oldWay: 'Handwriting paper bills and re-typing them every evening, leading to missed payments.',
    ashbitWay: 'One-tap PDF bills sent directly to client WhatsApp with automated UPI payment QR codes.',
    metric: '90-second invoice cycle',
  },
  {
    icon: BarChart2,
    title: 'Live Operational Transparency',
    oldWay: 'The owner has to call staff 20 times a day to ask about dispatch status and collections.',
    ashbitWay: 'A clean executive dashboard showing daily revenue, outstanding balances, and low-stock alerts.',
    metric: 'Real-time visibility anywhere',
  },
];

const INTEGRATIONS = [
  { name: 'WhatsApp Business API', desc: 'Direct automated dispatch of bills, payment reminders & order confirmations.' },
  { name: 'Thermal & Barcode Printers', desc: 'Plug-and-play support for ESC/POS receipt printers and sticker barcode scanners.' },
  { name: 'Tally & Accounting Sync', desc: 'Export compliant XML/CSV ledgers directly into Tally Prime without manual re-entry.' },
  { name: 'UPI & Payment Gateways', desc: 'Razorpay, Cashfree & UPI dynamic QR codes printed right on your bills.' },
  { name: 'Biometric & Staff Punch', desc: 'Connect biometric attendance machines to automatically tally monthly staff payroll.' },
  { name: 'Google Workspace & Sheets', desc: 'Custom Google Apps Scripts to synchronize live leads and internal form submissions.' },
];

const SMEs = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  return (
    <div className="sme-solution-page">
      <SEO
        title="Software Modernization & Process Automation for SMEs | AshbitSoft"
        description="Modernize legacy systems, automate internal business workflows, and replace error-prone spreadsheets with custom management software."
        canonical="/solutions/smes"
      />

      {/* Hero Header */}
      <section className="page-hero section--navy" style={{ padding: '88px 0 76px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Briefcase size={14} /> For Growing Businesses &amp; SMEs
          </span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 18 }}>
            Digital Transformation for Businesses that Refuse to Run on Chaos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.08rem', maxWidth: 640, margin: '0 auto 30px', lineHeight: 1.65 }}>
            Eliminate hours of manual paper registers, handwriting bills, and WhatsApp miscommunications. We engineer custom operational software built around your exact daily routine.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request Workflow Consultation <ArrowRight size={16} />
            </Link>
            <Link to="/pricing" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              Explore SME Pricing
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 36, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={16} style={{ color: 'var(--cyan)' }} /> ₹0 Per-User Recurring Fees
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Zap size={16} style={{ color: 'var(--cyan)' }} /> 15+ Hours Saved per Week
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Users size={16} style={{ color: 'var(--cyan)' }} /> 15-Minute Staff Learning Curve
            </span>
          </div>
        </div>
      </section>

      {/* 3 Modernization Pillars */}
      <section className="section section--soft" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, margin: '0 auto 40px' }}>
            <span className="eyebrow eyebrow--navy">Core Modernization</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', fontWeight: 800, marginTop: 10, marginBottom: 12 }}>
              What We Transform in Your Everyday Operations
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {SME_PILLARS.map((p, idx) => {
              const Icon = p.icon;
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

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 14 }}>
                    {p.title}
                  </h3>

                  <div style={{ background: '#FFF1F0', borderRadius: 'var(--radius-sm)', padding: '10px 14px', marginBottom: 10 }}>
                    <div style={{ fontSize: '0.71875rem', fontWeight: 800, color: '#D92D20', textTransform: 'uppercase' }}>Old Routine:</div>
                    <div style={{ fontSize: '0.84375rem', color: '#B42318', lineHeight: 1.5 }}>{p.oldWay}</div>
                  </div>

                  <div style={{ background: '#ECFDF3', borderRadius: 'var(--radius-sm)', padding: '10px 14px', marginBottom: 16 }}>
                    <div style={{ fontSize: '0.71875rem', fontWeight: 800, color: '#0E7065', textTransform: 'uppercase' }}>With Ashbit Soft:</div>
                    <div style={{ fontSize: '0.84375rem', color: '#0E7065', lineHeight: 1.5 }}>{p.ashbitWay}</div>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', fontWeight: 700, color: 'var(--blue)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--teal)' }} />
                    <span>{p.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hardware & Ecosystem Integrations */}
      <section className="section" style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, margin: '0 auto 40px' }}>
            <span className="eyebrow eyebrow--cyan">Seamless Connectivity</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, marginTop: 10 }}>
              Hardware &amp; Local Business Integrations
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
              We don't isolate your software. We connect it directly to the tools your business already uses every day.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {INTEGRATIONS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 22px'
                }}
              >
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--navy)', marginBottom: 6 }}>
                  {item.name}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
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
              <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 12 }}>Speak to an Engineer</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 8 }}>
                Ready to Upgrade Your Company's Workflow?
              </h2>
              <p style={{ color: '#CBD7E8', fontSize: '0.95rem', margin: 0 }}>
                Schedule a discovery walkthrough. We will map out your exact system architecture with transparent fixed pricing.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ flexShrink: 0 }}>
              Schedule Free Scoping Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMEs;
