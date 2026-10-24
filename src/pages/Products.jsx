import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  CheckCircle2, ArrowRight, Layers, ShieldCheck,
  Zap, Clock, ShoppingCart, Users, Tag, BarChart3,
  Sparkles, Store
} from 'lucide-react';
import { products } from '../data/productsData';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <SEO
        title="Products | Ashbit Soft"
        description="Explore software products from Ashbit Soft, including our upcoming retail billing and customer-retention platform."
        canonical="/products"
      />

      {/* Hero Section */}
      <section className="products-hero" aria-labelledby="products-hero-heading">
        <div className="container">
          <div className="products-hero__inner">
            <span className="eyebrow eyebrow--cyan">Software Products</span>
            <h1 id="products-hero-heading" className="products-hero__title">
              Products Built to Solve Real Business Problems
            </h1>
            <p className="products-hero__desc">
              Explore software solutions from Ashbit Soft, designed to simplify business operations,
              improve customer experiences, and help businesses grow.
            </p>
          </div>
        </div>
      </section>

      {/* Products Listing Section */}
      <section className="products-list-section" aria-label="Product Catalog">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                {/* Main Content Column */}
                <div className="product-card__content">
                  <div className="product-card__meta-bar">
                    <span className="product-category-tag">{product.category}</span>
                    <span className="product-status-indicator">
                      <span className="status-dot-subtle" aria-hidden="true" />
                      {product.status}
                    </span>
                  </div>

                  <h2 className="product-card__name">{product.name}</h2>
                  <h3 className="product-card__headline">{product.headline}</h3>
                  <p className="product-card__desc">{product.description}</p>

                  <div className="product-highlights-title">Key Planned Highlights:</div>
                  <div className="product-highlights-grid">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="product-highlight-item">
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="product-card__footer">
                    <Link to={product.path} className="btn btn-primary btn-md">
                      Explore Product <ArrowRight size={15} />
                    </Link>
                    <Link to={`${product.path}#early-access`} className="btn btn-outline btn-md">
                      Request Early Access
                    </Link>
                  </div>
                </div>

                {/* Sidebar Preview Summary */}
                <div className="product-card__sidebar">
                  <div className="sidebar-preview-box">
                    <div className="sidebar-preview-label">Core Modules Preview</div>
                    <div className="sidebar-preview-list">
                      <div className="preview-pill">
                        <Store size={15} />
                        <span>Organized Billing Desk</span>
                      </div>
                      <div className="preview-pill">
                        <Users size={15} />
                        <span>Customer Profiles &amp; History</span>
                      </div>
                      <div className="preview-pill">
                        <Tag size={15} />
                        <span>Configurable Offer Rules</span>
                      </div>
                      <div className="preview-pill">
                        <BarChart3 size={15} />
                        <span>Sales &amp; Retention Reports</span>
                      </div>
                    </div>
                  </div>
                  <p className="sidebar-note">
                    Currently in active development. Designed for growing small and medium retail storefronts.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product Standards Section */}
      <section className="product-standards-section" aria-labelledby="standards-heading">
        <div className="container">
          <header className="section-header text-center" style={{ maxWidth: 720, margin: '0 auto' }}>
            <span className="eyebrow">Product Philosophy</span>
            <h2 id="standards-heading" className="display-md">
              How We Build Software Products
            </h2>
            <p className="body-lg">
              Every product created by Ashbit Soft follows deliberate architectural principles to ensure long-term reliability and practical value.
            </p>
          </header>

          <div className="standards-grid">
            <div className="standard-card">
              <div className="standard-card__icon">
                <Store size={22} />
              </div>
              <h3 className="standard-card__title">Built for Real Counter Workflows</h3>
              <p className="standard-card__desc">
                We design interfaces for the pace of actual retail operations—minimizing clicks, ensuring quick search, and keeping screens organized.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-card__icon">
                <ShieldCheck size={22} />
              </div>
              <h3 className="standard-card__title">Consent &amp; Privacy First</h3>
              <p className="standard-card__desc">
                Customer relationships thrive on trust. Our engagement and promotional features are built around clear consent and responsible communication.
              </p>
            </div>

            <div className="standard-card">
              <div className="standard-card__icon">
                <BarChart3 size={22} />
              </div>
              <h3 className="standard-card__title">Measurable Business Clarity</h3>
              <p className="standard-card__desc">
                Beyond recording sales numbers, our products give business owners practical insight into customer retention, popular items, and promotion performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
