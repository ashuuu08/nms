import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  ArrowRight, Code2, Zap, Bot, ShieldCheck,
  CheckCircle2, MapPin, Phone, MessageSquare,
  Users, Star, Check, ArrowUpRight, Building2,
  Clock, ChevronRight, FileText, BarChart3,
  Globe, Smartphone, ShoppingCart, RefreshCw,
  FolderSync, HelpCircle, Sparkles, Laptop,
  TrendingUp, CheckCircle, Search, Layers,
  Activity, ArrowDownRight
} from 'lucide-react';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import { contact, locations, founder, stats } from '../data/siteData';
import './Home.css';

/* ── Interactive Counter with IntersectionObserver ── */
const Counter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (/[a-z+%]/i.test(target)) { el.textContent = target; return; }

    const end = parseFloat(target);
    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * end) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

/* ── “What would you like to improve?” Problem Selector Data ── */
const IMPROVE_OPTIONS = [
  {
    id: 'automate',
    number: '01',
    label: 'I want to automate repetitive tasks',
    icon: Zap,
    tag: 'Workflow & Spreadsheet Automation',
    headline: 'Put Repetitive Spreadsheet Work and Invoicing on Autopilot',
    desc: 'If your team spends hours every day typing numbers between Excel sheets, manually creating PDF bills, or sending repetitive emails, we connect your tools so these tasks happen automatically in seconds without mistakes.',
    deliverables: [
      'Automatic branded PDF invoice creation upon order confirmation',
      'Instant Google Sheets live synchronization with zero manual entry',
      'Automated customer WhatsApp and email dispatch with delivery tracking',
      'Elimination of human typing mistakes, recalculations, and billing disputes',
    ],
    ctaText: 'Explore Workflow Automation',
    ctaLink: '/services/automation',
    sampleOutput: 'Saves 30–40 hours of manual typing every week',
  },
  {
    id: 'digital',
    number: '02',
    label: 'I want to manage my business digitally',
    icon: Laptop,
    tag: 'Operations & Management Systems',
    headline: 'Simple Digital Portals Tailored to Your Everyday Operations',
    desc: 'Stop losing vital business data across paper registers, WhatsApp messages, and scattered notes. We build centralized portals where you and your team can record sales, track inventory, manage customer ledgers, and see daily profits.',
    deliverables: [
      'Role-based logins for staff, accountants, and owners',
      'Real-time inventory and automated low-stock re-order alerts',
      'Customer accounts and pending balance tracking on one screen',
      'Daily profit and performance summaries accessible from any phone',
    ],
    ctaText: 'Explore Business Portals',
    ctaLink: '/solutions/smes',
    sampleOutput: 'Everything in one place · Accessible on any phone or laptop',
  },
  {
    id: 'store',
    number: '03',
    label: 'I need a website or online store',
    icon: ShoppingCart,
    tag: 'Websites & E-Commerce',
    headline: 'Modern, Fast Websites That Convert Visitors into Paying Customers',
    desc: 'Whether you need a trustworthy company website or an online storefront with UPI and credit card checkout, we design mobile-friendly websites that load in under a second and make it simple for customers to discover and buy from you.',
    deliverables: [
      'Clean, mobile-first design tailored to your brand identity',
      'Integrated payment gateways (Razorpay, UPI, Credit/Debit cards)',
      'Easy product and content management without technical headaches',
      'Built-in Google search (SEO) optimization so local customers find you',
    ],
    ctaText: 'Build Your Website',
    ctaLink: '/services/development',
    sampleOutput: 'Average site load speed < 1s · 100% Mobile Ready',
  },
  {
    id: 'institution',
    number: '04',
    label: 'I need software for my school, clinic, or organization',
    icon: Building2,
    tag: 'Institutional Software',
    headline: 'Specialized Management Portals for Schools, Clinics & Services',
    desc: 'Custom-built software designed for real-world organizations. Track student admissions, manage doctor appointments, issue digital receipts, and record staff attendance with simple, easy-to-learn screens.',
    deliverables: [
      'Digital student / patient history and profile records',
      'Automated fee receipts, consultation reminders, and SMS alerts',
      'Attendance tracking and staff scheduling dashboard',
      'Secure, private cloud storage with automated daily backups',
    ],
    ctaText: 'Discuss Organization Software',
    ctaLink: '/contact',
    sampleOutput: 'Customized for your institution · Fast staff training',
  },
  {
    id: 'product',
    number: '05',
    label: 'I want to build a new software product or MVP',
    icon: Code2,
    tag: 'Startups & Product Engineering',
    headline: 'Turn Your Software Idea into a Live, Scalable Product in 4–8 Weeks',
    desc: 'Have a vision for a new digital platform or SaaS service? We work with founders to turn ideas into polished, production-ready applications with clean code that investors respect and can scale to thousands of users.',
    deliverables: [
      'Agile 2-week sprint cycles with live weekly demonstrations',
      'Modern, scalable React and cloud architecture',
      '100% intellectual property and source code ownership handed to you',
      'Complete technical documentation and post-launch stability warranty',
    ],
    ctaText: 'Plan Your Product MVP',
    ctaLink: '/solutions/startups',
    sampleOutput: 'Launch in 4–8 weeks · Built to scale effortlessly',
  },
  {
    id: 'upgrade',
    number: '06',
    label: 'I need to improve or fix existing software',
    icon: RefreshCw,
    tag: 'System Modernization',
    headline: 'Speed Up, Modernize, or Fix Your Current Software Application',
    desc: 'Is your current website or internal software sluggish, crashing, or difficult to update? We inspect your existing code, eliminate bottlenecks, enhance security, and add modern features with zero operational downtime.',
    deliverables: [
      'Comprehensive performance and security audit',
      'Database query optimization and sub-second page speed fixes',
      'Seamless addition of new payment, messaging, or reporting features',
      'Smooth cutover without losing historical records or interrupting staff',
    ],
    ctaText: 'Request a System Audit',
    ctaLink: '/contact',
    sampleOutput: 'Zero-downtime upgrades · Faster load times',
  },
];

