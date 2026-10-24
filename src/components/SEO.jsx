import { Helmet } from 'react-helmet-async';
import { organizationSchema, websiteSchema, localBusinessAnuppur, localBusinessShahdol } from '../schema';

const SITE_URL = 'https://ashbit.in';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * SEO component — inject per-page meta, canonical, OG, Twitter, and JSON-LD.
 * @param {string}  title       — page title (will be appended with " | AshbitSoft")
 * @param {string}  description — meta description
 * @param {string}  keywords    — comma-separated keywords
 * @param {string}  canonical   — canonical path (e.g. "/services")
 * @param {string}  ogImage     — full URL to OG image
 * @param {array}   extraSchema — additional JSON-LD schema objects for this page
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  extraSchema = [],
}) => {
  const BRAND = 'AshbitSoft';
  const seoTitle = title
    ? (title.includes(BRAND) ? title : `${title} | ${BRAND}`)
    : `${BRAND} - Software Development Company in Anuppur & Shahdol | IT Solutions`;
  const seoDesc = description || 'Leading custom software development company in Anuppur and Shahdol, Madhya Pradesh. High-performance web applications, Google Workspace automation, and ERP solutions.';
  const seoKeywords = keywords || 'software company Anuppur, software development Shahdol, custom software Madhya Pradesh, IT solutions Anuppur, AshbitSoft, automation services, ERP solutions, web development near me';
  const seoImage = ogImage || DEFAULT_IMAGE;
  const seoCanonical = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const seoUrl = seoCanonical;

  const schemas = [organizationSchema, websiteSchema, localBusinessAnuppur, localBusinessShahdol, ...extraSchema];

  return (
    <Helmet>
      {/* Core */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={BRAND} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical */}
      <link rel="canonical" href={seoCanonical} />

      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />

      {/* JSON-LD */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
