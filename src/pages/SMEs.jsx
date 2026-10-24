import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const SMEs = () => (
  <div>
    <SEO
      title="Software Modernization & Process Automation for SMEs"
      description="Modernize legacy systems, automate internal business workflows, and replace error-prone spreadsheets with custom management software."
      canonical="/solutions/smes"
    />
    <section className="page-hero section--navy" style={{ padding: '96px 0 80px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 20, display: 'inline-flex' }}>For SMEs</span>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
          Digital Transformation &amp; Workflow Systems for Growing Businesses
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', maxWidth: 520, lineHeight: 1.7, marginBottom: 32 }}>
          Modernize legacy systems, automate internal business workflows, and replace error-prone spreadsheets with custom management software.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Discuss Your Needs <ArrowRight size={16} />
        </Link>
      </div>
    </section>
    <section className="section section--soft">
      <div className="container" style={{ maxWidth: 800 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, letterSpacing: '-0.02em' }}>What We Do for SMEs</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
          {['Legacy system modernisation', 'Custom ERP & management software', 'Workflow & spreadsheet automation', 'Google Workspace integration', 'Process digitisation & reporting', 'Cloud migration & infrastructure'].map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9375rem', color: 'var(--text-body)' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--teal)', flexShrink: 0 }} />{f}
            </li>
          ))}
        </ul>
        <Link to="/pricing" className="btn btn-outline">View SME Pricing <ArrowRight size={15} /></Link>
      </div>
    </section>
  </div>
);

export default SMEs;
