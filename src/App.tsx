// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import { HelmetProvider } from "react-helmet-async";
// // import { lazy } from "react";

// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";
// import Pricing from "./pages/Pricing";
// import Blog from "./pages/Blog";
// import BlogPost from "./pages/BlogPost";
// import Dashboard from "./pages/Dashboard";
// import BlogAdmin from "./pages/admin/BlogAdmin";
// import PriceAdmin from "./pages/admin/PriceAdmin";
// import AdminLogin from "./pages/admin/AdminLogin";
// import DashboardLayout from "./components/DashboardLayout";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AccountingSystem from "./pages/AccountingSystem";
// import InventorySystem from "./pages/InventorySystem";
// import HRSystem from "./pages/HRSystem";
// import ContactUs from "./pages/ContactUs";
// import WebDevService from "./pages/WebDevService";
// import Injaze from "./pages/Injaze";
// import ERPSystem from "./pages/ERPSystem";
// import ScrollToTop from "./components/ScrollToTop";
// import PrivacyPolicy from "./pages/PrivasyPolicy";
// import TermsAndConditions from "./pages/TermesAndConditions";
// import CyberSecurity from "./components/CyberSecurity";
// import CloudServices from "./components/CloudServices";

// // const CloudServices = lazy(()=> import('./components/CloudServices'))
// // const CyberSecurity = lazy(()=> import('./components/CyberSecurity'))
// // const TermsAndConditions = lazy(()=> import('./components/TestimonialsSection'))
// // const PrivacyPolicy = lazy(()=> import('./pages/PrivasyPolicy'))
// // const ScrollToTop = lazy(()=> import('./components/ScrollToTop'))
// // const ERPSystem = lazy(()=> import('./pages/ERPSystem'))
// // const Injaze = lazy(()=> import('./pages/Injaze'))
// // const WebDevService = lazy(()=> import('./pages/WebDevService'))
// // const ContactUs = lazy(()=>import('./pages/ContactUs'));
// // const HRSystem = lazy(()=>import('./pages/HRSystem'));
// // const InventorySystem = lazy(()=> import('./pages/InventorySystem'));
// // const AccountingSystem = lazy(()=> import('./pages/InventorySystem'));
// // const  Footer = lazy(()=> import('./components/Footer'));
// // const Navbar = lazy(()=> import('./components/Navbar'));
// // const DashboardLayout = lazy(()=> import('./components/DashboardLayout'));
// // const PriceAdmin = lazy(()=>import('./pages/admin/PriceAdmin'));
// // const BlogAdmin = lazy(()=>import('./pages/admin/BlogAdmin'));
// // const Dashboard = lazy(()=>import('./pages/Dashboard'));
// // const BlogPost = lazy(()=>import('./pages/BlogPost'));
// // const Blog = lazy(()=>import('./pages/Blog'));
// // const AdminLogin = lazy(()=>import('./pages/admin/AdminLogin'));
// // const Pricing = lazy(()=>import('./pages/Pricing'));
// // const NotFound = lazy(()=>import('./pages/NotFound'));
// // const Index = lazy(()=>import('./pages/Index'));

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <HelmetProvider>
//         <BrowserRouter>
//           <ScrollToTop />
//           <AnimatePresence mode="wait">
//             <Routes>
//               {/* Pages publiques */}
//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Navbar />
//                     <Index />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/pricing"
//                 element={
//                   <>
//                     <Navbar />
//                     <Pricing />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/blog"
//                 element={
//                   <>
//                     <Navbar />
//                     <Blog />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/blog/:id"
//                 element={
//                   <>
//                     <Navbar />
//                     <BlogPost />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Page de contact */}
//               <Route
//                 path="/contact"
//                 element={
//                   <>
//                     <Navbar />
//                     <ContactUs />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* New Web Development Service Page */}
//               <Route
//                 path="/software-development"
//                 element={
//                   <>
//                     <Navbar />
//                     <WebDevService />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Nouvelles pages des produits */}
//               <Route
//                 path="/accounting"
//                 element={
//                   <>
//                     <Navbar />
//                     <AccountingSystem />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/inventory"
//                 element={
//                   <>
//                     <Navbar />
//                     <InventorySystem />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/hr"
//                 element={
//                   <>
//                     <Navbar />
//                     <HRSystem />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/injaz"
//                 element={
//                   <>
//                     <Navbar />
//                     <Injaze />
//                     <Footer />
//                   </>
//                 }
//               />
//               <Route
//                 path="/erp"
//                 element={
//                   <>
//                     <Navbar />
//                     <ERPSystem />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/privacy-policy"
//                 element={
//                   <>
//                     <Navbar />
//                     <PrivacyPolicy />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/terms-of-use"
//                 element={
//                   <>
//                     <Navbar />
//                     <TermsAndConditions />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/cyber-security"
//                 element={
//                   <>
//                     <Navbar />
//                     <CyberSecurity />
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/cloud-services"
//                 element={
//                   <>
//                     <Navbar />
//                     <CloudServices />
//                     <Footer />
//                   </>
//                 }
//               />

