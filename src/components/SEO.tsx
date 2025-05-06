

import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url , category }) => {
  return (
    <Helmet>
      {/* Balises standards */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="business:contact_data:locality" content="طرابلس" />
      <meta property="business:contact_data:region" content="ليبيا" />
      <meta property="business:contact_data:phone_number" content="+218918889193" />
      <meta property="business:contact_data:email" content="info@nanosoft.ly" />
      <meta property="business:contact_data:website" content="https://nanosoft.ly" />
      <meta property="business:product:category" content={category} />

      {/* <meta property="og:image" content={image} /> */}
      <meta 
            property="og:image" 
            content={image || "src/assets/LogoNanosSoft.png"} 
          />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;