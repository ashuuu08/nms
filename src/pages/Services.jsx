import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Globe, Smartphone, Package, Coffee, Zap, Bot,
  Cloud, Megaphone, Briefcase, ArrowRight, CheckCircle2,
  ChevronDown, ChevronUp
} from 'lucide-react';
import './Services.css';

const SERVICES = [
  {
    id: 'development',
    category: 'development',
    icon: Globe,
    title: 'Custom Web Applications',
    subtitle: 'Full-Stack Development',
    desc: 'Build powerful, scalable web applications tailored to your business needs using modern frameworks and cloud-native architecture.',
    features: ['Full-stack development with React & Node.js', 'Responsive design for all devices', 'Cloud-native & serverless architecture', 'REST / GraphQL API development', 'Real-time data synchronisation'],
    delivery: '4–8 weeks',
  },
  {
    id: 'automation',
    category: 'automation',
    icon: Zap,
    title: 'Workflow Automation',
    subtitle: 'Google Apps Script & APIs',
    desc: 'Eliminate manual tasks with custom automation solutions that connect your spreadsheets, CRM, and internal tools.',
    features: ['Google Apps Script development', 'Spreadsheet and form automation', 'Email workflow automation', 'CRM data sync and reporting', 'Trigger-based pipeline engineering'],
    delivery: '1–4 weeks',
  },
  {
    id: 'ai',
    category: 'ai',
    icon: Bot,
    title: 'AI & Chatbot Integration',
    subtitle: 'OpenAI API & Custom Bots',
    desc: 'Deploy intelligent AI solutions for customer support, document extraction, and knowledge-base automation.',
    features: ['Custom AI chatbots with OpenAI GPT', 'Knowledge base training & fine-tuning', 'WhatsApp & web widget deployment', 'Document extraction automation', 'Conversation analytics'],
    delivery: '2–6 weeks',
  },
  {
    id: 'marketing',
    category: 'marketing',
    icon: Megaphone,
    title: 'Digital Marketing & SEO',
    subtitle: 'Performance Marketing',
    desc: 'Data-driven marketing strategies for sustainable customer acquisition, conversion optimisation, and revenue growth.',
    features: ['Technical SEO & Core Web Vitals', 'PPC campaign management', 'Content strategy & topic clustering', 'Conversion rate optimisation', 'Analytics & performance reporting'],
    delivery: 'Ongoing retainer',
  },
  {
    id: 'mobile',
    category: 'development',
    icon: Smartphone,
    title: 'Mobile App Development',
    subtitle: 'iOS & Android',
    desc: 'Native and cross-platform mobile applications with offline-first architecture and smooth user experiences.',
    features: ['React Native cross-platform apps', 'Native iOS and Android development', 'Offline-first architecture', 'Push notifications & analytics', 'App Store optimisation'],
    delivery: '6–12 weeks',
  },
  {
    id: 'enterprise',
    category: 'development',
    icon: Coffee,
    title: 'Java Enterprise Systems',
    subtitle: 'Spring Boot Backend',
    desc: 'Robust backend architectures for high-transaction enterprise applications with bank-grade security.',
    features: ['Spring Boot microservices', 'High-throughput API design', 'Database optimisation & indexing', 'OAuth 2.0 & JWT security', 'Legacy system modernisation'],
    delivery: '8–16 weeks',
  },
  {
    id: 'cloud',
    category: 'development',
    icon: Cloud,
    title: 'Cloud & Database Architecture',
    subtitle: 'AWS / GCP / Supabase',
    desc: 'Scalable cloud infrastructure, database design, and CI/CD pipelines for reliable, cost-efficient systems.',
    features: ['AWS, GCP, and Azure setup', 'Supabase & PostgreSQL integration', 'CI/CD pipeline engineering', 'Monitoring and alerting', 'Cost optimisation'],
    delivery: '2–6 weeks',
  },
  {
    id: 'consulting',
    category: 'consulting',
    icon: Briefcase,
    title: 'Tech Consulting',
    subtitle: 'Digital Transformation',
    desc: 'Strategic technology consulting to audit your current stack, define the right architecture, and build your digital roadmap.',
    features: ['Technology audit & gap analysis', 'Stack and architecture recommendations', 'Digital transformation roadmap', 'Team augmentation', 'Vendor evaluation'],
    delivery: '1–2 weeks',
  },
];

