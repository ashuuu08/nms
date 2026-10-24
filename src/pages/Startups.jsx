import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Rocket, CheckCircle2, ArrowRight, Clock, ShieldCheck,
  Zap, Code2, Database, Smartphone, Bot, Layers,
  ChevronRight, Cpu, Sparkles, Star
} from 'lucide-react';

const SPRINT_WEEKS = [
  {
    week: 'Week 01',
    title: 'Product Blueprint & Figma UX',
    desc: 'Interactive Figma prototype, user flows, database relational schema, and architectural scoping.',
    deliverables: ['Clickable prototype', 'Database ER diagram', 'Fixed-scope roadmap'],
  },
  {
    week: 'Week 02',
    title: 'Core Engine & Authentication',
    desc: 'High-speed React frontend, Node.js REST API, secure OAuth (Google/GitHub), and PostgreSQL migrations.',
    deliverables: ['JWT Auth system', 'Core API endpoints', 'Responsive UI library'],
  },
  {
    week: 'Week 03',
    title: 'Payments, Admin Hub & Logic',
    desc: 'Stripe or Razorpay payment integrations, webhook listeners, user management, and internal admin metrics.',
    deliverables: ['Checkout workflows', 'Admin control center', 'Automated email alerts'],
  },
  {
    week: 'Week 04',
    title: 'Security Audit & Launch',
    desc: 'End-to-end testing, SSL configuration, cloud deployment on Vercel/AWS, and 100% IP code handover.',
    deliverables: ['Production deployment', 'Clean GitHub repo', '30-day warranty'],
  },
];

const STACK_PREVIEWS = {
  web: {
    title: 'B2B & B2C Web Applications',
    tech: ['React / Vite', 'Next.js', 'Node.js Fast API', 'PostgreSQL', 'Tailwind / Modern CSS'],
    highlight: 'Lightning-fast load speed (< 0.8s) with modern SEO and responsive mobile design.',
  },
  mobile: {
    title: 'Cross-Platform Mobile Apps',
    tech: ['React Native', 'Expo', 'Offline SQLite', 'Push Notifications', 'App Store Ready'],
    highlight: 'One unified codebase for iOS & Android with offline-first local data syncing.',
  },
  ai: {
    title: 'AI-Native Applications & Bots',
    tech: ['OpenAI GPT-4o API', 'Vector Embeddings', 'Python Fast API', 'LangChain / Custom RAG'],
    highlight: 'Smart semantic search, AI customer assistance bots, and automated document extraction.',
  },
};

