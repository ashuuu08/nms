import { useState } from 'react';
import SEO from '../components/SEO';
import {
  Phone, Mail, MapPin, MessageSquare, Clock,
  Send, CheckCircle2, ShieldCheck, ArrowRight
} from 'lucide-react';
import { contact, locations } from '../data/siteData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Stack Web Development',
    budget: '₹50,000 – ₹1,50,000',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission or direct to mailto/whatsapp
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact AshbitSoft | Hire Software Developers in MP, India"
        description="Get in touch with AshbitSoft for a free technical consultation. Offices in Anuppur (484223) and Shahdol (484001), Madhya Pradesh."
        canonical="/contact"
      />

      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Get in Touch</span>
          <h1 className="display-lg text-white mt-16">
            Let's Build Something<br />Exceptional Together
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Complimentary technical consultation and architecture scoping. We reply within 24 business hours with honest feedback and clear milestone estimates.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success-card">
                  <div className="contact-success-icon">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2>Message Received!</h2>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Our engineering team has received your inquiry and will reach out to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Full-Stack Web Development',
                        budget: '₹50,000 – ₹1,50,000',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__header">
                    <h3>Project Inquiry Form</h3>
                    <p>Fill out the details below to receive a detailed technical proposal.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ashish Kumar"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 96912 07533"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Primary Requirement *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Full-Stack Web Development">Full-Stack Web &amp; MERN App</option>
                        <option value="Google Apps Script Automation">Workflow &amp; Google Apps Script Automation</option>
                        <option value="AI Chatbot & OpenAI API">AI Chatbot &amp; OpenAI Integration</option>
                        <option value="Mobile App Development">Mobile App (iOS / Android)</option>
                        <option value="Enterprise Java Spring Boot">Java Spring Boot Enterprise System</option>
                        <option value="Digital Marketing & SEO">Digital Marketing &amp; Technical SEO</option>
                        <option value="Other Consulting">Other Technical Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget Scope</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="Under ₹50,000">Under ₹50,000 (Small script / automation)</option>
                      <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000 (Standard MVP / web app)</option>
                      <option value="₹1,50,000 – ₹3,50,000">₹1,50,000 – ₹3,50,000 (Full-scale custom portal)</option>
                      <option value="₹3,50,000+">₹3,50,000+ (Enterprise / dedicated engineering)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Description &amp; Goals *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about the application you need, key features, target timelines, or existing roadblocks..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form__trust">
                    <ShieldCheck size={16} />
                    <span>Strict NDA protection. Your ideas &amp; data remain strictly confidential.</span>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={loading}>
                    {loading ? 'Sending Request...' : 'Send Project Inquiry'} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Details Column */}
            <div className="contact-details-wrap">
              <div className="contact-card">
                <h3>Direct Contact</h3>
                <p>Feel free to reach out directly via call, email, or WhatsApp for urgent inquiries.</p>

                <div className="contact-items">
                  <a href={`tel:${contact.phoneRaw}`} className="contact-item">
                    <div className="contact-item__icon">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="contact-item__label">Phone Call</div>
                      <div className="contact-item__val">{contact.phone}</div>
                    </div>
                  </a>

                  <a href={`https://wa.me/${contact.whatsappRaw}?text=Hi%20AshbitSoft%20team,%20I'd%20like%20to%20discuss%20a%20project.`} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <div className="contact-item__icon" style={{ color: '#25D366', background: 'rgba(37,211,102,0.1)' }}>
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="contact-item__label">WhatsApp Chat</div>
                      <div className="contact-item__val">+91 96912 07533 (Instant Response)</div>
                    </div>
                  </a>

                  <a href={`mailto:${contact.email}`} className="contact-item">
                    <div className="contact-item__icon">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="contact-item__label">Email Inquiries</div>
                      <div className="contact-item__val">{contact.email}</div>
                    </div>
                  </a>

                  <div className="contact-item">
                    <div className="contact-item__icon">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="contact-item__label">Operating Hours</div>
                      <div className="contact-item__val">{contact.hours} (Mon – Sat)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dual Location NAP Cards */}
              <div className="contact-locations">
                <h4>Registered Operating Hubs</h4>
                <div className="locations-stack">
                  {locations.map((loc, i) => (
                    <div key={i} className="location-box">
                      <div className="location-box__title">
                        <MapPin size={16} className="text-blue" />
                        <strong>{loc.label} Hub</strong>
                      </div>
                      <address className="location-box__address">
                        {loc.streetAddress}, {loc.district},<br />
                        {loc.state} — Pin {loc.postalCode}, India
                      </address>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
