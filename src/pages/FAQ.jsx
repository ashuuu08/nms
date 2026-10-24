import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronDown, ChevronUp, Search, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { contact } from '../data/siteData';

const FAQ_GROUPS = [
  {
    category: 'Development & Engineering',
    items: [
      {
        q: 'What technologies and frameworks do you use?',
        a: 'We specialize in React (Vite / Next.js) and TypeScript for frontend interfaces, Node.js (Express / Fastify) and Java Spring Boot for backend microservices, and PostgreSQL, MongoDB, and Supabase for database architectures. For automations, we leverage Google Apps Script, Python, and cloud webhooks.',
      },
      {
        q: 'How long does a typical software project take?',
        a: 'A lightweight MVP or workflow automation typically ships in 2 to 4 weeks. A full-scale custom web application or enterprise ERP platform averages 6 to 12 weeks, deployed in 2-week agile sprints with continuous staging demos.',
      },
      {
        q: 'Can you modernize our existing legacy software without downtime?',
        a: 'Yes. We specialize in zero-downtime strangler-pattern migrations, creating modern APIs and microservices alongside your legacy system before seamlessly rerouting production traffic.',
      },
    ],
  },
  {
    category: 'Pricing & Contracts',
    items: [
      {
        q: 'How are project costs calculated?',
        a: 'We provide itemized, fixed-price proposals based on documented technical specifications. For ongoing feature development or team augmentation, we offer flexible monthly retainer tiers with clear weekly deliverables.',
      },
      {
        q: 'Do you charge upfront before any work begins?',
        a: 'Our standard milestone structure requires an initial 30% kickoff deposit, 40% upon successful staging milestone demonstration, and the final 30% only after full production sign-off and code handover.',
      },
      {
        q: 'Who owns the intellectual property and source code?',
        a: 'You do, 100%. Upon completion of project milestones, all source code, Git repositories, deployment configurations, and credentials are completely transferred to your organization.',
      },
    ],
  },
  {
    category: 'Automations & AI',
    items: [
      {
        q: 'What kind of processes can you automate with Google Apps Script?',
        a: 'We automate invoice generation, Google Sheets CRM synchronizations, multi-stage approval emails, Google Drive file structuring, automated PDF reports, and cross-platform webhooks connecting third-party APIs.',
      },
      {
        q: 'How do you ensure AI chatbots provide accurate information?',
        a: 'We implement Retrieval-Augmented Generation (RAG) using vector embeddings and strict system prompting. The AI answers strictly from your verified knowledge base and company documents, preventing hallucinations.',
      },
    ],
  },
  {
    category: 'Support & Security',
    items: [
      {
        q: 'What happens if a bug is discovered after launch?',
        a: 'Every project comes with a complimentary 30 to 60-day warranty period during which any critical bug or defect is resolved with priority at zero extra charge.',
      },
      {
        q: 'How do you safeguard client data and credentials?',
        a: 'We enforce strict NDA agreements, AES-256 data encryption at rest and in transit, multi-factor authentication, and zero hardcoded secrets in repositories.',
      },
    ],
  },
];

const FAQ = () => {
  const [search, setSearch] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (groupIdx, itemIdx) => {
    const key = `${groupIdx}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter based on search query
  const filteredGroups = FAQ_GROUPS.map((group) => {
    const filteredItems = group.items.filter(
      (item) =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    );
    return { ...group, items: filteredItems };
  }).filter((group) => group.items.length > 0);

  // Schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_GROUPS.flatMap((g) =>
      g.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }))
    ),
  };

  return (
    <div className="faq-page">
      <SEO
        title="Frequently Asked Questions | AshbitSoft"
        description="Get answers to common questions about AshbitSoft's development process, pricing, project timelines, tech stack, and post-launch support."
        canonical="/company/faq"
      />

      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Knowledge Hub</span>
          <h1 className="display-lg text-white mt-16">
            Frequently Asked Questions
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Transparent answers about our engineering process, pricing models, technology choices, and long-term client support.
          </p>

          {/* Search bar */}
          <div style={{ marginTop: '32px', position: 'relative', maxWidth: '480px' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search questions (e.g. pricing, warranty, React)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.08)',
                color: 'white',
                fontSize: '0.9375rem',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '860px' }}>
          {filteredGroups.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <p className="body-lg" style={{ color: 'var(--text-muted)' }}>
                No questions found matching "{search}".
              </p>
            </div>
          ) : (
            filteredGroups.map((group, gIdx) => (
              <div key={gIdx} style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '-0.015em' }}>
                  {group.category}
                </h2>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border-soft)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                  {group.items.map((item, iIdx) => {
                    const isOpen = !!openItems[`${gIdx}-${iIdx}`];
                    return (
                      <div key={iIdx} style={{ borderBottom: iIdx === group.items.length - 1 ? 'none' : '1px solid var(--border-soft)' }}>
                        <button
                          type="button"
                          onClick={() => toggleItem(gIdx, iIdx)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px 24px',
                            background: 'none',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            fontSize: '0.9375rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            gap: '16px',
                          }}
                        >
                          <span>{item.q}</span>
                          {isOpen ? <ChevronUp size={18} style={{ color: 'var(--blue)', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />}
                        </button>
                        {isOpen && (
                          <div style={{ padding: '0 24px 20px 24px', color: 'var(--text-body)', fontSize: '0.875rem', lineHeight: '1.7' }}>
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}

          {/* Still have questions banner */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-soft)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px',
            textAlign: 'center',
            marginTop: '32px',
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
              Still have questions about your specific project?
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              We’re happy to review your architecture or project scope over a complimentary 20-minute call.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${contact.phoneRaw}`} className="btn btn-outline">
                <Phone size={15} /> {contact.phone}
              </a>
              <Link to="/contact" className="btn btn-primary">
                Reach Out Directly <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
