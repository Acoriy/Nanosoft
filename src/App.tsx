import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { lazy } from "react";


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
// import ERPSystem from "./pages/ERPSystem";
// import ContactUs from "./pages/ContactUs";
// import WebDevService from "./pages/WebDevService";
// import Injaze from "./pages/Injaze";
// import ERPSystem from "./pages/ERPSystem";
// import ScrollToTop from "./components/ScrollToTop";
// import PrivacyPolicy from "./pages/PrivasyPolicy";
// import TermsAndConditions from "./pages/TermesAndConditions";
// import CyberSecurity from "./components/CyberSecurity";
// import CloudServices from "./components/CloudServices";



const CloudServices = lazy(()=> import('./components/CloudServices'))
const CyberSecurity = lazy(()=> import('./components/CyberSecurity'))
const TermsAndConditions = lazy(()=> import('./components/TestimonialsSection'))
const PrivacyPolicy = lazy(()=> import('./pages/PrivasyPolicy'))
const ScrollToTop = lazy(()=> import('./components/ScrollToTop'))
const ERPSystem = lazy(()=> import('./pages/ERPSystem'))
const Injaze = lazy(()=> import('./pages/Injaze'))
const WebDevService = lazy(()=> import('./pages/WebDevService'))
const ContactUs = lazy(()=>import('./pages/ContactUs'));
const HRSystem = lazy(()=>import('./pages/HRSystem'));
const InventorySystem = lazy(()=> import('./pages/InventorySystem'));
const AccountingSystem = lazy(()=> import('./pages/InventorySystem'));
const  Footer = lazy(()=> import('./components/Footer'));
const Navbar = lazy(()=> import('./components/Navbar'));
const DashboardLayout = lazy(()=> import('./components/DashboardLayout'));
const PriceAdmin = lazy(()=>import('./pages/admin/PriceAdmin'));
const BlogAdmin = lazy(()=>import('./pages/admin/BlogAdmin'));
const Dashboard = lazy(()=>import('./pages/Dashboard'));
const BlogPost = lazy(()=>import('./pages/BlogPost'));
const Blog = lazy(()=>import('./pages/Blog'));
const AdminLogin = lazy(()=>import('./pages/admin/AdminLogin'));
const Pricing = lazy(()=>import('./pages/Pricing'));
const NotFound = lazy(()=>import('./pages/NotFound'));
const Index = lazy(()=>import('./pages/Index'));

const queryClient = new QueryClient();

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
              {/* Pages publiques */}
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Index />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/pricing"
                element={
                  <>
                    <Navbar />
                    <Pricing />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/blog"
                element={
                  <>
                    <Navbar />
                    <Blog />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  <>
                    <Navbar />
                    <BlogPost />
                    <Footer />
                  </>
                }
              />

              {/* Page de contact */}
              <Route
                path="/contact"
                element={
                  <>
                    <Navbar />
                    <ContactUs />
                    <Footer />
                  </>
                }
              />

              {/* New Web Development Service Page */}
              <Route
                path="/software-development"
                element={
                  <>
                    <Navbar />
                    <WebDevService />
                    <Footer />
                  </>
                }
              />

              {/* Nouvelles pages des produits */}
              <Route
                path="/accounting"
                element={
                  <>
                    <Navbar />
                    <AccountingSystem />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/inventory"
                element={
                  <>
                    <Navbar />
                    <InventorySystem />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/hr"
                element={
                  <>
                    <Navbar />
                    <HRSystem />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/injaz"
                element={
                  <>
                    <Navbar />
                    <Injaze />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/erp"
                element={
                  <>
                    <Navbar />
                    <ERPSystem />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/privacy-policy"
                element={
                  <>
                    <Navbar />
                    <PrivacyPolicy />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/terms-of-use"
                element={
                  <>
                    <Navbar />
                    <TermsAndConditions />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/cyber-security"
                element={
                  <>
                    <Navbar />
                    <CyberSecurity />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/cloud-services"
                element={
                  <>
                    <Navbar />
                    <CloudServices />
                    <Footer />
                  </>
                }
              />

              {/* Admin Login */}
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Dashboard Admin */}
              <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="blogs" element={<BlogAdmin />} />
                <Route path="prices" element={<PriceAdmin />} />
              </Route>

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
