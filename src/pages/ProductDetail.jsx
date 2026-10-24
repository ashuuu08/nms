import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  Store, Users, Tag, BarChart3, ShieldCheck, MessageSquare,
  ArrowRight, CheckCircle2, AlertCircle, Sparkles, Sliders,
  Receipt, ShoppingBag, Send, PhoneCall, HelpCircle, Layers
} from 'lucide-react';
import { products } from '../data/productsData';
import { contact } from '../data/siteData';
import './ProductDetail.css';

const ProductDetail = () => {
  // Use product configuration from productsData.js
  const product = products[0]; // Ashbit RetailCore

  // Early access form state
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    contactValue: '',
    businessType: 'Clothing & Fashion Store',
    message: '',
  });

  const [formSentNotice, setFormSentNotice] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEarlyAccessSubmit = (e) => {
    e.preventDefault();

    // Prepare real email draft to configured support inbox
    const subject = encodeURIComponent(
      `Early Access Request: ${product.name} — ${formData.businessName || formData.name}`
    );
    const body = encodeURIComponent(
      `Hello Ashbit Soft Team,\n\nI am interested in early access for ${product.name}.\n\n` +
      `Name: ${formData.name}\n` +
      `Business Name: ${formData.businessName}\n` +
      `Contact (Email / Mobile): ${formData.contactValue}\n` +
      `Business Type: ${formData.businessType}\n` +
      (formData.message ? `Notes / Requirements: ${formData.message}\n` : '') +
      `\nLooking forward to hearing from you regarding development updates.`
    );

    // Open default mail client with prefilled details
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setFormSentNotice(true);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="product-detail-page">
      <SEO
        title="Retail Management Platform | Coming Soon | Ashbit Soft"
        description="Discover Ashbit Soft's upcoming retail platform for billing, customer purchase history, flexible promotions, and customer-retention insights."
        canonical="/products/retail-management"
      />

      {/* ── Section A: Hero ── */}
      <section className="pd-hero" aria-labelledby="product-detail-hero-heading">
        <div className="container">
          <div className="pd-hero__header">
            <div className="pd-hero__meta">
              <span className="pd-eyebrow-badge">INTRODUCING OUR UPCOMING PRODUCT</span>
              <span className="pd-status-pill">
                <span className="pd-status-pill__dot" aria-hidden="true" />
                {product.status} · Retail Management SaaS
              </span>
            </div>

            <h1 id="product-detail-hero-heading" className="pd-hero__title">
              Billing Is Just the Beginning.<br />Build Better Customer Relationships.
            </h1>

            <p className="pd-hero__desc">
              Manage everyday retail billing while building a better understanding of your customers.
              Our upcoming platform brings sales management, purchase history, flexible promotions,
              and customer-retention tools together in one practical solution.
            </p>

            <div className="pd-hero__actions">
              <button
                type="button"
                onClick={() => scrollToSection('early-access')}
                className="btn btn-primary btn-md"
              >
                Get Early Access <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('capabilities')}
                className="btn btn-outline btn-md"
              >
                Explore Features
              </button>
            </div>

            <div className="pd-hero__note">
              <ShieldCheck size={14} aria-hidden="true" />
              <span>Designed for small and medium retail storefronts. Currently in active development.</span>
            </div>
          </div>

          {/* Illustrative Product Interface Preview (Refined CSS Mockup) */}
          <div className="pd-mockup-wrapper" aria-label="Illustrative product interface mockup">
            <div className="pd-mockup-topbar">
              <div className="pd-mockup-dots" aria-hidden="true">
                <span className="pd-mockup-dot" />
                <span className="pd-mockup-dot" />
                <span className="pd-mockup-dot" />
              </div>
              <div className="pd-mockup-address">
                app.ashbit.in/retail/pos-terminal
              </div>
              <div className="pd-mockup-watermark">
                Illustrative Architecture Preview
              </div>
            </div>

            <div className="pd-mockup-body">
              {/* Mockup Left Navigation */}
              <aside className="pd-mockup-nav" aria-hidden="true">
                <div className="pd-mockup-brand">
                  <Store size={18} color="var(--blue)" />
                  <span>Ashbit RetailCore</span>
                </div>
                <div className="pd-mockup-nav-item pd-mockup-nav-item--active">
                  <Receipt size={15} />
                  <span>Billing Counter</span>
                </div>
                <div className="pd-mockup-nav-item">
                  <Users size={15} />
                  <span>Customer Ledger</span>
                </div>
                <div className="pd-mockup-nav-item">
                  <Tag size={15} />
                  <span>Promotions &amp; Rules</span>
                </div>
                <div className="pd-mockup-nav-item">
                  <BarChart3 size={15} />
                  <span>Sales &amp; Insights</span>
                </div>
              </aside>

              {/* Mockup Center Workspace */}
              <main className="pd-mockup-main" aria-hidden="true">
                <div className="pd-mockup-header-row">
                  <div>
                    <h2 className="pd-mockup-desk-title">Active Counter Sale #1042</h2>
                    <span className="pd-mockup-desk-subtitle">Terminal 01 · Standard Checkout Flow</span>
                  </div>
                  <span className="pd-mockup-status-tag">Draft Mode</span>
                </div>

                <table className="pd-mockup-table">
                  <thead>
                    <tr>
                      <th>Item Description</th>
                      <th>Qty</th>
                      <th>Unit Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Premium Cotton Linen Shirt (Navy / M)</td>
                      <td>2</td>
                      <td>₹1,199</td>
                      <td>₹2,398</td>
                    </tr>
                    <tr>
                      <td>Slim Chino Trousers (Khaki / 32)</td>
                      <td>1</td>
                      <td>₹1,499</td>
                      <td>₹1,499</td>
                    </tr>
                    <tr>
                      <td>Woven Leather Casual Belt</td>
                      <td>1</td>
                      <td>₹599</td>
                      <td>₹599</td>
                    </tr>
                  </tbody>
                </table>
              </main>

              {/* Mockup Right Summary Panel */}
              <aside className="pd-mockup-aside" aria-hidden="true">
                <div className="pd-mockup-aside-title">Customer Relationship</div>
                <div className="pd-mockup-customer-card">
                  <div className="pd-mockup-cust-name">Rajesh Sharma</div>
                  <div className="pd-mockup-cust-sub">+91 98260 ••••• · 4th Visit</div>
                </div>

                <div className="pd-mockup-offer-box">
                  <div className="pd-mockup-offer-title">
                    <Sparkles size={14} /> Repeat Incentive Triggered
                  </div>
                  <div className="pd-mockup-offer-desc">
                    Bill exceeded ₹2,000 threshold. 15% return reward configured for next purchase.
                  </div>
                </div>

                <div className="pd-mockup-total-box">
                  <div className="pd-mockup-total-row">
                    <span>Subtotal</span>
                    <span>₹4,496.00</span>
                  </div>
                  <div className="pd-mockup-total-row">
                    <span>Applicable Tax</span>
                    <span>₹224.80</span>
                  </div>
                  <div className="pd-mockup-total-row pd-mockup-total-row--final">
                    <span>Payable Total</span>
                    <span>₹4,720.80</span>
                  </div>
                  <div className="pd-mockup-btn">Complete Sale &amp; Log Receipt</div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section B: The Problem We Want to Solve ── */}
      <section className="pd-section pd-section--soft" aria-labelledby="problem-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow">The Challenge in Everyday Retail</span>
            <h2 id="problem-heading">A Sale Today. A Reason to Return Tomorrow.</h2>
            <p>
              Many retailers can record a sale, but struggle to turn one-time buyers into returning customers.
              When billing software only tracks transactions, valuable opportunities to build enduring customer loyalty are lost.
            </p>
          </header>

          <div className="pd-problem-grid">
            {product.problemPoints.map((point, index) => (
              <div key={index} className="pd-problem-card">
                <div className="pd-problem-card__icon" aria-hidden="true">
                  <AlertCircle size={22} />
                </div>
                <h3 className="pd-problem-card__title">{point.title}</h3>
                <p className="pd-problem-card__desc">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section C: Our Solution (Planned Capabilities) ── */}
      <section id="capabilities" className="pd-section" aria-labelledby="solution-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow eyebrow--cyan">Planned Solution</span>
            <h2 id="solution-heading">One Platform. A More Connected Retail Workflow.</h2>
            <p>
              We are designing an integrated platform where billing speed meets practical customer intelligence.
              Explore our core planned capabilities currently under active development.
            </p>
          </header>

          <div className="pd-capabilities-grid">
            {product.plannedCapabilities.map((item) => (
              <article key={item.id} className="pd-capability-card">
                <div className="pd-capability-card__header">
                  <span className="pd-capability-card__number">{item.number}</span>
                  <span className="pd-capability-card__badge">Planned Capability</span>
                </div>
                <div className="pd-capability-card__icon">
                  {item.id === 'billing' && <Receipt size={22} />}
                  {item.id === 'history' && <Users size={22} />}
                  {item.id === 'promotions' && <Tag size={22} />}
                  {item.id === 'loyalty' && <Sparkles size={22} />}
                  {item.id === 'insights' && <BarChart3 size={22} />}
                  {item.id === 'engagement' && <MessageSquare size={22} />}
                </div>
                <h3 className="pd-capability-card__title">{item.title}</h3>
                <p className="pd-capability-card__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section D: Show a Practical Example ── */}
      <section className="pd-section pd-section--soft" aria-labelledby="example-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow">Interactive Concept</span>
            <h2 id="example-heading">Promotions That Fit Your Business</h2>
            <p>
              A retailer could configure a special offer for purchases above a chosen amount,
              then review how many eligible customers redeemed it and whether they returned for another purchase.
            </p>
          </header>

          <div className="pd-example-layout">
            <div className="pd-example-intro">
              <p className="pd-example-intro__quote">
                “Set threshold rules that respect your margins, motivate higher basket sizes, and track return visits with transparency.”
              </p>
            </div>

            <div className="pd-example-cards-grid">
              {product.illustrativeExamples.map((ex, index) => (
                <div key={index} className="pd-threshold-card">
                  <div className="pd-threshold-card__header">
                    <span className="pd-threshold-tag">Tier {index + 1} Threshold</span>
                    <Sliders size={16} color="var(--blue)" aria-hidden="true" />
                  </div>
                  <h3 className="pd-threshold-title">{ex.threshold}</h3>
                  <div className="pd-threshold-offer">{ex.offer}</div>
                  <p className="pd-threshold-note">{ex.note}</p>
                </div>
              ))}
            </div>

            <p className="pd-example-disclaimer">
              <strong>Illustrative example only:</strong> The threshold amounts and discount percentages shown above are for illustrative purposes and do not represent recommended business defaults. Actual promotional rules, eligibility tiers, and discount policies will be fully configured by the business owner based on individual profit margins and retail strategy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section E: Who Is It For? ── */}
      <section className="pd-section" aria-labelledby="audience-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow">Audience &amp; Fit</span>
            <h2 id="audience-heading">Designed for Growing Retail Businesses</h2>
            <p>
              Our initial roadmap focuses on independent storefronts and multi-counter retail establishments seeking organized billing and customer retention.
            </p>
          </header>

          <div className="pd-audience-grid">
            {product.targetAudiences.map((aud, index) => (
              <div key={index} className="pd-audience-card">
                <div className="pd-audience-card__icon" aria-hidden="true">
                  {index === 0 && <ShoppingBag size={22} />}
                  {index === 1 && <Store size={22} />}
                  {index === 2 && <Layers size={22} />}
                </div>
                <h3 className="pd-audience-card__title">{aud.title}</h3>
                <p className="pd-audience-card__desc">{aud.desc}</p>
              </div>
            ))}
          </div>

          <p className="pd-audience-note">
            <em>Note:</em> The initial product focus may be narrower upon first release. Specific industry integrations and supported category templates will be confirmed closer to the initial rollout.
          </p>
        </div>
      </section>

      {/* ── Section F: Why This Product Is Different ── */}
      <section className="pd-section pd-section--navy" aria-labelledby="differentiators-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow eyebrow--cyan">Our Product Philosophy</span>
            <h2 id="differentiators-heading">Beyond Recording Transactions</h2>
            <p>
              Traditional billing software helps retailers record what happened in the past.
              Our goal is to help them understand customer behavior, create thoughtful promotions,
              and learn which efforts encourage customers to return.
            </p>
          </header>

          <div className="pd-diff-grid">
            {product.differentiators.map((diff, index) => (
              <div key={index} className="pd-diff-card">
                <div className="pd-diff-card__icon" aria-hidden="true">
                  {index === 0 && <Receipt size={22} />}
                  {index === 1 && <Users size={22} />}
                  {index === 2 && <BarChart3 size={22} />}
                </div>
                <h3 className="pd-diff-card__title">{diff.title}</h3>
                <p className="pd-diff-card__desc">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section G: Coming Soon / Early Access Form ── */}
      <section id="early-access" className="pd-section pd-section--soft" aria-labelledby="early-access-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow eyebrow--cyan">Early Access</span>
            <h2 id="early-access-heading">Be Among the First to Explore It</h2>
            <p>
              We're developing a practical retail platform with a focus on everyday billing and long-term customer relationships.
              If you're a retailer interested in trying it, we'd love to hear from you.
            </p>
          </header>

          <div className="pd-early-access-wrap">
            {formSentNotice ? (
              <div className="text-center" style={{ padding: '20px 0' }}>
                <CheckCircle2 size={44} color="#15803D" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--navy)', marginBottom: '8px' }}>
                  Thank you for your interest!
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', maxWidth: '520px', margin: '0 auto 20px' }}>
                  Your inquiry draft was opened with our engineering team at <strong>{contact.email}</strong>.
                  We review early access requests as development milestones are completed.
                </p>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setFormSentNotice(false)}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEarlyAccessSubmit} className="pd-form-grid">
                <div className="pd-form-row">
                  <div className="pd-form-group">
                    <label htmlFor="ea-name">Your Full Name *</label>
                    <input
                      id="ea-name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Vikram Verma"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="pd-form-group">
                    <label htmlFor="ea-business">Business / Store Name *</label>
                    <input
                      id="ea-business"
                      name="businessName"
                      type="text"
                      required
                      placeholder="e.g. Verma Apparels"
                      value={formData.businessName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="pd-form-row">
                  <div className="pd-form-group">
                    <label htmlFor="ea-contact">Work Email or Mobile Number *</label>
                    <input
                      id="ea-contact"
                      name="contactValue"
                      type="text"
                      required
                      placeholder="vikram@store.com or +91 98..."
                      value={formData.contactValue}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="pd-form-group">
                    <label htmlFor="ea-type">Business Type *</label>
                    <select
                      id="ea-type"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                    >
                      <option value="Clothing & Fashion Store">Clothing &amp; Fashion Store</option>
                      <option value="Footwear & Accessories Retailer">Footwear &amp; Accessories Retailer</option>
                      <option value="General Store / Mini-Mart">General Store / Mini-Mart</option>
                      <option value="Electronics & Appliances">Electronics &amp; Appliances</option>
                      <option value="Other Retail Business">Other Retail Business</option>
                    </select>
                  </div>
                </div>

                <div className="pd-form-group">
                  <label htmlFor="ea-message">Optional Message or Specific Requirements</label>
                  <textarea
                    id="ea-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your current billing setup or what features you would find most helpful..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <p className="pd-form-privacy">
                  <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
                  <strong>Privacy Notice:</strong> Your contact information is collected solely to evaluate early-access requirements and send pertinent product launch notices. We respect your privacy and never sell or share your information.
                </p>

                <div className="pd-form-actions">
                  <button type="submit" className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Request Early Access
                  </button>
                </div>

                <div className="pd-form-channel-options">
                  <span>Prefer another channel?</span>
                  <Link to="/contact" className="pd-channel-link">
                    Standard Contact Page
                  </Link>
                  <span>·</span>
                  <a
                    href={`https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent('Hi Ashbit Soft team, I would like to inquire about early access for Ashbit RetailCore.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-channel-link"
                  >
                    WhatsApp Inquiry
                  </a>
                  <span>·</span>
                  <a href={`tel:${contact.phoneRaw}`} className="pd-channel-link">
                    Call: {contact.phone}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Section H: FAQ ── */}
      <section className="pd-section" aria-labelledby="faq-heading">
        <div className="container">
          <header className="pd-section-header">
            <span className="eyebrow">Got Questions?</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <p>
              Straightforward answers about our product status, intended scope, and how early access works.
            </p>
          </header>

          <div className="pd-faq-list">
            {product.faqs.map((faq, index) => (
              <div key={index} className="pd-faq-item">
                <h3 className="pd-faq-question">
                  <span className="pd-faq-question-bullet" aria-hidden="true" />
                  {faq.q}
                </h3>
                <p className="pd-faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
