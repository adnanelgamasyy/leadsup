import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import WhatsAppFloat from './components/WhatsAppFloat';
import './app/globals.css';

// Lazy load all page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const EnhancedBlogPostPage = lazy(() => import('./pages/EnhancedBlogPostPage'));

// Service pages
const ColdCallingPage = lazy(() => import('./pages/services/ColdCallingPage'));
const DataGenerationPage = lazy(() => import('./pages/services/DataGenerationPage'));
const SkipTracingPage = lazy(() => import('./pages/services/SkipTracingPage'));
const MarketResearchPage = lazy(() => import('./pages/services/MarketResearchPage'));
const AcquisitionsDispositionsPage = lazy(() => import('./pages/services/AcquisitionsDispositionsPage'));
const AppointmentSettingPage = lazy(() => import('./pages/services/AppointmentSettingPage'));

// Industry pages
const RealEstateWholesalersPage = lazy(() => import('./pages/industries/RealEstateWholesalersPage'));
const FixFlipInvestorsPage = lazy(() => import('./pages/industries/FixFlipInvestorsPage'));
const BuyHoldInvestorsPage = lazy(() => import('./pages/industries/BuyHoldInvestorsPage'));
const RealEstateAgentsPage = lazy(() => import('./pages/industries/RealEstateAgentsPage'));
const RealEstatePage = lazy(() => import('./pages/industries/RealEstatePage'));
const RoofingPage = lazy(() => import('./pages/industries/RoofingPage'));
const SolarPage = lazy(() => import('./pages/industries/SolarPage'));
const MedicalInsurancePage = lazy(() => import('./pages/industries/MedicalInsurancePage'));
const AutomotivePage = lazy(() => import('./pages/industries/AutomotivePage'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Loading component for Suspense fallback
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-action-blue"></div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/cold-calling" element={<ColdCallingPage />} />
              <Route path="/services/data-generation" element={<DataGenerationPage />} />
              <Route path="/services/skip-tracing" element={<SkipTracingPage />} />
              <Route path="/services/market-research" element={<MarketResearchPage />} />
              <Route path="/services/acquisitions-dispositions" element={<AcquisitionsDispositionsPage />} />
              <Route path="/services/appointment-setting" element={<AppointmentSettingPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/real-estate-wholesalers" element={<RealEstateWholesalersPage />} />
              <Route path="/industries/fix-flip-investors" element={<FixFlipInvestorsPage />} />
              <Route path="/industries/buy-hold-investors" element={<BuyHoldInvestorsPage />} />
              <Route path="/industries/real-estate-agents" element={<RealEstateAgentsPage />} />
              <Route path="/industries/real-estate" element={<RealEstatePage />} />
              <Route path="/industries/roofing" element={<RoofingPage />} />
              <Route path="/industries/solar" element={<SolarPage />} />
              <Route path="/industries/medical-insurance" element={<MedicalInsurancePage />} />
              <Route path="/industries/automotive" element={<AutomotivePage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<EnhancedBlogPostPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
          </Suspense>
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;