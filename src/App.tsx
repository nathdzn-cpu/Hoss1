import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Contact from './pages/Contact';
import OurSolution from './pages/OurSolution';
import Privacy from './pages/Privacy';

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
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold mb-4">HOSS</h3>
                  <p className="text-gray-400 text-sm">
                    Transforming logistics operations with comprehensive customer portal solutions.
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
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2026 HOSS - Haulage One Stop Solutions. All rights reserved.</p>
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