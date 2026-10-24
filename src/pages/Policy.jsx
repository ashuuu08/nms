import SEO from '../components/SEO';

const Policy = () => {
  return (
    <div className="policy-page">
      <SEO
        title="Privacy Policy & Terms of Service | AshbitSoft"
        description="AshbitSoft's privacy policy, terms of service, and data handling practices for all clients and website visitors."
        canonical="/company/policy"
      />

      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Legal &amp; Privacy</span>
          <h1 className="display-lg text-white mt-16">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Clear guidelines on how AshbitSoft collects, protects, and handles your information across our website and custom software engagements.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px 40px',
            color: 'var(--text-body)',
            lineHeight: '1.75',
          }}>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '0.9375rem' }}>
              When you submit an inquiry form or communicate with AshbitSoft via email or phone, we collect basic contact details including your name, company name, email address, phone number, and project specifications. We do not sell, rent, or trade your personal data to third parties.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
              2. How We Use Collected Information
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '0.9375rem' }}>
              Information submitted through this site is strictly utilized to respond to inquiries, prepare technical proposals, manage active software development contracts, and issue invoices. We may occasionally send technical updates or case studies; you may opt out at any time.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
              3. Intellectual Property &amp; Code Ownership
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '0.9375rem' }}>
              For bespoke software engineering engagements, upon receipt of final milestone payments, the client retains 100% full ownership of the custom code, assets, database schemas, and documentation created exclusively for their organization. AshbitSoft retains no proprietary claim over your business logic.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
              4. Cookies &amp; Tracking
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '0.9375rem' }}>
              Our website uses minimal, privacy-conscious performance cookies and local storage to preserve theme preferences and assess aggregate site traffic. We do not use intrusive cross-site tracking cookies or invasive third-party ad pixels.
            </p>

            <h2 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '0.9375rem' }}>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with services rendered by AshbitSoft shall be subject to the exclusive jurisdiction of the competent courts in Madhya Pradesh, India.
            </p>

            <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: '20px', marginTop: '32px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Last revised: January 2026. For questions regarding our policies, contact legal@ashbit.in.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
