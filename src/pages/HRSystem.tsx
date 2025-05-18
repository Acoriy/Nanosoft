import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import {
  Check,
  Users,
  Calendar,
  Clock,  
  Award,
  BarChart,
  Briefcase,

} from "lucide-react";

const features = [
  {
    title: "إدارة بيانات الموظفين",
    icon: <Users className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "إدارة شاملة لبيانات الموظفين وملفاتهم الشخصية والمهنية والمستندات الخاصة بهم",
  },
  {
    title: "إدارة الإجازات والمغادرات",
    icon: <Calendar className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "إدارة كاملة لإجازات الموظفين واستحقاقاتهم وتتبع الغياب والمغادرات",
  },
  {
    title: "تتبع الحضور والانصراف",
    icon: <Clock className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "نظام مرن لتسجيل الحضور والانصراف ومراقبة ساعات العمل الفعلية للموظفين",
  },
  {
    title: "إدارة الرواتب والتعويضات",
    icon: <Briefcase className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "حساب الرواتب والبدلات والعلاوات والخصومات بشكل آلي مع إصدار المستندات اللازمة",
  },
  {
    title: "تقييم الأداء",
    icon: <Award className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "إدارة عمليات تقييم الأداء الدورية للموظفين ووضع الأهداف وقياس الإنجازات",
  },
  {
    title: "التقارير والإحصائيات",
    icon: <BarChart className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "تقارير متنوعة وشاملة حول جميع جوانب إدارة الموارد البشرية لاتخاذ القرارات",
  },
];

const benefits = [
  "توفير الوقت والجهد في إدارة شؤون الموظفين",
  "زيادة دقة البيانات وتقليل الأخطاء البشرية",
  "تحسين تجربة الموظفين وزيادة رضاهم الوظيفي",
  "تسهيل الامتثال للقوانين واللوائح المحلية",
  "تحسين عمليات التوظيف والاختيار",
  "تعزيز الشفافية في إجراءات الموارد البشرية",
];

import HR1 from "../assets/HRSystem/magment.webp";
import HR2 from "../assets/HRSystem/magmentHR2.webp";
import { Link } from "react-router-dom";

import SEO from "../components/SEO";
import ImageOg from "../assets/LogoNanosSoft.png";
import SchemaMarkup from "@/components/SchemaMatkup";

// schema.org :

const hrSchema = {
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "نظام إدارة الموارد البشرية NanoSoft HR",
      "description": "نظام متكامل لإدارة شؤون الموظفين والموارد البشرية بكفاءة عالية مع مراعاة الخصوصية المحلية",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "softwareVersion": "2.1.4",
      "featureList": features.map(f => f.title),
      "screenshot": {
        "@type": "ImageObject",
        "url": "https://nanosoft.ly/hr",
        "width": 1200,
        "height": 630
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "LYD",
        "lowPrice": "300",
        "highPrice": "3000",
        "offerCount": "3",
        "url": "https://nanosoft.ly/hr"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "ratingCount": "76"
      }
    },
    {
      "@type": "Organization",
      "name": "نانو سوفت",
      "url": "https://nanosoft.ly",
      // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`,
      "sameAs": [
        "https://facebook.com/nanosoft",
        "https://linkedin.com/company/nanosoft"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Libya"
      },
      "knowsLanguage": "ar",
      "foundingDate": "2020"
    },
    {
      "@type": "WebPage",
      "name": "صفحة نظام الموارد البشرية - نانو سوفت",
      "description": "نظام متكامل لإدارة كافة جوانب الموارد البشرية وإدارة شؤون الموظفين",
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": ".container"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        // "url": `${process.env.VITE_SITE_URL}${HR1}`
      }
    }
  ]
};


const HRSystem = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8  pt-28  md:pt-32">
       {/* Open Graph  */}
       <SEO
        title="نانو سوفت - حلول الأنظمة الرقمية"
        description="نظام متكامل لإدارة الموارد البشرية مصمم خصيصاً للشركات والمؤسسات في ليبيا والعالم العربي"
        image={ImageOg}
        category="HR Software"
        url="https://nanosoft.ly/hr"
      />

      {/* Open Graph */}
      <SchemaMarkup schema={hrSchema} />

      <PageHeader
        title="نظام بياناتي لإدارة الموارد البشرية"
        description="نظام متكامل لإدارة الموارد البشرية مصمم خصيصاً للشركات والمؤسسات في ليبيا والعالم العربي"
      />

      {/* Hero Section with Image */}
      <div className="flex flex-col md:flex-row items-center gap-10 my-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-right"
        >
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
            نظام شامل
          </Badge>
          <h1 className="text-4xl font-bold mb-6">
            إدارة الموارد البشرية بكفاءة واحترافية
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            نظام "بياناتي" لإدارة الموارد البشرية من نانوسوفت يوفر لك حلاً متكاملاً لإدارة
            جميع جوانب الموارد البشرية من تسجيل البيانات وإدارة الإجازات إلى
            احتساب الرواتب وتقييم الأداء.
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <Link to="/contact">
              <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                طلب عرض توضيحي
              </Button>
            </Link>

            <Link to="/pricing">
              <Button variant="outline">تعرف على المزيد</Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <img
            src={HR1}
            alt="نظام إدارة الموارد البشرية"
            className="rounded-lg shadow-2xl w-full object-cover h-[400px]"
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="my-20">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
            مميزات النظام
          </Badge>
          <h2 className="text-3xl font-bold">
            حلول متكاملة لإدارة الموارد البشرية
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            يوفر نظام إدارة الموارد البشرية من نانوسوفت مجموعة شاملة من الأدوات
            التي تلبي احتياجات مؤسستك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rtl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-right"
            >
              <div className="mb-4 flex justify-end">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-20 bg-gradient-to-r from-nanosoft-primary/5 to-nanosoft-primary/10 rounded-2xl p-8 lg:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src={HR2}
              alt="فوائد نظام الموارد البشرية"
              className="rounded-lg shadow-xl object-cover h-[400px] w-full"
            />
          </div>
          <div className="flex-1 text-right">
            <Badge className="bg-nanosoft-primary/20 text-nanosoft-primary hover:bg-nanosoft-primary/30 mb-4">
              لماذا تختارنا؟
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              فوائد استخدام نظام إدارة الموارد البشرية من نانوسوفت
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-nanosoft-primary rounded-full p-1 flex-shrink-0 mr-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Link to="/pricing">
              <Button className="mt-8 bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                ابدأ الآن مجاناً
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          جاهز لتطوير إدارة الموارد البشرية في مؤسستك؟
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        إنضم إلى المؤسسات التي تستخدم نظام إدارة الموارد البشرية من
          نانوسوفت لإدارة شؤون موظفيها بكفاءة
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/pricing">
            <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90 px-8 py-6 text-lg">
              ابدأ الاشتراك مجانا
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="px-8 py-6 text-lg">
              تواصل مع فريق المبيعات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HRSystem;
