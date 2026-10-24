import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Layers, ShoppingCart, Activity, Factory, Briefcase,
  Truck, Rocket, CheckCircle2, XCircle, ArrowRight,
  ShieldCheck, Clock, Zap, Database, Cpu, MessageSquare,
  Smartphone, FileText, ChevronRight, HelpCircle, Users,
  BarChart3, RefreshCw, Send, Check
} from 'lucide-react';
import './Solutions.css';

/* ── Interactive Simulator Scenarios ── */
const SIMULATOR_SCENARIOS = [
  {
    id: 'billing',
    tabTitle: 'Order & WhatsApp Billing',
    tabMeta: 'Retail, Wholesale & FMCG',
    icon: ShoppingCart,
    tag: 'Retail & Distribution Suite',
    headline: 'Instant Order-to-WhatsApp GST Invoicing',
    address: 'billing.ashbitsoft.com/orders/new',
    actionText: 'Dispatch WhatsApp PDF Invoice',
    actionSuccess: '✓ Invoice #AB-842 dispatched via WhatsApp with UPI QR in 0.8s',
    metrics: [
      { val: '90 Sec', lbl: 'Average Billing Cycle' },
      { val: '0%', lbl: 'Inventory Discrepancy' },
      { val: '₹0', lbl: 'Monthly Per-User SaaS Fees' },
    ],
    flow: [
      'Customer Order Placed',
      'Barcode / SKU Auto-Detect',
      'Warehouse Stock Deducted',
      'Instant WhatsApp PDF',
      'Ledger Updated'
    ],
    tech: ['React Fast UI', 'Node.js API', 'WhatsApp Cloud API', 'PostgreSQL'],
  },
  {
    id: 'clinic',
    tabTitle: 'Clinic Queue & Patient EMR',
    tabMeta: 'Doctors, Clinics & Labs',
    icon: Activity,
    tag: 'Healthcare Operations',
    headline: 'Live OPD Queue & 1-Click Digital Prescriptions',
    address: 'clinic.ashbitsoft.com/reception/queue',
    actionText: 'Call Next Token & Send SMS',
    actionSuccess: '✓ Token #14 called to Doctor Cabin 1. SMS alert sent to patient.',
    metrics: [
      { val: '< 5%', lbl: 'Appointment No-Shows' },
      { val: '30 Sec', lbl: 'Rx Creation Speed' },
      { val: '100%', lbl: 'DPDP Privacy Compliant' },
    ],
    flow: [
      'Patient Check-In',
      'Live TV Token Display',
      'Doctor Tablet Prescription',
      'Pharmacy Auto-Forward',
      'WhatsApp Rx Sent'
    ],
    tech: ['React Web PWA', 'Express.js', 'PostgreSQL', 'Fast2SMS Gateway'],
  },
  {
    id: 'manufacturing',
    tabTitle: 'Shop-Floor Job Card ERP',
    tabMeta: 'Factories & Workshops',
    icon: Factory,
    tag: 'Industrial Operations',
    headline: 'Real-Time Batch Costing & Machine Stage Tracking',
    address: 'factory.ashbitsoft.com/production/floor',
    actionText: 'Complete Cutting Stage & Move to Assembly',
    actionSuccess: '✓ Stage completed by Operator Rahul. Bill of materials auto-deducted.',
    metrics: [
      { val: '100%', lbl: 'Floor Transparency' },
      { val: '0 Hours', lbl: 'Delayed Dispatch Surprises' },
      { val: 'Exact', lbl: 'Unit Profit Margin Known' },
    ],
    flow: [
      'Raw Material Logged',
      'Job Card Barcode Scanned',
      'Stage Labor Logged',
      'Quality Check Sign-off',
      'Finished Batch Cost'
    ],
    tech: ['Vite + React', 'NestJS Backend', 'PostgreSQL', 'Thermal Barcode Sync'],
  },
  {
    id: 'agency',
    tabTitle: 'Client Portal & Billing',
    tabMeta: 'Consultancies & Agencies',
    icon: Briefcase,
    tag: 'B2B Services Hub',
    headline: 'Branded Client Workspace with Milestone Approval',
    address: 'portal.yourbrand.com/projects/active',
    actionText: 'Approve Deliverable & Unlock Milestone',
    actionSuccess: '✓ Deliverable signed off. Razorpay tax invoice generated & emailed.',
    metrics: [
      { val: '75%', lbl: 'Fewer Status Calls' },
      { val: '3x', lbl: 'Faster Payment Approvals' },
      { val: '100%', lbl: 'Branded to Your Domain' },
    ],
    flow: [
      'Secure Client Login',
      'Milestone Deliverables',
      'One-Click Approval',
      'Automated Tax Invoice',
      'Razorpay Payment Link'
    ],
    tech: ['Next.js React', 'Node.js', 'PostgreSQL', 'Razorpay Webhooks'],
  },
  {
    id: 'logistics',
    tabTitle: 'Field Route & GPS Fleet',
    tabMeta: 'Logistics & Delivery',
    icon: Truck,
    tag: 'Field Operations',
    headline: 'Offline-First Driver App with Photo Proof of Delivery',
    address: 'fleet.ashbitsoft.com/dispatch/live',
    actionText: 'Upload Drop-off Signature & Photo',
    actionSuccess: '✓ Geo-stamp GPS matched. Delivery confirmed & customer notified via SMS.',
    metrics: [
      { val: '0', lbl: 'Disputed Delivery Claims' },
      { val: 'Offline', lbl: 'Works Without Cellular' },
      { val: '22%', lbl: 'Fuel Route Savings' },
    ],
    flow: [
      'Driver Dispatched',
      'Offline Drop-Off Log',
      'Photo & E-Signature',
      'GPS Timestamp Verified',
      'Central Dispatch Updated'
    ],
    tech: ['Mobile PWA', 'Offline SQLite Sync', 'Google Maps API', 'AWS S3'],
  },
];

