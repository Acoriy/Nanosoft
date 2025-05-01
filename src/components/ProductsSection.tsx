

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Images importées
import Accounting from "../assets/Dashboards/Accounting_UI.webp";
import HR from "../assets/Dashboards/HR_UI.webp";
import PMS from "../assets/Dashboards/PMS_UI.webp";
import Warehose from "../assets/Dashboards/Warehouse_UI.webp";

const ProductSelector: React.FC = () => {
  const [activeTab, setActiveTab] = useState("accounting");

  const tabData = {
    projet: {
      title: "إنجاز لإدارة المشروعات",
      image: PMS,
    },
    logi: {
      title: "لوجستي لإدارة المخزون والمشتريات",
      image: Warehose,
    },
    hr: {
      title: "بياناتي لإدارة الموارد البشرية",
      image: HR,
    },
    accounting: {
      title: "حساباتي للإدارة المالية",
      image: Accounting,
    },
  };

  return (
    <section className="py-12 md:py-24 bg-gray-50" aria-labelledby="products-title">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="products-title" className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            أنظمة رقمية فعالة
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            خدمات تقنية فعالة وقابلة للتطوير، وخدمة عملاء أسرع وأكثر كفاءة.
          </p>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList
              className="grid grid-cols-2 gap-2 md:flex md:flex-wrap bg-gradient-to-b from-green-50 to-green-100 p-1 rounded-lg h-fit overflow-x-auto"
            >
              {Object.keys(tabData).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="whitespace-nowrap px-3 py-2 text-xs md:text-sm min-w-[120px] text-center font-semibold"
                  aria-controls={`tabpanel-${tab}`}
                >
                  {tabData[tab].title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>
        <motion.div
          className="flex justify-center mb-12 md:mb-20 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-4xl">
            <div className="relative rounded-lg overflow-hidden bg-white shadow-md border border-gray-200">
              <img
                src={tabData[activeTab].image}
                alt={tabData[activeTab].title}
                loading="lazy"
                className="w-full h-auto object-contain mx-auto p-4 md:p-8"
                style={{ maxHeight: "60vh" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSelector;
