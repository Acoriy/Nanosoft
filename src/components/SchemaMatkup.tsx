import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          ...schema
        })}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;