/* ── Compact Cards for the 6 Core Solutions ── */
const SOLUTIONS_DIRECTORY = [
  {
    title: 'Order Management & GST Billing',
    industry: 'Retail & Wholesale',
    desc: 'Eliminate manual billing errors. Print GST invoices in seconds and dispatch PDF receipts via WhatsApp automatically.',
    pills: ['WhatsApp Invoicing', 'Barcode Scanner', 'Stock Alert', 'Ledger Sync'],
    time: '3–5 Weeks',
    accent: '#155EEF',
    icon: ShoppingCart,
  },
  {
    title: 'Clinic OPD Queue & EMR Suite',
    industry: 'Healthcare & Diagnostics',
    desc: 'Live TV token queue manager, digital prescription generator, and automated appointment reminders on WhatsApp.',
    pills: ['TV Token Display', 'Digital Rx', 'Patient History', 'Doctor Billing'],
    time: '4–6 Weeks',
    accent: '#12CDEB',
    icon: Activity,
  },
  {
    title: 'Manufacturing Job-Shop ERP',
    industry: 'Workshops & Factories',
    desc: 'Track shop-floor stages, multi-level bill of materials (BOM), raw material deductions, and precise batch profit margins.',
    pills: ['Job-Card Scan', 'Raw Material BOM', 'Scrap Tracking', 'Batch Costing'],
    time: '5–8 Weeks',
    accent: '#F79009',
    icon: Factory,
  },
  {
    title: 'B2B Client Portal & Lifecycle Suite',
    industry: 'Agencies & Consultancies',
    desc: 'Give clients a dedicated, branded workspace to review progress, approve deliverables, and pay invoices online.',
    pills: ['Client Login', 'Milestone Pay', 'Document Vault', 'Audit Log'],
    time: '3–5 Weeks',
    accent: '#7A5AF8',
    icon: Briefcase,
  },
  {
    title: 'Field Fleet & Route Dispatch',
    industry: 'Logistics & Field Ops',
    desc: 'Offline mobile PWA for drivers with digital signatures, camera proof-of-delivery, and automated GPS geo-timestamping.',
    pills: ['Offline PWA', 'Photo POD', 'GPS Stamp', 'Route Map'],
    time: '4–6 Weeks',
    accent: '#16C7B7',
    icon: Truck,
  },
  {
    title: 'Rapid MVP Startup Sprint',
    industry: 'Startups & Founders',
    desc: 'Turn your idea into a production-ready, investor-grade web or mobile app in 4 to 8 weeks with 100% source code ownership.',
    pills: ['Full-Stack React', 'Fast APIs', 'Payment Auth', '100% Owned IP'],
    time: '4–8 Weeks',
    accent: '#EE46BC',
    icon: Rocket,
  },
];

