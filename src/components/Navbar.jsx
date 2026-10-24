import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/siteData';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen]               = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [openDropdown, setOpenDropdown]   = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location                          = useLocation();
  const navRef                            = useRef(null);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body when mobile open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path) => {
    if (!path) return false;
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleDropdown = (name) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="AshbitSoft homepage">
            <img src="/logo.png" alt="AshbitSoft" width="36" height="36" />
            <span className="navbar__logo-text">
              Ashbit<span className="navbar__logo-accent">Soft</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar__links" role="list">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.name}
                  className="navbar__item navbar__item--dropdown"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.path ? (
                    <Link
                      to={link.path}
                      className={`navbar__btn ${isActive(link.path) || link.children.some(c => isActive(c.path)) ? 'active' : ''}`}
                      onClick={() => setOpenDropdown(null)}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown size={14} className={`navbar__chevron ${openDropdown === link.name ? 'open' : ''}`} />
                    </Link>
                  ) : (
                    <button
                      className={`navbar__btn ${link.children.some(c => isActive(c.path)) ? 'active' : ''}`}
                      onClick={() => handleDropdown(link.name)}
                      aria-expanded={openDropdown === link.name}
                      aria-haspopup="true"
                    >
                      {link.name}
                      <ChevronDown size={14} className={`navbar__chevron ${openDropdown === link.name ? 'open' : ''}`} />
                    </button>
                  )}

                  {openDropdown === link.name && (
                    <div className="navbar__dropdown" role="menu">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`navbar__dropdown-item ${isActive(child.path) ? 'active' : ''}`}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="navbar__dropdown-name">{child.name}</span>
                          <span className="navbar__dropdown-desc">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.name} className="navbar__item">
                  <Link
                    to={link.path}
                    className={`navbar__link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar__cta">
            <Link to="/contact" className="btn btn-primary btn-sm">
              Discuss Your Project <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setIsOpen(p => !p)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu__header">
            <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
              <img src="/logo.png" alt="AshbitSoft" width="32" height="32" />
              <span className="navbar__logo-text">
                Ashbit<span className="navbar__logo-accent">Soft</span>
              </span>
            </Link>
            <button className="navbar__toggle" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-menu__nav">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="mobile-menu__group">
                  <button
                    className="mobile-menu__group-btn"
                    onClick={() => setMobileExpanded(p => p === link.name ? null : link.name)}
                    aria-expanded={mobileExpanded === link.name}
                  >
                    {link.name}
                    <ChevronDown size={16} className={mobileExpanded === link.name ? 'open' : ''} />
                  </button>
                  {mobileExpanded === link.name && (
                    <div className="mobile-menu__sub">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="mobile-menu__sub-link"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`mobile-menu__link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="mobile-menu__footer">
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Discuss Your Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      {/* Overlay backdrop */}
      {isOpen && <div className="mobile-menu__backdrop" onClick={() => setIsOpen(false)} aria-hidden="true" />}
    </>
  );
};

export default Navbar;
