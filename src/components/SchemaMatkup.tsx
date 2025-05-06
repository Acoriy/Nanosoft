/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from 'react-helmet';

type SchemaType = {
  [key: string]: any;
  "@graph"?: object[];
};

const SchemaMarkup = ({ schema }: { schema: SchemaType }) => {
  const cleanSchema = (schemaData: SchemaType) => {
    // Nettoyer les valeurs undefined/null
    return JSON.parse(JSON.stringify(schemaData));
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          ...cleanSchema(schema)
        }, null, 2)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;