const Solutions = () => {
  const [activeScenarioId, setActiveScenarioId] = useState('billing');
  const [actionTriggered, setActionTriggered] = useState(false);
  const [baMode, setBaMode] = useState('good'); // 'bad' or 'good'

  // ROI Calculator State
  const [dailyHours, setDailyHours] = useState(3);
  const [teamSize, setTeamSize] = useState(6);

  const activeScenario = SIMULATOR_SCENARIOS.find(s => s.id === activeScenarioId) || SIMULATOR_SCENARIOS[0];

  const handleSimulateAction = () => {
    setActionTriggered(true);
    setTimeout(() => setActionTriggered(false), 4500);
  };

  // Calculate ROI
  const weeklyHoursSaved = Math.round(dailyHours * teamSize * 0.75 * 5);

  return (
    <div className="solutions-page">
      <SEO
        title="Custom Business Software Solutions | AshbitSoft"
        description="Visual, practical business software engineered for real workflows. 100% owned source code, zero SaaS user licenses, and local MP support."
        canonical="/solutions"
      />

      {/* ══ 1. HERO VISUAL ══ */}
      <section className="solutions-hero" aria-labelledby="sol-hero-heading">
        <div className="container">
          <div className="solutions-hero__inner">
            <span className="solutions-hero__badge">
              <Layers size={14} />
              Turnkey Business Software Systems
            </span>

            <h1 id="sol-hero-heading" className="solutions-hero__title">
              Software Engineered Exactly for How Your Business Actually Works
            </h1>

            <p className="solutions-hero__desc">
              Tired of rigid spreadsheets and expensive monthly SaaS fees? We build bespoke, 
              lightning-fast software solutions tailored directly around your staff's real everyday routine.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href="#simulator" className="btn btn-primary btn-lg">
                Try Interactive System Simulator <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
                Request Custom Blueprint
              </Link>
            </div>

            <div className="solutions-hero__stats-strip">
              <div className="hero-stat-box">
                <span className="val">100%</span>
                <span className="lbl">Source Code Ownership</span>
              </div>
              <div className="hero-stat-box">
                <span className="val">₹0</span>
                <span className="lbl">Monthly Per-User Fees</span>
              </div>
              <div className="hero-stat-box">
                <span className="val">3–6 Wks</span>
                <span className="lbl">Typical Delivery Sprint</span>
              </div>
              <div className="hero-stat-box">
                <span className="val">Direct</span>
                <span className="lbl">Engineer Access in MP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. INTERACTIVE LIVE SOFTWARE SIMULATOR ══ */}
      <section id="simulator" className="solution-simulator-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 700, margin: '0 auto 40px' }}>
            <span className="eyebrow eyebrow--navy">Interactive Preview</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', fontWeight: 800, marginTop: 10, marginBottom: 12 }}>
              See How Your Workflow Looks in Action
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6 }}>
              Click any business solution below to preview the live simulated interface, test automated workflows, and inspect the real system architecture.
            </p>
          </div>

          <div className="simulator-container">
            {/* Left Selector Rail */}
            <div className="simulator-rail" role="tablist" aria-label="Solution Simulator Scenarios">
              {SIMULATOR_SCENARIOS.map((sc) => {
                const Icon = sc.icon;
                const isActive = sc.id === activeScenarioId;
                return (
                  <button
                    key={sc.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`simulator-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveScenarioId(sc.id);
                      setActionTriggered(false);
                    }}
                  >
                    <div className="tab-icon">
                      <Icon size={20} />
                    </div>
                    <div className="tab-info">
                      <div className="tab-title">{sc.tabTitle}</div>
                      <div className="tab-meta">{sc.tabMeta}</div>
                    </div>
                    <ChevronRight size={16} style={{ color: isActive ? '#FFFFFF' : '#8E9BAD', flexShrink: 0 }} />
                  </button>
                );
              })}
            </div>

            {/* Right Realistic Simulated Dashboard Screen */}
            <div className="simulator-screen">
              {/* Chrome Top Bar */}
              <div className="simulator-screen__header">
                <div className="screen-controls">
                  <span className="control-dot control-dot--red" />
                  <span className="control-dot control-dot--yellow" />
                  <span className="control-dot control-dot--green" />
                </div>
                <div className="screen-address-bar">
                  <span>🔒 https://{activeScenario.address}</span>
                </div>
                <div className="screen-live-status">
                  <span className="pulse-indicator" />
                  <span>100% Operational</span>
                </div>
              </div>

              {/* Screen Body */}
              <div className="simulator-screen__body">
                <div className="screen-top-banner">
                  <div>
                    <span className="screen-solution-tag">{activeScenario.tag}</span>
                    <h3 className="screen-headline">{activeScenario.headline}</h3>
                  </div>
                </div>

                {/* Interactive Action Test Bar */}
                <div className="screen-action-row">
                  <button className="screen-action-btn" onClick={handleSimulateAction}>
                    <Zap size={14} /> {activeScenario.actionText}
                  </button>
                  {actionTriggered && (
                    <span className="screen-action-feedback">
                      {activeScenario.actionSuccess}
                    </span>
                  )}
                  {!actionTriggered && (
                    <span style={{ fontSize: '0.78125rem', color: '#8E9BAD' }}>
                      ← Click to test real automated system trigger
                    </span>
                  )}
                </div>

                {/* Live Metrics */}
                <div className="screen-metrics-grid">
                  {activeScenario.metrics.map((m, idx) => (
                    <div key={idx} className="sim-metric-card">
                      <div className="sim-metric-val">{m.val}</div>
                      <div className="sim-metric-lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>

                {/* Visual Pipeline Chain */}
                <div className="screen-flowchain">
                  <div className="flowchain-title">Automated Event Pipeline:</div>
                  <div className="flowchain-steps">
                    {activeScenario.flow.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className={`flow-step-bubble ${idx === 3 ? 'highlight' : ''}`}>
                          <CheckCircle2 size={13} style={{ color: 'var(--cyan)' }} />
                          <span>{step}</span>
                        </div>
                        {idx < activeScenario.flow.length - 1 && (
                          <span className="flow-arrow">➔</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Screen Footer */}
              <div className="simulator-screen__footer">
                <div className="screen-tech-row">
                  <span style={{ fontSize: '0.6875rem', color: '#8E9BAD', marginRight: 4 }}>Engineered with:</span>
                  {activeScenario.tech.map((t, idx) => (
                    <span key={idx} className="screen-tech-tag">{t}</span>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary btn-sm">
                  Build This For Your Team <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. VISUAL BEFORE VS AFTER SWITCHER ══ */}
      <section className="before-after-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 700, margin: '0 auto 32px' }}>
            <span className="eyebrow eyebrow--navy">The Contrast</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', fontWeight: 800, marginTop: 10, marginBottom: 12 }}>
              Why Businesses Switch from Manual Routines
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6 }}>
              Compare everyday operational headaches against a cohesive, custom-built Ashbit system.
            </p>
          </div>

          <div className="ba-toggle-wrapper">
            <button
              className={`ba-toggle-btn ba-toggle-btn--bad ${baMode === 'bad' ? 'active' : ''}`}
              onClick={() => setBaMode('bad')}
            >
              <XCircle size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'text-bottom' }} />
              The Everyday Manual Chaos
            </button>
            <button
              className={`ba-toggle-btn ba-toggle-btn--good ${baMode === 'good' ? 'active' : ''}`}
              onClick={() => setBaMode('good')}
            >
              <CheckCircle2 size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'text-bottom' }} />
              With Ashbit Soft Custom System
            </button>
          </div>

          <div className="ba-cards-grid">
            {baMode === 'bad' ? (
              <>
                <div className="ba-card ba-card--bad">
                  <div className="ba-card__icon">
                    <XCircle size={24} />
                  </div>
                  <h3 className="ba-card__title">Scattered Paper Registers &amp; WhatsApp Chats</h3>
                  <p className="ba-card__desc">
                    Customer orders, phone numbers, and balances get lost across notebook margins and personal staff WhatsApp chats. Impossible to search or audit.
                  </p>
                </div>

                <div className="ba-card ba-card--bad">
                  <div className="ba-card__icon">
                    <Clock size={24} />
                  </div>
                  <h3 className="ba-card__title">3+ Hours Wasted on Handwriting Bills Daily</h3>
                  <p className="ba-card__desc">
                    Staff spends their entire evening manually recalculating GST, handwriting receipts, and typing numbers into Excel, leading to costly math errors.
                  </p>
                </div>

                <div className="ba-card ba-card--bad">
                  <div className="ba-card__icon">
                    <HelpCircle size={24} />
                  </div>
                  <h3 className="ba-card__title">Owner Tied Down 24/7 with Zero Freedom</h3>
                  <p className="ba-card__desc">
                    The owner cannot take a single day off without the entire business stalling because every critical price quote and approval sits only in their head.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="ba-card ba-card--good">
                  <div className="ba-card__icon">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="ba-card__title">One Unified Screen on Any Phone or Laptop</h3>
                  <p className="ba-card__desc">
                    Every order, customer payment history, and stock level is instantly searchable from anywhere with strict role-based access for staff.
                  </p>
                </div>

                <div className="ba-card ba-card--good">
                  <div className="ba-card__icon">
                    <Zap size={24} />
                  </div>
                  <h3 className="ba-card__title">Instant Automated PDF Invoicing via WhatsApp</h3>
                  <p className="ba-card__desc">
                    Orders produce clean, branded tax bills automatically with payment UPI QR codes. Dispatched in under 2 seconds with zero typing mistakes.
                  </p>
                </div>

                <div className="ba-card ba-card--good">
                  <div className="ba-card__icon">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="ba-card__title">Business Runs Smoothly Even When You're Away</h3>
                  <p className="ba-card__desc">
                    Daily P&amp;L summaries, low-stock warnings, and payment reconciliations sync automatically. You hold 100% control with zero daily micromanagement.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══ 4. INTERACTIVE ROI & TIME SAVINGS CALCULATOR ══ */}
      <section className="roi-calculator-section">
        <div className="container">
          <div className="roi-calc-box">
            <div className="text-center" style={{ marginBottom: 32 }}>
              <span className="eyebrow eyebrow--cyan">Instant ROI Feasibility</span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.6vw, 2.2rem)', fontWeight: 800, marginTop: 10, color: '#FFFFFF' }}>
                How Much Time &amp; Capital Could You Save?
              </h2>
            </div>

            <div className="roi-inputs-row">
              <div className="roi-input-group">
                <label>Daily hours your team spends on manual data entry &amp; bills:</label>
                <div className="roi-btn-options">
                  {[2, 3, 5].map(hrs => (
                    <button
                      key={hrs}
                      className={`roi-choice-btn ${dailyHours === hrs ? 'active' : ''}`}
                      onClick={() => setDailyHours(hrs)}
                    >
                      {hrs} Hours
                    </button>
                  ))}
                </div>
              </div>

              <div className="roi-input-group">
                <label>Number of operational staff on your team:</label>
                <div className="roi-btn-options">
                  {[3, 6, 12].map(size => (
                    <button
                      key={size}
                      className={`roi-choice-btn ${teamSize === size ? 'active' : ''}`}
                      onClick={() => setTeamSize(size)}
                    >
                      {size} Staff
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="roi-output-strip">
              <div className="roi-result-metric">
                <div className="num">{weeklyHoursSaved} Hours</div>
                <div className="sub">Staff Hours Saved Weekly</div>
              </div>

              <div className="roi-result-metric">
                <div className="num">100% Owned</div>
                <div className="sub">Zero Monthly Per-User SaaS Fees</div>
              </div>

              <div>
                <Link to="/contact" className="btn btn-primary btn-md">
                  Claim Your Efficiency Blueprint <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. COMPACT VISUAL DIRECTORY (ALL 6 SOLUTIONS) ══ */}
      <section className="solutions-cards-section">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 700, margin: '0 auto 40px' }}>
            <span className="eyebrow eyebrow--navy">Complete Catalog</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', fontWeight: 800, marginTop: 10, marginBottom: 12 }}>
              Explore All Turnkey Solution Blueprints
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6 }}>
              Ready-to-deploy architectural patterns customized to your specific business rules.
            </p>
          </div>

          <div className="solutions-compact-grid">
            {SOLUTIONS_DIRECTORY.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="solution-mini-card"
                  style={{ '--card-accent': card.accent }}
                >
                  <div className="solution-mini-card__top">
                    <div className="solution-mini-card__icon">
                      <Icon size={26} />
                    </div>
                    <span className="solution-mini-card__time">
                      <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                      {card.time}
                    </span>
                  </div>

                  <h3 className="solution-mini-card__title">{card.title}</h3>
                  <p className="solution-mini-card__desc">{card.desc}</p>

                  <div className="solution-mini-card__pills">
                    {card.pills.map((p, pIdx) => (
                      <span key={pIdx} className="pill-item">{p}</span>
                    ))}
                  </div>

                  <Link to="/contact" className="solution-mini-card__btn">
                    Schedule Scoping Call <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 6. STAGE-SPECIFIC AUDIENCE CARDS ══ */}
      <section className="section" style={{ background: '#FFFFFF', padding: '72px 0' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: 700, margin: '0 auto 40px' }}>
            <span className="eyebrow eyebrow--cyan">Tailored Tracks</span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 800, marginTop: 10 }}>
              Specialized Delivery Tracks for Every Stage
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <Link to="/solutions/startups" className="card card--interactive" style={{ padding: 28 }}>
              <Rocket size={30} style={{ color: 'var(--blue)', marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>For Startups &amp; Founders</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 16 }}>
                Fast 4–8 week MVP development sprints to launch your product, validate paying customers, and pitch investors.
              </p>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Explore Startup Track <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/solutions/smes" className="card card--interactive" style={{ padding: 28 }}>
              <Briefcase size={30} style={{ color: 'var(--teal)', marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>For Growing SMEs</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 16 }}>
                Replace fragmented spreadsheets with automated billing, inventory control, and unified operational dashboards.
              </p>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--teal)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Explore SME Track <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/solutions/enterprises" className="card card--interactive" style={{ padding: 28 }}>
              <ShieldCheck size={30} style={{ color: 'var(--cyan)', marginBottom: 14 }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>For Enterprises</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: 16 }}>
                High-security, on-premise or cloud-native digital ecosystems with strict role-based access, audit trails, and zero downtime.
              </p>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--cyan)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                Explore Enterprise Track <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 7. FINAL CALL TO ACTION ══ */}
      <section className="section" style={{ background: 'var(--bg-soft)', paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{
            background: 'linear-gradient(135deg, #091D40 0%, #102B5C 100%)',
            color: '#FFFFFF',
            padding: '52px 44px',
            borderRadius: 'var(--radius-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap'
          }}>
            <div style={{ maxWidth: 600 }}>
              <span className="eyebrow eyebrow--cyan" style={{ marginBottom: 14 }}>Zero-Obligation Consultation</span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: 12 }}>
                Ready to Automate Your Business Routine?
              </h2>
              <p style={{ color: '#CBD7E8', fontSize: '0.984375rem', lineHeight: 1.65, margin: 0 }}>
                Speak directly with Ashish Kumar (Founder &amp; Principal Engineer). We will review your current bottlenecks, diagram a software workflow, and give you an honest fixed-price feasibility quote.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule Discovery Call <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/917697706427" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.25)' }}>
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
