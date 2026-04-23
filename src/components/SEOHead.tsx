import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://thehoss.co.uk';
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  noIndex = false,
}) => {
  const canonical = `${BASE_URL}${path}`;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HOSS" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEOHead;
