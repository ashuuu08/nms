import { Star, CheckCircle2, Sparkles } from 'lucide-react';
import './TestimonialsMarquee.css';

const REVIEWS_COL_1 = [
  {
    id: 1,
    quote: "AshbitSoft automated our entire client onboarding flow. We've saved 40+ hours per week in manual data entry. Genuinely one of the best technical decisions we made.",
    author: "Sneha Gupta",
    role: "Director of Operations",
    company: "ShipFast Logistics",
    avatarBg: "linear-gradient(135deg, #155EEF, #12CDEB)",
    rating: 5,
    tag: "Workflow Automation",
  },
  {
    id: 2,
    quote: "The custom ERP dashboard gave us visibility we never had before. ROI was immediate — scaling from 10k to 100k users was completely seamless.",
    author: "Karan Malhotra",
    role: "Founder & CEO",
    company: "VentureStack",
    avatarBg: "linear-gradient(135deg, #0B1B3D, #155EEF)",
    rating: 5,
    tag: "Enterprise System",
  },
  {
    id: 3,
    quote: "From MVP to a scaled product in 3 months. Their MERN stack proficiency is unmatched. They don't just write code, they build scalable business products.",
    author: "Pranay Sheth",
    role: "Co-Founder",
    company: "FinPilot Tech",
    avatarBg: "linear-gradient(135deg, #16C7B7, #155EEF)",
    rating: 5,
    tag: "MERN Stack MVP",
  },
];

const REVIEWS_COL_2 = [
  {
    id: 4,
    quote: "Exceptional AI chatbot integration. It reduced our support ticket overhead by 60% in just the first month. Our customers love the instant responses.",
    author: "Aditi Sharma",
    role: "Head of Support",
    company: "ZenLearn Edu",
    avatarBg: "linear-gradient(135deg, #12CDEB, #16C7B7)",
    rating: 5,
    tag: "AI Chatbot",
  },
  {
    id: 5,
    quote: "The Java-based backend they built handles our 50k requests per minute without any latency issues. World-class architecture and security standards.",
    author: "Vivek Roy",
    role: "Engineering Manager",
    company: "DataOps Systems",
    avatarBg: "linear-gradient(135deg, #0B1B3D, #16C7B7)",
    rating: 5,
    tag: "Java Spring Boot",
  },
  {
    id: 6,
    quote: "Automating our Shopify-to-Sheets syncing saved our inventory team hours of manual export work. They really understand real-world business operations.",
    author: "Rahul Bajaj",
    role: "Proprietor",
    company: "LuxDecor India",
    avatarBg: "linear-gradient(135deg, #155EEF, #0B1B3D)",
    rating: 5,
    tag: "E-Commerce Sync",
  },
];

const REVIEWS_COL_3 = [
  {
    id: 7,
    quote: "Their spreadsheet automation syncs perfectly with our CRM. Campaign reporting that used to take a full day now runs automatically every morning.",
    author: "Riya Joshi",
    role: "Marketing Head",
    company: "BrandBoost Media",
    avatarBg: "linear-gradient(135deg, #155EEF, #12CDEB)",
    rating: 5,
    tag: "Sheets API",
  },
  {
    id: 8,
    quote: "The data visualization dashboard for our healthcare analytics project was intuitive and lightning fast. Security & compliance handled expertly.",
    author: "Dr. Anjali Rao",
    role: "Clinical Director",
    company: "HealthCore Systems",
    avatarBg: "linear-gradient(135deg, #16C7B7, #0B1B3D)",
    rating: 5,
    tag: "HealthTech BI",
  },
  {
    id: 9,
    quote: "Direct access to lead engineers without middle-management lag meant our project was delivered 2 weeks ahead of schedule. Outstanding team!",
    author: "Pooja Verma",
    role: "Chief Technology Officer",
    company: "CloudScale Sol",
    avatarBg: "linear-gradient(135deg, #12CDEB, #155EEF)",
    rating: 5,
    tag: "DevOps & Cloud",
  },
];

const ReviewCard = ({ review }) => (
  <div className="tm-review-card">
    <div className="tm-review-card__top">
      <div className="tm-review-card__stars">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
        ))}
      </div>
      <span className="tm-review-card__tag">{review.tag}</span>
    </div>

    <p className="tm-review-card__quote">"{review.quote}"</p>

    <div className="tm-review-card__bottom">
      <div className="tm-author-info">
        <div
          className="tm-author-avatar"
          style={{ background: review.avatarBg }}
        >
          {review.author
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <div className="tm-author-name">{review.author}</div>
          <div className="tm-author-role">
            {review.role} · <strong>{review.company}</strong>
          </div>
        </div>
      </div>

      <div className="tm-verified-badge">
        <CheckCircle2 size={12} />
        <span>Verified</span>
      </div>
    </div>
  </div>
);

const Column = ({ reviews, animationClass }) => {
  const duplicated = [...reviews, ...reviews, ...reviews];

  return (
    <div className="tm-marquee-col-window">
      <div className={`tm-marquee-track ${animationClass}`}>
        {duplicated.map((item, idx) => (
          <ReviewCard key={`${item.id}-${idx}`} review={item} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsMarquee = () => {
  return (
    <section className="tm-section" aria-labelledby="tm-heading">
      <div className="tm-bg-glow tm-bg-glow--left" aria-hidden="true" />
      <div className="tm-bg-glow tm-bg-glow--right" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header className="section-header text-center" style={{ marginBottom: '56px' }}>
          <div className="eyebrow eyebrow--cyan">
            <Sparkles size={14} /> Client Testimonials
          </div>
          <h2 id="tm-heading" className="display-md">
            Trusted by Leaders &amp; <span className="gradient-text">Innovators</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '640px', margin: '16px auto 0' }}>
            Real feedback from CTOs, founders, and operations directors who built their core software with AshbitSoft.
          </p>
        </header>

        {/* 3-Column Animated Marquee with Top/Bottom Gradient Mask */}
        <div className="tm-marquee-container">
          <div className="tm-marquee-grid">
            {/* Column 1: UP */}
            <Column reviews={REVIEWS_COL_1} animationClass="tm-marquee-up" />

            {/* Column 2: DOWN */}
            <Column reviews={REVIEWS_COL_2} animationClass="tm-marquee-down" />

            {/* Column 3: UP (Slow) */}
            <Column reviews={REVIEWS_COL_3} animationClass="tm-marquee-up-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
