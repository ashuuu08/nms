import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, ArrowRight, Search, FileQuestion } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEO
        title="404 — Page Not Found | AshbitSoft"
        description="The page you are looking for does not exist or has been moved."
        canonical="/404"
      />

      <section className="section" style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(21, 94, 239, 0.08)',
            color: 'var(--blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <FileQuestion size={40} />
          </div>

          <span className="eyebrow" style={{ color: 'var(--blue)' }}>Error 404</span>
          <h1 className="display-md" style={{ marginTop: '12px', marginBottom: '16px' }}>
            Page Not Located
          </h1>
          <p className="body-lg" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Return to Homepage
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services <ArrowRight size={15} />
            </Link>
          </div>

          <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '24px' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Quick Navigation:
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.875rem' }}>
              <Link to="/pricing" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Pricing</Link>
              <Link to="/solutions/startups" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Startups</Link>
              <Link to="/blog" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Blog</Link>
              <Link to="/company/about" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>About</Link>
              <Link to="/contact" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
