import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Enterprises = () => (
  <div>
    <SEO
      title="Enterprise Digital Infrastructure & Custom Software"
      description="High-security distributed systems, SOC-2 ready backend architectures, microservices, and dedicated engineering sprints for large enterprises."
      canonical="/solutions/enterprises"
    />
    <section className="page-hero section--navy" style={{ padding: '96px 0 80px' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 20, display: 'inline-flex' }}>For Enterprises</span>
        <h1 style={{ fontSize: 'clamp(2rem,4vw,3.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
          Scalable Enterprise Software Architecture &amp; Cloud Solutions
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', maxWidth: 520, lineHeight: 1.7, marginBottom: 32 }}>
          High-security distributed systems, SOC-2 ready backend architectures, microservices, and dedicated engineering sprints for large enterprises.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Talk to Our Team <ArrowRight size={16} />
        </Link>
      </div>
    </section>
    <section className="section section--soft">
      <div className="container" style={{ maxWidth: 800 }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 24, letterSpacing: '-0.02em' }}>Enterprise Capabilities</h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
          {['Distributed microservices architecture', 'High-security backend systems', 'SOC-2 ready infrastructure', 'Java Spring Boot enterprise APIs', 'Dedicated engineering squads', 'Compliance-aware data pipelines'].map(f => (
            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9375rem', color: 'var(--text-body)' }}>
              <CheckCircle2 size={16} style={{ color: 'var(--teal)', flexShrink: 0 }} />{f}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-outline">Request a Technical Brief <ArrowRight size={15} /></Link>
      </div>
    </section>
  </div>
);

export default Enterprises;