const Startups = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeStack, setActiveStack] = useState('web');

  return (
    <div className="startup-solution-page">
      <SEO
        title="MVP Software Development for Startups in 4-8 Weeks | AshbitSoft"
        description="Launch your startup MVP in weeks with scalable code architecture, investor-ready technical documentation, and 100% code ownership."
        canonical="/solutions/startups"
      />

      {/* Hero Header */}
      <section className="page-hero section--navy" style={{ padding: '88px 0 76px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Rocket size={14} /> For Tech Startups &amp; Founders
          </span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 18 }}>
            Launch Your Production-Ready MVP in 4 to 8 Weeks
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.08rem', maxWidth: 640, margin: '0 auto 30px', lineHeight: 1.65 }}>
            Don't waste 6 months and lakhs on agency overhead. We build clean, scalable, investor-ready web &amp; mobile apps with 100% intellectual property ownership transferred to you.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book 30-Min Founder Scoping <ArrowRight size={16} />
            </Link>
            <Link to="/pricing" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              View Startup Pricing Sprints
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 36, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <ShieldCheck size={16} style={{ color: 'var(--cyan)' }} /> 100% IP &amp; Code Ownership
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Zap size={16} style={{ color: 'var(--cyan)' }} /> Fixed Price &amp; Fixed Timeline
            </span>
            <span style={{ fontSize: '0.8125rem', color: '#B4C4DA', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Code2 size={16} style={{ color: 'var(--cyan)' }} /> Investor-Grade Clean Architecture
            </span>
          </div>
        </div>
      </section>

      {/* Interactive 4-Week Sprint Roadmap */}
      <section className="section section--soft" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, margin: '0 auto 40px' }}>
            <span className="eyebrow eyebrow--navy">Execution Velocity</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', fontWeight: 800, marginTop: 10, marginBottom: 12 }}>
              The 4-Week MVP Sprint Roadmap
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '0.984375rem', lineHeight: 1.6 }}>
              A disciplined, transparent delivery framework designed to get real software into your early adopters' hands.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {SPRINT_WEEKS.map((w, idx) => {
              const isSelected = activeWeek === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveWeek(idx)}
                  style={{
                    background: isSelected ? '#0D2249' : '#FFFFFF',
                    color: isSelected ? '#FFFFFF' : 'inherit',
                    border: `1px solid ${isSelected ? '#0D2249' : 'var(--border)'}`,
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px 22px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 12px 30px rgba(13, 34, 73, 0.2)' : '0 2px 8px rgba(16,43,92,0.04)',
                    transform: isSelected ? 'translateY(-4px)' : 'none'
                  }}
                >
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: isSelected ? 'var(--cyan)' : 'var(--blue)',
                    marginBottom: 8
                  }}>
                    {w.week}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: 10, color: isSelected ? '#FFFFFF' : 'var(--navy)' }}>
                    {w.title}
                  </h3>
                  <p style={{ fontSize: '0.84375rem', lineHeight: 1.55, color: isSelected ? '#CBD7E8' : 'var(--text-body)', marginBottom: 16 }}>
                    {w.desc}
                  </p>
                  <div style={{ borderTop: `1px solid ${isSelected ? 'rgba(255,255,255,0.15)' : 'var(--border-soft)'}`, paddingTop: 12 }}>
                    <div style={{ fontSize: '0.71875rem', fontWeight: 700, textTransform: 'uppercase', color: isSelected ? 'var(--cyan)' : 'var(--text-muted)', marginBottom: 6 }}>
                      Deliverables:
                    </div>
                    {w.deliverables.map((d, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78125rem', marginBottom: 4 }}>
                        <CheckCircle2 size={13} style={{ color: isSelected ? 'var(--cyan)' : 'var(--teal)', flexShrink: 0 }} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack Showcase */}
      <section className="section" style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center" style={{ marginBottom: 36 }}>
            <span className="eyebrow eyebrow--cyan">Technology Selection</span>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, marginTop: 10 }}>
              What Type of Product Are You Building?
            </h2>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveStack('web')}
              className={`btn ${activeStack === 'web' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Layers size={16} /> Web Application &amp; SaaS
            </button>
            <button
              onClick={() => setActiveStack('mobile')}
              className={`btn ${activeStack === 'mobile' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Smartphone size={16} /> Mobile App (iOS &amp; Android)
            </button>
            <button
              onClick={() => setActiveStack('ai')}
              className={`btn ${activeStack === 'ai' ? 'btn-primary' : 'btn-outline'}`}
            >
              <Bot size={16} /> AI Assistant &amp; Automation
            </button>
          </div>

          <div style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--navy)' }}>
              {STACK_PREVIEWS[activeStack].title}
            </h3>
            <p style={{ fontSize: '0.984375rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {STACK_PREVIEWS[activeStack].highlight}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
              {STACK_PREVIEWS[activeStack].tech.map((t, idx) => (
                <span key={idx} style={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  background: '#FFFFFF',
                  color: 'var(--navy)',
                  border: '1px solid var(--border)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: '0 2px 4px rgba(16,43,92,0.03)'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
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
              <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 12 }}>Ready to Ship?</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: 8 }}>
                Let's Scope Your Startup MVP
              </h2>
              <p style={{ color: '#CBD7E8', fontSize: '0.95rem', margin: 0 }}>
                Get an honest, fixed-scope proposal with exact technical architecture and delivery dates.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ flexShrink: 0 }}>
              Schedule Call with Ashish <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startups;
