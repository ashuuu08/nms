import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions   from './pages/Solutions';
import Startups    from './pages/Startups';
import SMEs        from './pages/SMEs';
import Enterprises from './pages/Enterprises';
import Pricing  from './pages/Pricing';
import Features from './pages/Features';
import About    from './pages/About';
import FAQ      from './pages/FAQ';
import Security from './pages/Security';
import Policy   from './pages/Policy';
import Contact  from './pages/Contact';
import Blog     from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';
import './App.css';

/* Scroll-to-top on route change */
const ScrollReset = () => {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  return null;
};

/* Remove HTML preloader once React mounts */
const PreloaderRemover = () => {
  useEffect(() => {
    const el = document.getElementById('preloader');
    if (el) {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.4s ease';
      setTimeout(() => el.remove(), 450);
    }
  }, []);
  return null;
};

const AppContent = () => (
  <>
    <PreloaderRemover />
    <ScrollReset />
    <Navbar />
    <main id="main-content">
      <Routes>
        <Route path="/"                       element={<Home />} />
        <Route path="/services"               element={<Services />} />
        <Route path="/services/:id"           element={<ServiceDetail />} />
        <Route path="/solutions"              element={<Solutions />} />
        <Route path="/solutions/startups"     element={<Startups />} />
        <Route path="/solutions/smes"         element={<SMEs />} />
        <Route path="/solutions/enterprises"  element={<Enterprises />} />
        <Route path="/pricing"                element={<Pricing />} />
        <Route path="/features"               element={<Features />} />
        <Route path="/company/about"          element={<About />} />
        <Route path="/company/faq"            element={<FAQ />} />
        <Route path="/company/security"       element={<Security />} />
        <Route path="/company/policy"         element={<Policy />} />
        <Route path="/contact"                element={<Contact />} />
        <Route path="/blog"                   element={<Blog />} />
        <Route path="/blog/:slug"             element={<BlogPost />} />
        <Route path="*"                       element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
