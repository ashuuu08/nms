import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Search, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './Blog.css';

const CATEGORIES = ['All', 'Automation', 'Development', 'Artificial Intelligence', 'Strategy', 'Marketing'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="blog-page">
      <SEO
        title="AshbitSoft Tech Blog — Tutorials, Case Studies & Engineering Insights"
        description="Real-world tutorials, production architecture blueprints, and honest takes on tech written by AshbitSoft engineers."
        canonical="/blog"
      />

      {/* Hero */}
      <section className="page-hero section--navy">
        <div className="container">
          <span className="eyebrow eyebrow--cyan">Technical Publication</span>
          <h1 className="display-lg text-white mt-16">
            Engineering Notes, Case Studies &amp; Insights
          </h1>
          <p className="body-lg text-white-60 mt-16 max-text">
            Practical tutorials, battle-tested architecture blueprints, and transparent case studies authored by active software engineers.
          </p>

          {/* Search bar */}
          <div className="blog-search-wrap">
            <Search size={18} className="blog-search-icon" />
            <input
              type="text"
              placeholder="Search tutorials, tech stacks, or automation blueprints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>
        </div>
      </section>

      {/* Featured Story (Shown if no active search or filter) */}
      {activeCategory === 'All' && !searchQuery && featuredPost && (
        <section className="section section--soft" style={{ paddingBottom: '0' }}>
          <div className="container">
            <div className="blog-featured-card">
              <div className="blog-featured-badge">Featured Case Study</div>
              <div className="blog-featured-meta">
                <span className="badge badge--cyan">{featuredPost.category}</span>
                <span className="blog-meta-item"><Clock size={13} /> {featuredPost.readTime}</span>
                <span className="blog-meta-item">{featuredPost.date}</span>
              </div>
              <h2 className="blog-featured-title">
                <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>
              <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
              <div className="blog-featured-footer">
                <div className="blog-author">
                  <User size={15} />
                  <span>{featuredPost.author} · {featuredPost.authorRole}</span>
                </div>
                <Link to={`/blog/${featuredPost.slug}`} className="btn btn-primary btn-sm">
                  Read Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters and Grid */}
      <section className="section">
        <div className="container">
          {/* Categories */}
          <div className="blog-categories-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blog-category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="blog-empty-state">
              <h3>No articles found</h3>
              <p>Try adjusting your search query or switching categories.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-card__header">
                    <span className="badge badge--navy">{post.category}</span>
                    <span className="blog-meta-item"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__tags">
                    {post.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="blog-tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="blog-card__footer">
                    <div className="blog-card__author">{post.author}</div>
                    <Link to={`/blog/${post.slug}`} className="blog-card__link">
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
