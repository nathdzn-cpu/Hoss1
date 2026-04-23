import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ArrowRight, Home } from 'lucide-react';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => (
  <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center px-4 text-center">
    <SEOHead
      title="404 - Page Not Found | HOSS"
      description="The page you are looking for does not exist. Head back to HOSS to manage your haulage operation."
      path="/404"
      noIndex={true}
    />
    <div className="relative mb-8">
      <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="relative w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-xl">
        <Truck className="w-16 h-16 text-white" />
      </div>
    </div>

    <p className="text-amber-500 font-bold text-lg mb-2 tracking-widest uppercase">404</p>
    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
      This load's gone missing.
    </h1>
    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md mb-10">
      The page you're looking for doesn't exist or has been moved. Let's get you back on route.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/">
        <Button variant="dark" size="lg" icon={Home} iconPosition="left">
          Back to Home
        </Button>
      </Link>
      <Link to="/demo">
        <Button variant="outline" size="lg" icon={ArrowRight} iconPosition="right">
          Book a Demo
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
