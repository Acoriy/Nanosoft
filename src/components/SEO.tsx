import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, image, url, category }) => {
  
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
      <meta
        property="business:contact_data:phone_number"
        content="+218918889193"
      />
      <meta property="business:contact_data:email" content="info@nanosoft.ly" />
      <meta
        property="business:contact_data:website"
        content="https://nanosoft.ly"
      />
      <meta property="business:product:category" content={category} />

      {/* <meta property="og:image" content={image} /> */}
      <meta
        property="og:image"
        content={image || "https://nanosoft.ly/src/assets/LogoNanosSoft.png"}
      />

      {/* {
        <meta name="og:image" property={'https://nanosoft.ly/' + image}/>
      } */}
      <meta property="og:url" content={url} />
      
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;


// import { Helmet } from 'react-helmet-async';

// interface SeoProps {
//   title: string;
//   description: string;
//   url: string;
//   image?: string;
// }

// export default function Seo({ title, description, url, image }: SeoProps) {
//   const baseUrl = import.meta.env.VITE_BASE_URL;
//   const fullImageUrl = image 
//     ? `${baseUrl}${image}`
//     : `${baseUrl}/og-default.jpg`;

//   return (
//     <Helmet>
//       {/* Balises Open Graph */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:url" content={url} />
//       <meta property="og:type" content="website" />
//       <meta property="og:image" content={fullImageUrl} />
//       <meta property="og:locale" content="fr_FR" />

//       {/* Balises standards */}
//       <title>{title}</title>
//       <meta name="description" content={description} />
//     </Helmet>
//   );
// }