const CATEGORIES = [
  { id: 'all',         label: 'All Services' },
  { id: 'development', label: 'Development' },
  { id: 'automation',  label: 'Automation' },
  { id: 'ai',          label: 'AI & Chatbots' },
  { id: 'marketing',   label: 'Marketing' },
  { id: 'consulting',  label: 'Consulting' },
];

const FAQS = [
  { q: 'How do you determine pricing?', a: 'We offer transparent value-based pricing. After an initial consultation, we provide a detailed proposal with clear milestones and costs. No hidden fees.' },
  { q: 'What is your development process?', a: 'We follow agile methodology: Discovery → Architecture → Development (2-week sprints) → Launch & Support. You get daily updates and weekly demos.' },
  { q: 'Do you offer maintenance after launch?', a: 'Yes. All projects include a 30-day bug-fix guarantee. We also offer monthly retainer packages for ongoing support and feature development.' },
  { q: 'Can you work with our existing tech stack?', a: 'Absolutely. We are stack-agnostic and can integrate with your existing infrastructure, whether legacy systems or modern cloud platforms.' },
];

const Services = () => {
  const [category, setCategory] = useState('all');
  const [openFaq, setOpenFaq]   = useState(null);

  const filtered = category === 'all' ? SERVICES : SERVICES.filter(s => s.category === category);

  return (
    <div className="services-page">
      <SEO
        title="Custom Software & Cloud Development Services"
        description="Explore AshbitSoft's engineering services: bespoke web applications, mobile apps, AI chatbot integration, Google Apps Script automation, and enterprise backend systems."
        canonical="/services"
      />

      {/* Hero */}
      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Our Services</span>
          <h1 className="display-lg text-white mt-16">
            End-to-End Software Engineering<br />&amp; Automation Services
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            From rapid MVPs to enterprise-grade systems — we build, automate, and scale the technology that powers your business.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="services-filter">
        <div className="container">
          <div className="services-filter__tabs" role="tablist" aria-label="Service categories">
            {CATEGORIES.map(c => (
              <button
                key={c.id}
                role="tab"
                aria-selected={category === c.id}
                className={`services-filter__tab ${category === c.id ? 'active' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services list */}
      <section className="section section--soft">
        <div className="container">
          <div className="services-list">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <article key={svc.id} className="service-row">
                  <div className="service-row__icon">
                    <div className="icon-box icon-box--lg">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="service-row__body">
                    <p className="eyebrow">{svc.subtitle}</p>
                    <h2 className="service-row__title">{svc.title}</h2>
                    <p className="body-md service-row__desc">{svc.desc}</p>
                    <ul className="service-row__features">
                      {svc.features.map(f => (
                        <li key={f}>
                          <CheckCircle2 size={14} aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="service-row__meta">
                    <div className="service-row__delivery">
                      <span className="service-row__delivery-label">Typical delivery</span>
                      <span className="service-row__delivery-val">{svc.delivery}</span>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-sm">
                      Get a Quote <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="faq-layout">
            <div>
              <span className="eyebrow">FAQs</span>
              <h2 id="faq-heading" className="display-md mt-16">Common questions</h2>
              <p className="body-lg mt-16 max-text">
                Get answers about our process, pricing, and how we work with clients.
              </p>
              <Link to="/company/faq" className="btn btn-outline mt-32">
                View All FAQs <ArrowRight size={15} />
              </Link>
            </div>
            <div className="faq-list">
              {FAQS.map((faq, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button
                    className="faq-item__q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === i && (
                    <div className="faq-item__a">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
