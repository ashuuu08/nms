import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Clock, ArrowLeft, User, Calendar, Tag, Share2, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 2);

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AshbitSoft',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ashbit.in/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ashbit.in/blog/${post.slug}`,
    },
  };

  return (
    <div className="blog-post-page">
      <SEO
        title={`${post.title} | AshbitSoft`}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <section className="blog-post-hero section--navy">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Link to="/blog" className="blog-back-link">
            <ArrowLeft size={16} /> Back to Tech Blog
          </Link>

          <div className="blog-post-meta">
            <span className="badge badge--cyan">{post.category}</span>
            <span className="blog-post-meta__item"><Calendar size={13} /> {post.date}</span>
            <span className="blog-post-meta__item"><Clock size={13} /> {post.readTime}</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>

          <div className="blog-post-author-bar">
            <div className="blog-post-author-avatar">
              <User size={18} />
            </div>
            <div>
              <div className="blog-post-author-name">{post.author}</div>
              <div className="blog-post-author-role">{post.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <article className="blog-content">
            <div
              className="blog-prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags Strip */}
            <div className="blog-post-tags">
              <span className="blog-post-tags__label"><Tag size={14} /> Topics:</span>
              {post.tags.map((t, idx) => (
                <span key={idx} className="blog-tag-badge">#{t}</span>
              ))}
            </div>

            {/* Author Box */}
            <div className="blog-author-bio-box">
              <div className="blog-author-bio-avatar">
                <User size={28} />
              </div>
              <div className="blog-author-bio-text">
                <h4>Written by {post.author}</h4>
                <p>
                  {post.authorRole} specializing in full-stack architecture, workflow engineering, and production performance optimization.
                </p>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="blog-related-section">
              <h3>Related Engineering Articles</h3>
              <div className="blog-related-grid">
                {relatedPosts.map((rel) => (
                  <Link key={rel.id} to={`/blog/${rel.slug}`} className="blog-related-card">
                    <span className="eyebrow" style={{ color: 'var(--blue)' }}>{rel.category}</span>
                    <h4>{rel.title}</h4>
                    <p>{rel.excerpt}</p>
                    <span className="link-arrow">
                      Read article <ArrowRight size={13} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="blog-cta-box">
            <h3>Need this engineered for your company?</h3>
            <p>We build production-grade web applications and automated workflows tailored to your operational needs.</p>
            <Link to="/contact" className="btn btn-primary">
              Book a Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
