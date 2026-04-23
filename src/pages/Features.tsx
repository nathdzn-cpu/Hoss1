import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import {
  CreditCard,
  BarChart3,
  MapPin,
  FileSignature,
  Smartphone,
  ArrowRight,
  Truck,
  Route,
  ShieldCheck,
  LayoutTemplate,
  WifiOff,
  RefreshCw,
  Package,
  BookOpen,
  ScanLine,
} from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useReducedMotion } from '../hooks/useReducedMotion';

const AnimatedMap = () => {
  const prefersReducedMotion = useReducedMotion();
  const trucks = [
    { id: 'HOSS-07', driver: 'Sarah J.', status: 'On Time', path: 'M 50 200 Q 150 150 250 200 T 450 200', duration: '10s', color: 'text-amber-600' },
    { id: 'HOSS-11', driver: 'Mike P.', status: 'In Transit', path: 'M 80 70 Q 180 120 280 70 T 480 70', duration: '12s', color: 'text-green-600' },
  ];

  return (
    <div className="relative w-full h-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-50"></div>
      <div className="relative w-full h-full bg-slate-200/30 dark:bg-slate-900/30 rounded-lg overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 250" preserveAspectRatio="none">
          {/* Paths for trucks */}
          <path id="route1" d="M 50 200 Q 150 150 250 200 T 450 200" stroke="currentColor" className="text-amber-500/30 dark:text-amber-500/20" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <path id="route2" d="M 80 70 Q 180 120 280 70 T 480 70" stroke="currentColor" className="text-green-500/30 dark:text-green-500/20" strokeWidth="2" fill="none" strokeDasharray="4 4" />
          
          {/* Location Pins / "Cities" */}
          <g className="opacity-70">
            <circle cx="50" cy="200" r="4" fill="currentColor" className="text-slate-400" />
            <text x="45" y="220" className="text-[10px] font-sans font-semibold fill-current text-slate-500 dark:text-slate-400" textAnchor="middle">Bristol</text>
            <circle cx="450" cy="200" r="4" fill="currentColor" className="text-slate-400" />
            <text x="450" y="220" className="text-[10px] font-sans font-semibold fill-current text-slate-500 dark:text-slate-400" textAnchor="middle">London</text>
            <circle cx="80" cy="70" r="4" fill="currentColor" className="text-slate-400" />
            <text x="80" y="60" className="text-[10px] font-sans font-semibold fill-current text-slate-500 dark:text-slate-400" textAnchor="middle">Manchester</text>
            <circle cx="480" cy="70" r="4" fill="currentColor" className="text-slate-400" />
            <text x="480" y="60" className="text-[10px] font-sans font-semibold fill-current text-slate-500 dark:text-slate-400" textAnchor="middle">Doncaster</text>
            <foreignObject x="240" y="115" width="24" height="24">
              <MapPin className="w-6 h-6 text-red-500 animate-pulse" />
            </foreignObject>
            <text x="252" y="150" className="text-[10px] font-sans font-semibold fill-current text-red-500" textAnchor="middle">Warehouse</text>
          </g>

          {/* Moving Trucks with Tooltips */}
          {trucks.map((truck, index) => (
            <g key={truck.id} className="group">
              {!prefersReducedMotion && (
                <animateMotion dur={truck.duration} repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref={`#route${index + 1}`} />
                </animateMotion>
              )}
              
              {/* Truck Icon */}
              <foreignObject x="-12" y="-12" width="24" height="24" className="overflow-visible">
                <Truck className={`w-6 h-6 ${truck.color} transition-transform duration-300 group-hover:scale-125`} />
              </foreignObject>

              {/* Tooltip */}
              <foreignObject x="-50" y="-65" width="100" height="50" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-md shadow-lg text-center">
                    <p className="font-bold text-[10px] text-slate-800 dark:text-slate-200">{truck.id}</p>
                    <p className="text-[9px] text-slate-500 dark:text-slate-400">{truck.driver}</p>
                    <p className={`text-[9px] font-semibold ${truck.status === 'On Time' ? 'text-green-500' : 'text-amber-500'}`}>{truck.status}</p>
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

const AnimatedInvoice = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setter(progress * end);
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    };

    const runAnimationCycle = () => {
      setIsPaid(false);
      setSubtotal(0);
      setVat(0);
      setTotal(0);

      setTimeout(() => {
        animateValue(setSubtotal, 925.00, 800);
        animateValue(setVat, 185.00, 800);
        animateValue(setTotal, 1110.00, 1000);
      }, 200);

      setTimeout(() => {
        setIsPaid(true);
      }, 1500);
    };

    runAnimationCycle();
    const intervalId = setInterval(runAnimationCycle, 4000);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center group overflow-hidden">
      <div className="w-full max-w-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Truck className="w-6 h-6 text-amber-600" />
            <span className="font-bold text-lg text-slate-800 dark:text-slate-200">HOSS</span>
          </div>
          <h3 className="text-xl font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Invoice</h3>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Details */}
          <div className="grid grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400 mb-6">
            <div>
              <p className="font-bold text-slate-700 dark:text-slate-300 mb-1">Billed To:</p>
              <p>Global Logistics Inc.</p>
              <p>123 Supply Chain Ave.</p>
              <p>London, E1 6AN</p>
            </div>
            <div className="text-right">
              <p><span className="font-bold text-slate-700 dark:text-slate-300">Invoice #:</span> INV-0452</p>
              <p><span className="font-bold text-slate-700 dark:text-slate-300">Date:</span> 23/09/2025</p>
              <p><span className="font-bold text-slate-700 dark:text-slate-300">Due:</span> 23/10/2025</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 pb-1 text-xs uppercase">
              <span>Description</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Haulage Fee</span>
              <span>£850.00</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Fuel Surcharge</span>
              <span>£75.00</span>
            </div>
          </div>

          {/* Totals */}
          <div className="space-y-1 text-sm font-mono text-right border-t border-slate-200 dark:border-slate-700 pt-2">
            <div className="flex justify-end items-baseline">
              <span className="text-slate-500 dark:text-slate-400 mr-4">Subtotal</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 w-24">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-end items-baseline">
              <span className="text-slate-500 dark:text-slate-400 mr-4">VAT (20%)</span>
              <span className="font-medium text-slate-800 dark:text-slate-200 w-24">£{vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-end items-baseline font-bold text-base mt-2">
              <span className="text-slate-800 dark:text-slate-200 mr-4">Total</span>
              <span className="text-slate-800 dark:text-slate-200 w-24">£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Status Stamp */}
        {isPaid && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="border-4 border-green-500 text-green-500 rounded-full w-32 h-32 flex items-center justify-center font-bold text-3xl uppercase transform -rotate-12 animate-scale-in-stamp">
              Paid
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main highlighted features with detailed descriptions and visuals
const highlightedFeatures = [
  {
    icon: MapPin,
    title: 'Live GPS Tracking & Mapping',
    description: 'Gain complete operational oversight with real-time GPS tracking. HOSS integrates TomTom mapping to help you plan HGV routes, monitor vehicle progress, and provide customers with accurate ETAs. One tap from the driver app launches turn-by-turn HGV navigation with routing built for trucks, not cars.',
    visual: AnimatedMap,
  },
  {
    icon: CreditCard,
    title: 'Automated Billing & Xero Integration',
    description: 'Once a job is marked complete, HOSS generates the invoice automatically and it is ready to send. Export to Xero individually or in batch, with POD images attached. No manual steps.',
    visual: AnimatedInvoice,
  },
  {
    icon: BarChart3,
    title: 'Driver & Fleet Analytics',
    description: 'View driver and fleet performance across daily, weekly, and monthly periods. Revenue, mileage, job counts, and on-time rates give you a clear picture of how the business is actually running.',
    visual: () => (
      <div className="relative w-full h-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 group">
        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-lg p-4 shadow-inner flex flex-col space-y-4">
          <h3 className="font-bold text-slate-800 dark:text-slate-200">Driver Performance</h3>
          <div className="flex-grow flex items-end justify-between space-x-2 px-2">
            <div className="w-1/4 h-[40%] bg-amber-400 rounded-t-md transition-all duration-300 group-hover:bg-amber-500 animate-grow-bar" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1/4 h-[60%] bg-amber-400 rounded-t-md transition-all duration-300 group-hover:bg-amber-500 animate-grow-bar" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1/4 h-[50%] bg-amber-400 rounded-t-md transition-all duration-300 group-hover:bg-amber-500 animate-grow-bar" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1/4 h-[80%] bg-amber-400 rounded-t-md transition-all duration-300 group-hover:bg-amber-500 animate-grow-bar" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2 bg-slate-100 dark:bg-slate-900/50 rounded-md">
              <p className="text-xs text-slate-500 dark:text-slate-400">Jobs This Month</p>
              <p className="font-bold text-lg text-green-500">48</p>
            </div>
            <div className="p-2 bg-slate-100 dark:bg-slate-900/50 rounded-md">
              <p className="text-xs text-slate-500 dark:text-slate-400">Monthly Revenue</p>
              <p className="font-bold text-lg text-amber-500">£27,040</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// Other features for the grid
const otherFeatures = [
  {
    icon: Route,
    title: 'Multi-Stop Bookings',
    description: 'Manage complex jobs with multi-stop collection and delivery in a single booking, with per-stop driver assignment and POD requirements.',
  },
  {
    icon: ScanLine,
    title: 'AI-Powered POD Capture',
    description: 'Documents are auto-scanned and perspective-corrected on upload. An AI check verifies legibility, signature, and recipient name before the driver submits.',
  },
  {
    icon: BookOpen,
    title: 'Xero Integration',
    description: 'Export invoices directly to Xero, individually or in batch, with all POD images attached automatically. No double-entry.',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Daily Checks',
    description: 'Configurable pre-drive vehicle inspection forms with photo evidence for defects. Drivers complete their check on the app before starting. Fully digital and auditable.',
  },
  {
    icon: LayoutTemplate,
    title: 'Branded Customer Portal',
    description: 'Your clients get their own portal to submit quote requests, book jobs, track shipments live, and download invoices and PODs. All under your brand.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App (iOS & Android)',
    description: 'Drivers get a dedicated app for job updates, photo capture, digital signatures, HGV navigation, and expense logging. Works offline too.',
  },
  {
    icon: WifiOff,
    title: 'Offline Mode',
    description: 'Drivers in low-signal areas can still update job statuses, upload PODs, and capture signatures. Everything queues locally and syncs automatically when signal returns.',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Jobs & Cloning',
    description: 'Schedule jobs to repeat on a set frequency, or clone any existing job in one click. Saves time on regular runs and repeat customers.',
  },
  {
    icon: Package,
    title: 'Load & Freight Planning',
    description: 'Record pallet counts, total weight, dimensions, temperature requirements, and hazardous goods flags on every job. All visible to drivers and office staff.',
  },
];

const Features: React.FC = () => {
  return (
    <div className="pt-20 md:pt-16">
      <SEOHead
        title="Features | HOSS Haulage Management Platform"
        description="Live GPS tracking, HGV routing, digital POD capture, automated invoicing, Xero integration, driver app and more. Every feature included in HOSS."
        path="/features"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-600 dark:text-amber-500 mb-6">
        Everything in One Place
        </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            HOSS covers every part of your operation: job creation and driver tracking through to invoicing, reporting, and customer access.
          </p>
        </div>
      </section>

      {/* Other Features Grid */}
      <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Every HOSS subscription includes the full feature set. No add-ons, no feature tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFeatures.map((feature) => (
              <div key={feature.title} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative p-8 bg-white dark:bg-gray-900 h-full rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlighted Features */}
      <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {highlightedFeatures.map((feature, index) => (
              <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className={`lg:order-${index % 2 === 1 ? '2' : '1'}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 rounded-xl mb-4">
                    <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">{feature.description}</p>
                </div>
                <div className={`lg:order-${index % 2 === 1 ? '1' : '2'} h-64 sm:h-80`}>
                  <feature.visual />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Book a demo and we'll walk you through how these features work in practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Book Free Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;