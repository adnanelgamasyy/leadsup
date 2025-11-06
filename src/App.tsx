import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import EnhancedBlogPostPage from './pages/EnhancedBlogPostPage';
import ColdCallingPage from './pages/services/ColdCallingPage';
import DataGenerationPage from './pages/services/DataGenerationPage';
import SkipTracingPage from './pages/services/SkipTracingPage';
import MarketResearchPage from './pages/services/MarketResearchPage';
import AcquisitionsDispositionsPage from './pages/services/AcquisitionsDispositionsPage';
import AppointmentSettingPage from './pages/services/AppointmentSettingPage';
import WhatsAppFloat from './components/WhatsAppFloat';
import './app/globals.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
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
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<EnhancedBlogPostPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;