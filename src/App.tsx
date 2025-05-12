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
const Loading =   lazy(()=>import("./components/Loading"))

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
                  <Suspense fallback={<Loading/>}>
                    <AdminLogin />
                  </Suspense>
                }
              />

              <Route
                path="/admin"
                element={
                  <Suspense fallback={<Loading/>}>
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
