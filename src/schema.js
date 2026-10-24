// Master Schema.org structured data — AshbitSoft

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ashbit.in/#organization",
  "name": "AshbitSoft",
  "legalName": "AshbitSoft IT Solutions",
  "url": "https://ashbit.in",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://ashbit.in/#logo",
    "url": "https://ashbit.in/logo.png",
    "contentUrl": "https://ashbit.in/logo.png",
    "caption": "AshbitSoft - Custom Software Development",
    "width": "512",
    "height": "512"
  },
  "image": "https://ashbit.in/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Ashish Kumar Rathour",
    "jobTitle": "Founder & Principal Systems Architect",
    "image": "https://ashbit.in/founder_image%20.png"
  },
  "sameAs": [
    "https://www.linkedin.com/company/ashbitsoft",
    "https://github.com/ashbitsoft",
    "https://twitter.com/ashbitsoft",
    "https://www.facebook.com/ashbitsoft",
    "https://instagram.com/ashbitsoft"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9691207533",
    "contactType": "sales",
    "email": "info@ashbit.in",
    "availableLanguage": ["English", "Hindi"]
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Anuppur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "484223",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Shahdol",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "484001",
      "addressCountry": "IN"
    }
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://ashbit.in/#website",
  "url": "https://ashbit.in",
  "name": "AshbitSoft",
  "publisher": { "@id": "https://ashbit.in/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ashbit.in/blog?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const localBusinessAnuppur = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ashbit.in/#anuppur",
  "name": "AshbitSoft - Anuppur",
  "description": "Custom software development, Google Workspace automation, and web application solutions in Anuppur, Madhya Pradesh.",
  "url": "https://ashbit.in",
  "telephone": "+91-9691207533",
  "email": "info@ashbit.in",
  "priceRange": "$$",
  "image": "https://ashbit.in/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Anuppur",
    "addressLocality": "Anuppur",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "484223",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "23.1026", "longitude": "81.6872" },
  "areaServed": [
    { "@type": "City", "name": "Anuppur" },
    { "@type": "City", "name": "Shahdol" },
    { "@type": "State", "name": "Madhya Pradesh" },
    { "@type": "Country", "name": "India" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const localBusinessShahdol = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ashbit.in/#shahdol",
  "name": "AshbitSoft - Shahdol",
  "description": "IT solutions, custom software engineering, and digital transformation serving businesses in Shahdol, Madhya Pradesh.",
  "url": "https://ashbit.in",
  "telephone": "+91-9691207533",
  "email": "info@ashbit.in",
  "priceRange": "$$",
  "image": "https://ashbit.in/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shahdol",
    "addressLocality": "Shahdol",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "484001",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "23.2957", "longitude": "81.3533" },
  "areaServed": [
    { "@type": "City", "name": "Shahdol" },
    { "@type": "City", "name": "Anuppur" },
    { "@type": "State", "name": "Madhya Pradesh" },
    { "@type": "Country", "name": "India" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  }
};
