import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import OurSolution from './pages/OurSolution';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ToastProvider>
          <Router>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-600 focus:text-white focus:shadow-lg"
            >
              Skip to main content
            </a>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
              <Navigation />
              <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/our-solution" element={<OurSolution />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <CookieConsent />

          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-4">HOSS</h3>
                  <p className="text-gray-400 text-sm">
                    Job management, driver tracking, and invoicing for haulage companies.
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium mb-3">Product</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="/our-solution" className="hover:text-white transition-colors">Our Solution</a></li>
                    <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                  </ul>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium mb-3">Company</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="/demo" className="hover:text-white transition-colors">Book Demo</a></li>
                    <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="mailto:info@thehoss.co.uk" className="hover:text-white transition-colors">Support</a></li>
                  </ul>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-medium mb-3">Contact</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>020 3151 2025</li>
                    <li>info@thehoss.co.uk</li>
                    <li>London, UK</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-sm text-gray-400 order-2 sm:order-1">&copy; 2026 HOSS - Haulage One Stop Solution Ltd. Company No. 16774658. All rights reserved.</p>
                <div className="flex items-center gap-3 order-1 sm:order-2">
                  <a href="https://apps.apple.com/gb/app/hoss/id6760239877" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=uk.co.thehoss.hoss&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-[42px] w-auto -my-[5px] opacity-80 hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
            </div>
          </Router>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;