/* ── Core Capabilities (Simplified & Benefit-Driven) ── */
const SIMPLIFIED_SERVICES = [
  {
    num: '01',
    title: 'Custom Websites & Online Stores',
    audience: 'For businesses wanting more leads and sales',
    summary: 'Fast, modern, mobile-friendly websites and e-commerce portals equipped with seamless UPI/card payments, customer inquiry forms, and Google search optimization.',
    examples: ['Corporate websites', 'Online storefronts with payments', 'Lead generation landing pages'],
    link: '/services/development',
  },
  {
    num: '02',
    title: 'Google Workspace & Invoicing Automation',
    audience: 'For teams spending hours on repetitive paperwork',
    summary: 'Custom Google Apps Script automations that connect your spreadsheets, emails, and drive. Automatically create PDF invoices, send WhatsApp updates, and sync client records.',
    examples: ['Automated PDF billing', 'Google Sheets CRM sync', 'Trigger-based email dispatch'],
    link: '/services/automation',
  },
  {
    num: '03',
    title: 'Business Management Portals & ERPs',
    audience: 'For growing companies with scattered data',
    summary: 'All-in-one digital portals for tracking inventory, client accounts, sales history, and employee tasks. Designed specifically around your unique daily workflow.',
    examples: ['Inventory & billing systems', 'Clinic appointment portals', 'School administration systems'],
    link: '/solutions/smes',
  },
  {
    num: '04',
    title: 'AI Assistants & Smart Support Bots',
    audience: 'For businesses wanting instant 24/7 customer replies',
    summary: 'Helpful AI assistants trained on your business FAQs and price lists. They answer routine customer inquiries automatically on WhatsApp or your website, freeing up your team.',
    examples: ['WhatsApp business inquiry bots', 'Website FAQ assistants', 'Automated document data extraction'],
    link: '/services/ai',
  },
];

/* ── Realistic Demonstration Architecture Showcase ── */
const DEMO_SHOWCASES = [
  {
    title: 'Order Management & Automated Invoicing Hub',
    demonstrationTag: 'Demonstration Architecture · Retail & Distribution',
    description: 'A connected management portal that combines incoming orders, generates GST invoices automatically, and updates inventory records in real time.',
    benefit: 'Eliminates 5+ hours of manual data entry every single day.',
    keyFeatures: ['Instant PDF invoice generation', 'Google Drive & Sheets live sync', 'WhatsApp receipt dispatch', 'Low-stock automated alerts'],
    link: '/services/development',
  },
  {
    title: 'Multi-Specialty Clinic & Appointment Portal',
    demonstrationTag: 'Demonstration Architecture · Healthcare & Services',
    description: 'A simple, secure portal where patients book appointments, doctors view patient history from their tablets, and consultation reminders are sent automatically.',
    benefit: 'Reduces reception desk queues and missed appointments.',
    keyFeatures: ['Simple mobile booking screen', 'Digital patient consultation notes', 'Automated SMS & WhatsApp reminders', 'Encrypted, private record storage'],
    link: '/solutions/smes',
  },
  {
    title: 'Autonomous Google Workspace Billing Pipeline',
    demonstrationTag: 'Demonstration Architecture · Process Automation',
    description: 'An event-driven script that turns spreadsheet order rows into professional PDF bills and emails them directly to clients within 2 seconds of order closure.',
    benefit: 'Handles 500+ bills daily without a single clerk manually typing data.',
    keyFeatures: ['Trigger-based automation', 'Branded PDF creation', 'Real-time ledger audit log', 'Zero monthly software subscription cost'],
    link: '/services/automation',
  },
];

/* ── Approachable Working Process ── */
const SIMPLE_STEPS = [
  {
    num: '01',
    title: 'Plain-English Consultation',
    desc: 'You tell us what your business does and what challenges you are facing. No technical jargon required — we listen and understand your daily workflow.',
  },
  {
    num: '02',
    title: 'Clear Plan & Fixed Price',
    desc: 'We provide a straightforward proposal outlining what we will build, how it will look, exact completion dates, and a transparent fixed price with zero surprises.',
  },
  {
    num: '03',
    title: 'Regular Previews & Updates',
    desc: 'You see working previews every two weeks. We refine the screens based on your feedback so the final software feels completely natural for you and your staff.',
  },
  {
    num: '04',
    title: 'Launch & 30-Day Support',
    desc: 'We handle setup, train your team, and provide 30 days of dedicated support to ensure everything runs smoothly. You own 100% of the code and assets.',
  },
];

