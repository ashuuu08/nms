import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const SERVICE_DATA = {
  development: {
    title: 'Full-Stack Web & MERN App Development',
    metaTitle: 'Full-Stack Web & MERN App Development Company',
    metaDesc: 'Scalable React, Node.js, and Java Spring Boot enterprise development built for high throughput, sub-100ms load times, and bank-grade security.',
    h1: 'Custom Web Application & Enterprise Software Development',
    features: ['React 18 + TypeScript SPAs', 'Node.js & Express REST APIs', 'Java Spring Boot microservices', 'MongoDB, PostgreSQL & Supabase', 'AWS / GCP cloud deployment', 'CI/CD pipelines & automated testing'],
  },
  automation: {
    title: 'Workflow & Google Apps Script Automation',
    metaTitle: 'Workflow & Google Apps Script Automation Services',
    metaDesc: 'Automate tedious spreadsheets, auto-generate invoices, connect CRM data, and save 30+ hours weekly with custom Google Apps Script and API integrations.',
    h1: 'Workspace Automation & Custom API Scripting',
    features: ['Google Apps Script development', 'Spreadsheet & form automation', 'PDF invoice generation', 'CRM and email workflow automation', 'Webhook and REST API bridges', 'Trigger-based data pipelines'],
  },
  ai: {
    title: 'Custom AI Chatbot & OpenAI API Integration',
    metaTitle: 'Custom AI Chatbot & OpenAI API Integration',
    metaDesc: 'Empower your business with tailored AI solutions: proprietary knowledge-base bots, automated document extraction, and customer support widgets.',
    h1: 'AI Automation & Custom Chatbot Engineering',
    features: ['OpenAI GPT-4 chatbot development', 'Custom knowledge-base training', 'WhatsApp & web widget deployment', 'Document extraction automation', 'LangChain & vector search integration', 'Conversation analytics & reporting'],
  },
  marketing: {
    title: 'Digital Marketing & SEO Strategy Services',
    metaTitle: 'Digital Marketing & SEO Strategy Services',
    metaDesc: 'Data-driven marketing, technical SEO, PPC campaign management, and conversion rate optimization to fuel customer acquisition and revenue growth.',
    h1: 'Performance Marketing & SEO Growth Engineering',
    features: ['Technical SEO & Core Web Vitals', 'PPC campaign management', 'Content strategy & creation', 'Social media marketing', 'Conversion rate optimisation', 'Analytics & performance reporting'],
  },
  mobile: {
    title: 'Mobile App Development (iOS & Android)',
    metaTitle: 'Mobile App Development Services (iOS & Android)',
    metaDesc: 'Native and cross-platform React Native mobile applications engineered with offline-first architecture, device hardware sync, and smooth 60fps UX.',
    h1: 'Native & Cross-Platform Mobile Application Development',
    features: ['React Native cross-platform apps', 'Native iOS & Android APIs', 'Offline-first SQLite local caching', 'Push notification pipelines', 'App Store & Google Play deployment', 'Bluetooth & camera hardware sync'],
  },
  enterprise: {
    title: 'Java Spring Boot & Enterprise Systems',
    metaTitle: 'Java Spring Boot & Enterprise Backend Architecture',
    metaDesc: 'Robust Java Spring Boot microservices, high-concurrency relational data pipelines, and bank-grade backend architectures for large organizations.',
    h1: 'Java Spring Boot & Enterprise Microservices Architecture',
    features: ['Java Spring Boot microservices', 'High-throughput event streaming', 'PostgreSQL & relational database clustering', 'Zero-downtime rolling deployments', 'Role-based access & immutable audit trails', 'Legacy enterprise system modernization'],
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const svc = SERVICE_DATA[id];

  if (!svc) return <Navigate to="/services" replace />;

  return (
    <div>
      <SEO
        title={svc.metaTitle}
        description={svc.metaDesc}
        canonical={`/services/${id}`}
      />
      <section className="page-hero section--navy" style={{ padding: '96px 0 80px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: 24, textDecoration: 'none' }}>
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 20 }}>
            {svc.h1}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', maxWidth: 520, lineHeight: 1.7 }}>
            {svc.metaDesc}
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 32, letterSpacing: '-0.02em' }}>
            What's Included
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 48 }}>
            {svc.features.map(f => (
              <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.9375rem', color: 'var(--text-body)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--teal)', flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Discuss This Service <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