//               {/* Admin Login */}
//               <Route path="/admin/login" element={<AdminLogin />} />

//               {/* Dashboard Admin */}
//               <Route path="/admin" element={<DashboardLayout />}>
//                 <Route index element={<Dashboard />} />
//                 <Route path="blogs" element={<BlogAdmin />} />
//                 <Route path="prices" element={<PriceAdmin />} />
//               </Route>

//               {/* Catch-all route */}
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </AnimatePresence>
//         </BrowserRouter>
//       </HelmetProvider>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, memo } from "react"; // Ajout de memo et Suspense

// Composants communs mémoïsés
const Navbar = memo(lazy(() => import("./components/Navbar")));
const Footer = memo(lazy(() => import("./components/Footer")));
const ScrollToTop = memo(lazy(() => import("./components/ScrollToTop")));

interface MainLayoutProps {
  children: React.ReactNode;
}

// Layout commun pour éviter la répétition
const MainLayout = memo(({ children }: MainLayoutProps) => (
  <>
    <Navbar />
    <Suspense fallback={<div className="min-h-[80vh]"></div>}>
      {children}
    </Suspense>
    <Footer />
  </>
));

// Pages chargées dynamiquement
const Index = lazy(() => import("./pages/Index"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const WebDevService = lazy(() => import("./pages/WebDevService"));
const AccountingSystem = lazy(() => import("./pages/AccountingSystem"));
const InventorySystem = lazy(() => import("./pages/InventorySystem"));
const HRSystem = lazy(() => import("./pages/HRSystem"));
const Injaze = lazy(() => import("./pages/Injaze"));
const ERPSystem = lazy(() => import("./pages/ERPSystem"));
const PrivacyPolicy = lazy(() => import("./pages/PrivasyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermesAndConditions"));
const CyberSecurity = lazy(() => import("./components/CyberSecurity"));
const CloudServices = lazy(() => import("./components/CloudServices"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const BlogAdmin = lazy(() => import("./pages/admin/BlogAdmin"));
const PriceAdmin = lazy(() => import("./pages/admin/PriceAdmin"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Optimisation des requêtes
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/cloud-services"
                element={
                  <MainLayout>
                    <CloudServices />
                  </MainLayout>
                }
              />

              <Route
                path="/cyber-security"
                element={
                  <MainLayout>
                    <CyberSecurity />
                  </MainLayout>
                }
              />

              <Route
                path="/terms-of-use"
                element={
                  <MainLayout>
                    <TermsAndConditions />
                  </MainLayout>
                }
              />

              <Route
                path="/privacy-policy"
                element={
                  <MainLayout>
                    <PrivacyPolicy />
                  </MainLayout>
                }
              />

              <Route
                path="/erp"
                element={
                  <MainLayout>
                    <ERPSystem />
                  </MainLayout>
                }
              />

              <Route
                path="/injaz"
                element={
                  <MainLayout>
                    <Injaze />
                  </MainLayout>
                }
              />

              <Route
                path="/contact"
                element={
                  <MainLayout>
                    <ContactUs />
                  </MainLayout>
                }
              />

              <Route
                path="/hr"
                element={
                  <MainLayout>
                    <HRSystem />
                  </MainLayout>
                }
              />

              <Route
                path="/inventory"
                element={
                  <MainLayout>
                    <InventorySystem />
                  </MainLayout>
                }
              />

              <Route
                path="/accounting"
                element={
                  <MainLayout>
                    <AccountingSystem />
                  </MainLayout>
                }
              />

              <Route
                path="/software-development"
                element={
                  <MainLayout>
                    <WebDevService />
                  </MainLayout>
                }
              />

              {/* Pages publiques avec layout commun */}
              <Route
                path="/"
                element={
                  <MainLayout>
                    <Index />
                  </MainLayout>
                }
              />

              <Route
                path="/pricing"
                element={
                  <MainLayout>
                    <Pricing />
                  </MainLayout>
                }
              />

              {/* Routes dynamiques avec Suspense individuel */}
              <Route
                path="/blog"
                element={
                  <MainLayout>
                    <Suspense>
                      <Blog />
                    </Suspense>
                  </MainLayout>
                }
              />

              <Route
                path="/blog/:id"
                element={
                  <>
                    <MainLayout>
                      <Suspense>
                        <BlogPost />
                      </Suspense>
                    </MainLayout>
                  </>
                }
              />

              {/* Routes admin séparées sans layout commun */}
              <Route
                path="/admin/login"
                element={
                  <Suspense fallback={<div>جاري تحميل لوحة المعلومات...</div>}>
                    <AdminLogin />
                  </Suspense>
                }
              />

              <Route
                path="/admin"
                element={
                  <Suspense fallback={<div>جاري تحميل لوحة المعلومات...</div>}>
                    <DashboardLayout />
                  </Suspense>
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="blogs" element={<BlogAdmin />} />
                <Route path="prices" element={<PriceAdmin />} />
              </Route>

              {/* Catch-all route */}
              <Route
                path="*"
                element={
                  <Suspense fallback={null}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
