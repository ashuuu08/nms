import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, MessageSquare,
  Linkedin, Github, Twitter, Instagram, Facebook,
  ArrowRight, ExternalLink
} from 'lucide-react';
import { siteConfig, contact, social } from '../data/siteData';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const serviceLinks = [
    { name: 'Full-Stack Development', to: '/services/development' },
    { name: 'Workflow Automation',    to: '/services/automation' },
    { name: 'AI & Chatbot Integration', to: '/services/ai' },
    { name: 'Digital Marketing',     to: '/services/marketing' },
    { name: 'All Services',          to: '/services' },
  ];

  const solutionLinks = [
    { name: 'For Startups',    to: '/solutions/startups' },
    { name: 'For SMEs',        to: '/solutions/smes' },
    { name: 'For Enterprises', to: '/solutions/enterprises' },
    { name: 'Pricing',         to: '/pricing' },
    { name: 'Features',        to: '/features' },
  ];

  const companyLinks = [
    { name: 'About Us',       to: '/company/about' },
    { name: 'Blog',           to: '/blog' },
    { name: 'FAQ',            to: '/company/faq' },
    { name: 'Security Policy',to: '/company/security' },
    { name: 'Privacy Policy', to: '/company/policy' },
  ];

  const socialItems = [
    { Icon: Linkedin,  href: social.linkedin,  label: 'LinkedIn' },
    { Icon: Github,    href: social.github,    label: 'GitHub' },
    { Icon: Twitter,   href: social.twitter,   label: 'Twitter / X' },
    { Icon: Instagram, href: social.instagram, label: 'Instagram' },
    { Icon: Facebook,  href: social.facebook,  label: 'Facebook' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      {/* CTA Strip */}
      <div className="footer-cta">
        <div className="container">
          <div className="footer-cta__inner">
            <div>
              <p className="footer-cta__label">Ready to start?</p>
              <h2 className="footer-cta__heading">
                Let's build something{' '}
                <span className="gradient-text--teal">exceptional</span> together.
              </h2>
            </div>
            <div className="footer-cta__actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="btn btn-ghost btn-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="AshbitSoft">
                <img src="/logo.png" alt={siteConfig.logoAlt} width="40" height="40" />
                <span>Ashbit<span>Soft</span></span>
              </Link>
              <p className="footer-brand__desc">
                A full-cycle software engineering company building scalable web apps,
                workflow automations, and AI integrations for ambitious businesses.
              </p>

              {/* Contact */}
              <address className="footer-contact" aria-label="Contact information">
                <a href={`tel:${contact.phoneRaw}`} className="footer-contact__item">
                  <Phone size={14} aria-hidden="true" />
                  <span>{contact.phone}</span>
                </a>
                <a href={`https://wa.me/${contact.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="footer-contact__item">
                  <MessageSquare size={14} aria-hidden="true" />
                  <span>{contact.whatsapp}</span>
                </a>
                <a href={`mailto:${contact.infoEmail}`} className="footer-contact__item">
                  <Mail size={14} aria-hidden="true" />
                  <span>{contact.infoEmail}</span>
                </a>
              </address>

              {/* Locations */}
              <div className="footer-locations" aria-label="Office locations">
                <div className="footer-location">
                  <MapPin size={13} aria-hidden="true" />
                  <span>
                    <strong>Anuppur</strong>, Madhya Pradesh — 484223
                  </span>
                </div>
                <div className="footer-location">
                  <MapPin size={13} aria-hidden="true" />
                  <span>
                    <strong>Shahdol</strong>, Madhya Pradesh — 484001
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <nav aria-label="Services navigation">
              <h3 className="footer-nav__heading">Services</h3>
              <ul className="footer-nav__list">
                {serviceLinks.map(l => (
                  <li key={l.name}>
                    <Link to={l.to} className="footer-nav__link">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solutions */}
            <nav aria-label="Solutions navigation">
              <h3 className="footer-nav__heading">Solutions</h3>
              <ul className="footer-nav__list">
                {solutionLinks.map(l => (
                  <li key={l.name}>
                    <Link to={l.to} className="footer-nav__link">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company */}
            <nav aria-label="Company navigation">
              <h3 className="footer-nav__heading">Company</h3>
              <ul className="footer-nav__list">
                {companyLinks.map(l => (
                  <li key={l.name}>
                    <Link to={l.to} className="footer-nav__link">{l.name}</Link>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="footer-contact-cta">
                Get Free Consultation <ArrowRight size={13} />
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <p className="footer-bottom__copy">
              &copy; {year} <strong>AshbitSoft IT Solutions</strong>. All rights reserved.
              Serving <span itemProp="addressLocality">Anuppur</span> &amp;{' '}
              <span itemProp="addressLocality">Shahdol</span>, Madhya Pradesh, India.
            </p>

            <div className="footer-bottom__legal">
              <Link to="/company/policy" className="footer-bottom__link">Privacy</Link>
              <Link to="/company/security" className="footer-bottom__link">Security</Link>
              <Link to="/company/faq" className="footer-bottom__link">Terms</Link>
            </div>

            <div className="footer-social" aria-label="Social media links">
              {socialItems.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social__link"
                  aria-label={label}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
