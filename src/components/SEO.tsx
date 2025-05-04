import { Helmet } from "react-helmet";

const SEO = ({ 
  title = "نانو سوفت - حلول الأنظمة الرقمية",
  description = "شركة برمجيات متخصصة في تطوير المواقع والتطبيقات وأنظمة إدارة الأعمال المتكاملة بتقنيات حديثة", 
  image = "/src/assets/Logo.webp", 
  url = window.location.href,
  type = "website",
  keywords = "نظام محاسبة سحابي , نظام إدارة متكامل للمخزون والمستودعات , نظام متكامل لإدارة الموارد البشرية , دارة المشاريع وتتبع المهام ,  نظام تخطيط موارد المؤسسة  ERP ,  تطوير تطبيقات الجوال ,تصميم مواقع ويب احترافية , تطوير واجهات برمجة التطبيقات , تحسين سرعة المواقع , أمان المواقع والتطبيقات , الأمن السيبراني , خدمات الحوسبة السحابية"
}) => {
  return (
    <Helmet>
      {/* Balises générales */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;