/* ─────────────────────────────────────────────────────────
   HOME COMPONENT (REFINED ART-DIRECTED DIGITAL STUDIO)
──────────────────────────────────────────────────────── */
const Home = () => {
  const [selectedImproveId, setSelectedImproveId] = useState('automate');

  const selectedImprove = IMPROVE_OPTIONS.find((opt) => opt.id === selectedImproveId) || IMPROVE_OPTIONS[0];

  return (
    <div className="home-studio">
      <SEO
        title="AshbitSoft - Software Development Company in Anuppur & Shahdol | IT Solutions"
        description="Leading custom software development company in Anuppur and Shahdol, Madhya Pradesh. High-performance web applications, Google Workspace automation, and ERP solutions."
        keywords="software company Anuppur, software development Shahdol, custom software Madhya Pradesh, IT solutions Anuppur, AshbitSoft, automation services, ERP solutions, web development near me"
        canonical="/"
      />

      {/* ══ 1. ART-DIRECTED HERO SECTION (REFINED ASYMMETRIC SPLIT) ══════ */}
      <section className="studio-hero" aria-labelledby="studio-hero-heading">
        <div className="container">
          <div className="studio-hero__grid">
            {/* Left Content Column */}
            <div className="studio-hero__copy">
              <div className="studio-eyebrow">
                <span className="studio-eyebrow__dot" aria-hidden="true" />
                <span>Ashbit Soft · Digital Product &amp; Automation Studio</span>
              </div>

              <h1 id="studio-hero-heading" className="studio-hero__headline">
                Good ideas deserve <span className="headline-accent">better software.</span>
              </h1>

              <p className="studio-hero__lead">
                We engineer fast websites, custom business management systems, and automated workflows
                that help company owners spend less time on repetitive manual work and more time growing.
              </p>

              <div className="studio-hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Tell Us What You Need <ArrowRight size={16} />
                </Link>
                <a href="#solutions-explorer" className="btn btn-outline btn-lg">
                  Explore Our Work
                </a>
              </div>

              <div className="studio-hero__meta">
                <div className="hero-meta-item">
                  <MapPin size={15} className="text-blue" />
                  <span>Offices in Anuppur (484223) &amp; Shahdol (484001), MP</span>
                </div>
                <div className="hero-meta-divider" aria-hidden="true">·</div>
                <div className="hero-meta-item">
                  <CheckCircle2 size={15} className="text-teal" />
                  <span>100% Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Visual: AshbitSoft Digital Power Network (Animated Flowing Ecosystem) */}
            <div className="studio-hero__showcase">
              <div className="ashbit-network-stage" aria-label="AshbitSoft Digital Power Network: One brand, connected systems, smarter digital experiences">
                {/* Ambient Soft Glow Fields */}
                <div className="network-ambient-glow" aria-hidden="true" />
                
                {/* SVG Digital Power Network */}
                <svg
                  className="ashbit-network-svg"
                  viewBox="0 0 580 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  role="img"
                  aria-label="Interactive digital network illustration"
                >
                  <defs>
                    {/* Glowing Core Radial Aura */}
                    <radialGradient id="net-core-aura" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#12CDEB" stopOpacity="0.32" />
                      <stop offset="45%" stopColor="#155EEF" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#102B5C" stopOpacity="0" />
                    </radialGradient>

                    {/* Gradient Emitters for Energy Streams */}
                    <linearGradient id="stream-tr" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#155EEF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#12CDEB" stopOpacity="1" />
                      <stop offset="100%" stopColor="#16C7B7" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="stream-mr" x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#155EEF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#3B7EFF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#12CDEB" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="stream-br" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#102B5C" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#16C7B7" stopOpacity="1" />
                      <stop offset="100%" stopColor="#12CDEB" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="stream-bl" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#155EEF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#12CDEB" stopOpacity="1" />
                      <stop offset="100%" stopColor="#16C7B7" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="stream-ml" x1="100%" y1="50%" x2="0%" y2="50%">
                      <stop offset="0%" stopColor="#102B5C" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#3B7EFF" stopOpacity="1" />
                      <stop offset="100%" stopColor="#12CDEB" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="stream-tl" x1="100%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#155EEF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#16C7B7" stopOpacity="1" />
                      <stop offset="100%" stopColor="#12CDEB" stopOpacity="0.8" />
                    </linearGradient>

                    {/* Filter for Terminal Node Halos */}
                    <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* ── Layer 1: Ambient Orbit Guides & Resonance Circles ── */}
                  <g className="network-guides" opacity="0.45">
                    <circle cx="270" cy="240" r="95" className="net-guide-circle" strokeDasharray="4 6" />
                    <circle cx="270" cy="240" r="160" className="net-guide-circle" strokeDasharray="6 8" />
                    <circle cx="270" cy="240" r="230" className="net-guide-circle" strokeDasharray="3 7" />
                  </g>

                  {/* ── Layer 2: Base Circuit Tracks (Stationary Foundation) ── */}
                  <g className="network-base-tracks">
                    {/* Path 1: Top-Right (Web & Cloud) */}
                    <path id="track-1" d="M 295 210 C 330 170, 375 130, 440 100 C 475 85, 510 75, 545 68" className="track-base" />
                    <path d="M 375 130 C 410 115, 450 125, 490 145" className="track-base track-base--branch" />

                    {/* Path 2: Mid-Right (Business ERP & Portals) */}
                    <path id="track-2" d="M 315 240 C 365 240, 410 252, 470 248 C 505 245, 535 235, 555 228" className="track-base" />
                    <path d="M 470 248 C 495 270, 520 288, 545 298" className="track-base track-base--branch" />

                    {/* Path 3: Bottom-Right (Automated Pipelines & Drive) */}
                    <path id="track-3" d="M 292 270 C 325 320, 365 375, 430 410 C 465 430, 495 440, 530 448" className="track-base" />
                    <path d="M 365 375 C 400 395, 435 385, 465 375" className="track-base track-base--branch" />

                    {/* Path 4: Bottom-Left (Secure Data Ledger & Cloud) */}
                    <path id="track-4" d="M 245 272 C 215 325, 185 378, 125 415 C 90 435, 60 445, 35 450" className="track-base" />
                    <path d="M 185 378 C 150 398, 115 388, 85 375" className="track-base track-base--branch" />

                    {/* Path 5: Mid-Left (Operations & Invoicing) */}
                    <path id="track-5" d="M 225 240 C 175 240, 135 228, 80 232 C 50 234, 30 240, 15 245" className="track-base" />
                    <path d="M 135 228 C 110 205, 85 190, 60 180" className="track-base track-base--branch" />

                    {/* Path 6: Top-Left (REST APIs & Architecture) */}
                    <path id="track-6" d="M 248 210 C 215 168, 175 125, 115 95 C 80 78, 55 65, 35 58" className="track-base" />
                    <path d="M 175 125 C 140 108, 105 118, 70 135" className="track-base track-base--branch" />
                  </g>

                  {/* ── Layer 3: Active Animated Energy Streams (Moving Outward) ── */}
                  <g className="network-energy-streams">
                    {/* Stream 1 */}
                    <path d="M 295 210 C 330 170, 375 130, 440 100 C 475 85, 510 75, 545 68" className="stream-flow stream-flow--1" stroke="url(#stream-tr)" />
                    {/* Stream 2 */}
                    <path d="M 315 240 C 365 240, 410 252, 470 248 C 505 245, 535 235, 555 228" className="stream-flow stream-flow--2" stroke="url(#stream-mr)" />
                    {/* Stream 3 */}
                    <path d="M 292 270 C 325 320, 365 375, 430 410 C 465 430, 495 440, 530 448" className="stream-flow stream-flow--3" stroke="url(#stream-br)" />
                    {/* Stream 4 */}
                    <path d="M 245 272 C 215 325, 185 378, 125 415 C 90 435, 60 445, 35 450" className="stream-flow stream-flow--4" stroke="url(#stream-bl)" />
                    {/* Stream 5 */}
                    <path d="M 225 240 C 175 240, 135 228, 80 232 C 50 234, 30 240, 15 245" className="stream-flow stream-flow--5" stroke="url(#stream-ml)" />
                    {/* Stream 6 */}
                    <path d="M 248 210 C 215 168, 175 125, 115 95 C 80 78, 55 65, 35 58" className="stream-flow stream-flow--6" stroke="url(#stream-tl)" />
                  </g>

                  {/* ── Layer 4: Leading Traveling Particles ── */}
                  <g className="network-tracers">
                    {/* Tracer 1 */}
                    <circle r="3" className="tracer-dot tracer-dot--cyan">
                      <animateMotion dur="3.6s" repeatCount="indefinite" path="M 295 210 C 330 170, 375 130, 440 100 C 475 85, 510 75, 545 68" keyPoints="0;1" keyTimes="0;1" />
                    </circle>
                    {/* Tracer 2 */}
                    <circle r="3" className="tracer-dot tracer-dot--blue">
                      <animateMotion dur="4.2s" repeatCount="indefinite" begin="0.8s" path="M 315 240 C 365 240, 410 252, 470 248 C 505 245, 535 235, 555 228" keyPoints="0;1" keyTimes="0;1" />
                    </circle>
                    {/* Tracer 3 */}
                    <circle r="3" className="tracer-dot tracer-dot--teal">
                      <animateMotion dur="3.8s" repeatCount="indefinite" begin="1.4s" path="M 292 270 C 325 320, 365 375, 430 410 C 465 430, 495 440, 530 448" keyPoints="0;1" keyTimes="0;1" />
                    </circle>
                    {/* Tracer 4 */}
                    <circle r="3" className="tracer-dot tracer-dot--cyan">
                      <animateMotion dur="4.4s" repeatCount="indefinite" begin="0.4s" path="M 245 272 C 215 325, 185 378, 125 415 C 90 435, 60 445, 35 450" keyPoints="0;1" keyTimes="0;1" />
                    </circle>
                    {/* Tracer 5 */}
                    <circle r="3" className="tracer-dot tracer-dot--blue">
                      <animateMotion dur="3.9s" repeatCount="indefinite" begin="1.9s" path="M 225 240 C 175 240, 135 228, 80 232 C 50 234, 30 240, 15 245" keyPoints="0;1" keyTimes="0;1" />
                    </circle>
                    {/* Tracer 6 */}
                    <circle r="3" className="tracer-dot tracer-dot--teal">
                      <animateMotion dur="4.6s" repeatCount="indefinite" begin="1.1s" path="M 248 210 C 215 168, 175 125, 115 95 C 80 78, 55 65, 35 58" keyPoints="0;1" keyTimes="0;1" />
                    </circle>
                  </g>

                  {/* ── Layer 5: Branch Junction Nodes & Activity Halos ── */}
                  <g className="network-junction-nodes">
                    {/* Junction 1 */}
                    <circle cx="375" cy="130" r="10" className="junction-halo junction-halo--1" />
                    <circle cx="375" cy="130" r="3.5" className="junction-core" />
                    <circle cx="490" cy="145" r="3" className="subnode-core" />
                    <text x="500" y="149" className="subnode-label">Fast API</text>

                    {/* Junction 2 */}
                    <circle cx="470" cy="248" r="10" className="junction-halo junction-halo--2" />
                    <circle cx="470" cy="248" r="3.5" className="junction-core" />
                    <circle cx="545" cy="298" r="3" className="subnode-core" />
                    <text x="502" y="315" className="subnode-label">Role Auth</text>

                    {/* Junction 3 */}
                    <circle cx="365" cy="375" r="10" className="junction-halo junction-halo--3" />
                    <circle cx="365" cy="375" r="3.5" className="junction-core" />
                    <circle cx="465" cy="375" r="3" className="subnode-core" />
                    <text x="475" y="379" className="subnode-label">Webhooks</text>

                    {/* Junction 4 */}
                    <circle cx="185" cy="378" r="10" className="junction-halo junction-halo--4" />
                    <circle cx="185" cy="378" r="3.5" className="junction-core" />
                    <circle cx="85" cy="375" r="3" className="subnode-core" />
                    <text x="32" y="379" className="subnode-label">Audit Log</text>

                    {/* Junction 5 */}
                    <circle cx="135" cy="228" r="10" className="junction-halo junction-halo--5" />
                    <circle cx="135" cy="228" r="3.5" className="junction-core" />
                    <circle cx="60" cy="180" r="3" className="subnode-core" />
                    <text x="12" y="174" className="subnode-label">Data Sync</text>

                    {/* Junction 6 */}
                    <circle cx="175" cy="125" r="10" className="junction-halo junction-halo--6" />
                    <circle cx="175" cy="125" r="3.5" className="junction-core" />
                    <circle cx="70" cy="135" r="3" className="subnode-core" />
                    <text x="22" y="139" className="subnode-label">REST API</text>
                  </g>

                  {/* ── Layer 6: Terminal Nodes & Refined Capability Capsules ── */}
                  <g className="network-terminals">
                    {/* Terminal 1: Web & Cloud UI (Top-Right) */}
                    <g className="terminal-group terminal-group--1" transform="translate(470, 48)">
                      <circle cx="75" cy="20" r="14" className="terminal-pulse-ring" />
                      <circle cx="75" cy="20" r="5" className="terminal-node-dot terminal-node-dot--cyan" />
                      <rect x="0" y="8" width="66" height="24" rx="6" className="terminal-pill-bg" />
                      <circle cx="10" cy="20" r="2.5" fill="#12CDEB" />
                      <text x="18" y="24" className="terminal-pill-text">Web Apps</text>
                    </g>

                    {/* Terminal 2: Business ERP (Mid-Right) */}
                    <g className="terminal-group terminal-group--2" transform="translate(480, 208)">
                      <circle cx="75" cy="20" r="14" className="terminal-pulse-ring" />
                      <circle cx="75" cy="20" r="5" className="terminal-node-dot terminal-node-dot--blue" />
                      <rect x="0" y="8" width="66" height="24" rx="6" className="terminal-pill-bg" />
                      <circle cx="10" cy="20" r="2.5" fill="#155EEF" />
                      <text x="18" y="24" className="terminal-pill-text">Custom ERP</text>
                    </g>

                    {/* Terminal 3: Automation & Invoicing (Bottom-Right) */}
                    <g className="terminal-group terminal-group--3" transform="translate(440, 428)">
                      <circle cx="90" cy="20" r="14" className="terminal-pulse-ring" />
                      <circle cx="90" cy="20" r="5" className="terminal-node-dot terminal-node-dot--teal" />
                      <rect x="0" y="8" width="82" height="24" rx="6" className="terminal-pill-bg" />
                      <circle cx="10" cy="20" r="2.5" fill="#16C7B7" />
                      <text x="18" y="24" className="terminal-pill-text">Auto Invoicing</text>
                    </g>

                    {/* Terminal 4: 100% Code Ownership (Bottom-Left) */}
                    <g className="terminal-group terminal-group--4" transform="translate(18, 430)">
                      <circle cx="17" cy="20" r="14" className="terminal-pulse-ring" />
                      <circle cx="17" cy="20" r="5" className="terminal-node-dot terminal-node-dot--cyan" />
                      <rect x="26" y="8" width="80" height="24" rx="6" className="terminal-pill-bg" />
                      <circle cx="36" cy="20" r="2.5" fill="#12CDEB" />
                      <text x="44" y="24" className="terminal-pill-text">Owned IP</text>
                    </g>

                    {/* Terminal 5: Smart Ledger (Mid-Left) */}
                    <g className="terminal-group terminal-group--5" transform="translate(4, 225)">
                      <circle cx="11" cy="20" r="14" className="terminal-pulse-ring" />
                      <circle cx="11" cy="20" r="5" className="terminal-node-dot terminal-node-dot--blue" />
                      <rect x="20" y="8" width="76" height="24" rx="6" className="terminal-pill-bg" />
                      <circle cx="30" cy="20" r="2.5" fill="#155EEF" />
                      <text x="38" y="24" className="terminal-pill-text">Operations</text>
                    </g>

                    {/* Terminal 6: Clean Code & Security (Top-Left) */}
                    <g className="terminal-group terminal-group--6" transform="translate(20, 38)">
                      <circle cx="15" cy="20" r="14" className="terminal-pulse-ring" />
                      <circle cx="15" cy="20" r="5" className="terminal-node-dot terminal-node-dot--teal" />
                      <rect x="24" y="8" width="76" height="24" rx="6" className="terminal-pill-bg" />
                      <circle cx="34" cy="20" r="2.5" fill="#16C7B7" />
                      <text x="42" y="24" className="terminal-pill-text">Clean Code</text>
                    </g>
                  </g>

                  {/* ── Layer 7: Central Power Core — AshbitSoft Anchor ── */}
                  <g className="network-central-core">
                    {/* Pulsing Aura Emitter Behind Core */}
                    <circle cx="270" cy="240" r="78" fill="url(#net-core-aura)" className="core-aura-pulse" />
                    
                    {/* Geometric Rotating Tech Ring */}
                    <circle cx="270" cy="240" r="58" className="core-perimeter-ring" strokeDasharray="3 5" />
                    <circle cx="270" cy="240" r="50" className="core-inner-ring" strokeDasharray="6 6" />

                    {/* Central Frosted Logo Dock Base */}
                    <circle cx="270" cy="240" r="44" className="core-dock-base" />

                    {/* Authentic AshbitSoft Logo Image */}
                    <image
                      href="/logo.png"
                      x="234"
                      y="204"
                      width="72"
                      height="72"
                      preserveAspectRatio="xMidYMid meet"
                      className="core-logo-graphic"
                    />

                    {/* Micro Emitter Rings on Dock Border */}
                    <circle cx="270" cy="240" r="44" className="core-dock-border" />
                  </g>
                </svg>

                {/* Understated Status Badge Beneath Central Core */}
                <div className="network-core-caption">
                  <span className="net-caption-dot" aria-hidden="true" />
                  <span>One Brand · Connected Systems · Smarter Experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. STREAMLINED PERFORMANCE STATS ══════════════════ */}
      <section className="studio-stats" aria-label="Company numbers and track record">
        <div className="container">
          <div className="studio-stats__grid">
            <div className="studio-stats__item">
              <div className="studio-stats__num">
                <Counter target="50" suffix="+" />
              </div>
              <div className="studio-stats__lbl">Custom Applications &amp; Automations Shipped</div>
            </div>
            <div className="studio-stats__item">
              <div className="studio-stats__num">
                <Counter target="40" suffix="h+" />
              </div>
              <div className="studio-stats__lbl">Average Weekly Hours Saved per Business</div>
            </div>
            <div className="studio-stats__item">
              <div className="studio-stats__num">
                <Counter target="100" suffix="%" />
              </div>
              <div className="studio-stats__lbl">Full Source Code &amp; Asset Handover</div>
            </div>
            <div className="studio-stats__item">
              <div className="studio-stats__num">2</div>
              <div className="studio-stats__lbl">Operating Studios in MP (Anuppur &amp; Shahdol)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. INTERACTIVE “WHAT WOULD YOU LIKE TO IMPROVE?” ══ */}
      <section id="solutions-explorer" className="section section--soft" aria-labelledby="improve-heading">
        <div className="container">
          <header className="studio-section-header text-center">
            <span className="studio-section-eyebrow">Interactive Explorer</span>
            <h2 id="improve-heading" className="studio-section-title">
              What Would You Like to Improve in Your Business?
            </h2>
            <p className="studio-section-desc">
              Select your primary operational goal. You don't need technical knowledge —
              see how Ashbit Soft turns everyday bottlenecks into straightforward digital solutions.
            </p>
          </header>

          <div className="interactive-problem-matrix">
            {/* Left Selection Rail */}
            <div className="problem-nav-rail" role="tablist" aria-label="Operational goals">
              {IMPROVE_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                const isSelected = selectedImproveId === opt.id;
                return (
                  <button
                    key={opt.id}
                    role="tab"
                    aria-selected={isSelected}
                    className={`problem-nav-item ${isSelected ? 'active' : ''}`}
                    onClick={() => setSelectedImproveId(opt.id)}
                  >
                    <span className="nav-item-num">{opt.number}</span>
                    <Icon size={18} className="nav-item-icon" />
                    <span className="nav-item-label">{opt.label}</span>
                    <ChevronRight size={16} className="nav-item-arrow" />
                  </button>
                );
              })}
            </div>

            {/* Right Solution Canvas */}
            <div className="problem-canvas-card">
              <div className="canvas-header-strip">
                <span className="canvas-category-tag">{selectedImprove.tag}</span>
                <span className="canvas-metric-pill">{selectedImprove.sampleOutput}</span>
              </div>

              <h3 className="canvas-solution-title">{selectedImprove.headline}</h3>
              <p className="canvas-solution-desc">{selectedImprove.desc}</p>

              <div className="canvas-deliverables-box">
                <div className="deliverables-heading">What we engineer for you:</div>
                <div className="deliverables-grid">
                  {selectedImprove.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-check-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="canvas-footer-row">
                <div className="canvas-actions">
                  <Link to={selectedImprove.ctaLink} className="btn btn-primary">
                    {selectedImprove.ctaText} <ArrowRight size={15} />
                  </Link>
                  <Link to="/contact" className="btn btn-outline">
                    Schedule Free Scoping Call
                  </Link>
                </div>

                <div className="canvas-trust-note">
                  <ShieldCheck size={16} className="text-blue" />
                  <span>Fixed price quote · 100% code ownership · 30-day warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. “FROM PROBLEM TO SOLUTION” VISUAL TRANSFORMATION ══ */}
      <section className="section" aria-labelledby="transformation-heading">
        <div className="container">
          <header className="studio-section-header text-center">
            <span className="studio-section-eyebrow">The Transformation</span>
            <h2 id="transformation-heading" className="studio-section-title">
              From Daily Operational Frustration to a Connected System
            </h2>
            <p className="studio-section-desc">
              Here is how everyday business operations transform when you replace manual routines with software designed specifically for you.
            </p>
          </header>

          <div className="transformation-dual-display">
            {/* The Manual Struggle */}
            <div className="trans-display-panel trans-display-panel--before">
              <div className="trans-panel-header">
                <span className="trans-status-tag trans-status-tag--before">Without Custom Software</span>
                <h3>The Everyday Manual Struggle</h3>
              </div>
              <ul className="trans-points-list">
                <li>
                  <span className="trans-point-bullet trans-point-bullet--bad">✕</span>
                  <div>
                    <strong>Scattered Records:</strong> Orders, customer phone numbers, and balances lost across paper registers and endless WhatsApp chats.
                  </div>
                </li>
                <li>
                  <span className="trans-point-bullet trans-point-bullet--bad">✕</span>
                  <div>
                    <strong>Hours Spent Typing:</strong> Staff spends 2 to 4 hours every evening calculating bills, copying numbers, and handwriting receipts.
                  </div>
                </li>
                <li>
                  <span className="trans-point-bullet trans-point-bullet--bad">✕</span>
                  <div>
                    <strong>Costly Mistakes:</strong> Miscalculated GST totals, missed customer follow-ups, and unexpected inventory stockouts.
                  </div>
                </li>
                <li>
                  <span className="trans-point-bullet trans-point-bullet--bad">✕</span>
                  <div>
                    <strong>Owner Tied to the Desk:</strong> The business stops moving whenever the owner takes a day off or travels.
                  </div>
                </li>
              </ul>
            </div>

            {/* The Connected System */}
            <div className="trans-display-panel trans-display-panel--after">
              <div className="trans-panel-header">
                <span className="trans-status-tag trans-status-tag--after">With Ashbit Soft</span>
                <h3>The Connected, Automated System</h3>
              </div>
              <ul className="trans-points-list">
                <li>
                  <span className="trans-point-bullet trans-point-bullet--good">✓</span>
                  <div>
                    <strong>One Simple Screen:</strong> All orders, client records, and inventory visible in one secure dashboard on any phone or laptop.
                  </div>
                </li>
                <li>
                  <span className="trans-point-bullet trans-point-bullet--good">✓</span>
                  <div>
                    <strong>Instant Automated Billing:</strong> Orders automatically produce professional PDF bills and dispatch them via WhatsApp and email.
                  </div>
                </li>
                <li>
                  <span className="trans-point-bullet trans-point-bullet--good">✓</span>
                  <div>
                    <strong>Zero Typing Errors:</strong> Numbers sync automatically across accounting, stock, and customer payment histories.
                  </div>
                </li>
                <li>
                  <span className="trans-point-bullet trans-point-bullet--good">✓</span>
                  <div>
                    <strong>Peace of Mind:</strong> Real-time alerts, daily summaries, and automated routines keep operations running smoothly 24/7.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. SIMPLIFIED & SCANNABLE SERVICES (PARALLAX GRID BG) ══ */}
      <section className="section services-parallax-section" aria-labelledby="services-overview-heading">
        <div className="container">
          <header className="studio-section-header">
            <div>
              <span className="studio-section-eyebrow">Our Core Services</span>
              <h2 id="services-overview-heading" className="studio-section-title">
                What Ashbit Soft Can Build For You
              </h2>
            </div>
            <p className="studio-section-desc">
              Practical software solutions built around the exact way you work.
            </p>
          </header>

          <div className="services-editorial-stack">
            {SIMPLIFIED_SERVICES.map((svc) => (
              <div key={svc.num} className="services-editorial-row">
                <div className="svc-num">{svc.num}</div>
                <div className="svc-details">
                  <span className="svc-audience-chip">{svc.audience}</span>
                  <h3 className="svc-title">{svc.title}</h3>
                  <p className="svc-summary">{svc.summary}</p>
                  
                  <div className="svc-deliverables-strip">
                    <span className="strip-title">Typical deliverables:</span>
                    {svc.examples.map((ex, eIdx) => (
                      <span key={eIdx} className="strip-chip">{ex}</span>
                    ))}
                  </div>
                </div>

                <div className="svc-action-cell">
                  <Link to={svc.link} className="btn btn-outline btn-sm">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-36">
            <Link to="/services" className="btn btn-primary">
              View Complete Services Directory <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 6. REALISTIC DEMONSTRATION SHOWCASE (WHAT SOLUTIONS LOOK LIKE) ══ */}
      <section className="section" aria-labelledby="showcase-heading">
        <div className="container">
          <header className="studio-section-header text-center">
            <span className="studio-section-eyebrow">Solution Architecture</span>
            <h2 id="showcase-heading" className="studio-section-title">
              What Finished Solutions Look and Feel Like
            </h2>
            <p className="studio-section-desc">
              Explore demonstration frameworks of our custom business systems. Each system is designed to be intuitive,
              clean, and immediately usable by non-technical staff.
            </p>
          </header>

          <div className="demo-architecture-grid">
            {DEMO_SHOWCASES.map((demo, idx) => (
              <article key={idx} className="demo-architecture-card">
                <span className="demo-arch-tag">{demo.demonstrationTag}</span>
                <h3 className="demo-arch-title">{demo.title}</h3>
                <p className="demo-arch-desc">{demo.description}</p>

                <div className="demo-arch-benefit">
                  <strong>Primary Business Benefit:</strong> {demo.benefit}
                </div>

                <div className="demo-arch-features">
                  {demo.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="demo-arch-feature-item">
                      <Check size={14} className="text-teal" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="demo-arch-action">
                  <Link to={demo.link} className="link-arrow">
                    Explore detailed architecture <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. TRANSPARENT 4-STEP WORKING PROCESS ══════════════ */}
      <section className="section section--soft" aria-labelledby="process-heading">
        <div className="container">
          <header className="studio-section-header text-center">
            <span className="studio-section-eyebrow">How We Work With You</span>
            <h2 id="process-heading" className="studio-section-title">
              A Straightforward Process with Zero Surprises
            </h2>
            <p className="studio-section-desc">
              We make software development simple, transparent, and stress-free. Here is what working with us looks like from day one.
            </p>
          </header>

          <div className="studio-process-grid">
            {SIMPLE_STEPS.map((st) => (
              <div key={st.num} className="studio-process-card">
                <div className="studio-process-num">{st.num}</div>
                <h3 className="studio-process-title">{st.title}</h3>
                <p className="studio-process-desc">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. CLIENT TESTIMONIALS (MARQUEE PRESERVED) ═════════ */}
      <TestimonialsMarquee />

      {/* ══ 9. DUAL REGIONAL HUBS (ANUPPUR & SHAHDOL) ══════════ */}
      <section className="section studio-hubs-band" aria-labelledby="hubs-heading">
        <div className="container">
          <div className="studio-hubs-layout">
            <div className="studio-hubs-intro">
              <span className="studio-hubs-badge">Physical Presence</span>
              <h2 id="hubs-heading" className="studio-hubs-title">
                Offices in Anuppur &amp; Shahdol, Madhya Pradesh
              </h2>
              <p className="studio-hubs-desc">
                We believe in accessible, accountable relationships. With two registered operating studios
                in eastern Madhya Pradesh, our clients enjoy direct face-to-face consultations, local business empathy,
                and round-the-clock technical accountability.
              </p>
              <div className="studio-hubs-founder">
                <strong>Founder Leadership:</strong> Software architect <strong>{founder.name}</strong> directly oversees project design and client delivery from our regional studio.
              </div>
            </div>

            <div className="studio-hubs-cards">
              {locations.map((loc, idx) => (
                <div key={idx} className="studio-hub-card">
                  <div className="hub-card-header">
                    <MapPin size={18} className="text-cyan" />
                    <span className="hub-card-tag">{loc.label} Hub</span>
                  </div>
                  <h3 className="hub-card-city">{loc.city}, {loc.state}</h3>
                  <address className="hub-card-address">
                    {loc.streetAddress}, {loc.district},<br />
                    {loc.state} — PIN <strong>{loc.postalCode}</strong>
                  </address>
                  <div className="hub-card-contact">
                    <a href={`tel:${loc.phone}`} className="hub-phone-link">
                      <Phone size={14} /> {loc.phone}
                    </a>
                    <span className="hub-hours-tag">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. APPROACHABLE FINAL CTA ═════════════════════════ */}
      <section className="section section--alt" aria-labelledby="cta-heading">
        <div className="container">
          <div className="studio-cta-card">
            <div className="studio-cta-copy">
              <span className="studio-section-eyebrow">Initiate a Conversation</span>
              <h2 id="cta-heading" className="studio-cta-title">
                Tell Us What You Need — We Are Here to Help
              </h2>
              <p className="studio-cta-desc">
                Whether you have an exact project specification or just a rough idea of what you want to improve,
                let's talk. We provide honest technical advice and a clear proposal within 24 hours.
              </p>
            </div>

            <div className="studio-cta-actions">
              <a href={`tel:${contact.phoneRaw}`} className="btn btn-outline btn-lg">
                <Phone size={16} /> Call: {contact.phone}
              </a>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Tell Us What You Need <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
