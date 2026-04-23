import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEOHead from '../components/SEOHead';
import { Truck, MapPin, FileText, CreditCard, BarChart3, CheckCircle, ArrowRight, AlertTriangle, Warehouse, CheckSquare, User, Users, Building, LayoutDashboard, Smartphone, Clock, Wrench, Star, ArrowUp, PlusCircle, MinusCircle } from 'lucide-react';
import AppStoreBadges from '../components/AppStoreBadges';
import AppShowcase from '../components/AppShowcase';
import LiveDemo from './LiveDemo';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import { useReducedMotion } from '../hooks/useReducedMotion';

const features = [
  { name: 'Live ETA Tracking', icon: MapPin },
  { name: 'Instant Quoting', icon: FileText },
  { name: 'Digital Invoicing', icon: CreditCard },
  { name: 'Analytics & Reporting', icon: BarChart3 },
];

const trucks = [
  {
    id: 'HOSS-04',
    driver: 'Sarah J.',
    position: { top: '40%', left: '48%' }, // Chelmsford
    color: 'bg-amber-500',
    pingColor: 'bg-amber-400',
  },
  {
    id: 'HOSS-11',
    driver: 'Mike P.',
    position: { top: '70%', left: '65%' }, // Southend
    color: 'bg-red-500',
    pingColor: 'bg-red-400',
  },
  {
    id: 'HOSS-07',
    driver: 'David L.',
    position: { top: '50%', left: '20%' }, // Harlow
    color: 'bg-green-500',
    pingColor: 'bg-green-400',
  },
];

const expertFeatures = [
  'Multi Pickup/Delivery Bookings',
  'Easy to Use',
  'Quick Invoicing',
  'Works from any Device',
  'Customer Management',
  'Live Tracking',
  'Address Lookup & Verification',
  'Servicing & MOT Monitoring',
];

const whoWeHelp = [
  {
    icon: User,
    title: 'Owner Drivers',
    description: 'Manage your jobs, track mileage, capture PODs, and send invoices, all from your phone.',
  },
  {
    icon: Users,
    title: 'Fleet Managers',
    description: 'Keep track of your whole fleet from one dashboard. Assign jobs, monitor progress, and stay on top of driver activity in real time.',
  },
  {
    icon: Building,
    title: 'Larger Operations',
    description: 'Give your office team a proper system for managing jobs, customers, and invoicing without cobbling together spreadsheets and emails.',
  },
];

const MapVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex items-center justify-center overflow-hidden">
    <div 
      className="w-full h-full rounded-lg relative bg-cover bg-center map-grid-overlay"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612387692213-eda2b6a8425f?q=80&w=1974&auto-format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-black/50 rounded-lg"></div>
      <div className="relative w-full h-full">
        <MapPin className="absolute top-[40%] left-[48%] text-amber-400 animate-pulse" style={{ animationDelay: '0.1s' }} />
        <MapPin className="absolute top-[70%] left-[65%] text-amber-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <MapPin className="absolute top-[50%] left-[20%] text-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[30%] left-[10%] p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-md text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float-slow" style={{ animationDuration: '6s' }}>New Load Available!</div>
        <div className="absolute bottom-[15%] right-[10%] p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-md text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float-slow-reverse" style={{ animationDuration: '7s' }}>Route Optimized</div>
      </div>
    </div>
  </div>
);

const BackloadVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex flex-col justify-center items-center space-y-4 overflow-hidden">
    <div className="text-center">
      <p className="font-semibold text-slate-700 dark:text-slate-300">Without HOSS</p>
      <div className="flex items-center mt-2">
        <span className="font-bold text-slate-800 dark:text-slate-200">A</span>
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <Truck className="text-amber-500 animate-slide-in-right" style={{ animationDelay: '0.2s' }} />
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <span className="font-bold text-slate-800 dark:text-slate-200">B</span>
      </div>
      <div className="flex items-center mt-1">
        <div className="w-24 h-0.5 bg-transparent mx-2"></div>
        <div className="w-24 h-0.5 bg-red-400 border-t-2 border-dashed border-red-500 mx-2 relative -left-7 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
        <span className="text-red-500 font-semibold text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>Empty Return</span>
      </div>
    </div>
    <div className="w-3/4 h-px bg-slate-200 dark:bg-slate-700"></div>
    <div className="text-center">
      <p className="font-semibold text-slate-700 dark:text-slate-300">With HOSS</p>
      <div className="flex items-center mt-2">
        <span className="font-bold text-slate-800 dark:text-slate-200">A</span>
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <Truck className="text-amber-500" />
        <div className="w-24 h-0.5 bg-slate-300 dark:bg-slate-600 mx-2"></div>
        <span className="font-bold text-slate-800 dark:text-slate-200">B</span>
      </div>
      <div className="flex items-center mt-1">
        <div className="w-24 h-0.5 bg-green-400 mx-2 relative left-7 animate-fade-in" style={{ animationDelay: '0.8s' }}></div>
        <Truck className="text-green-500 transform -scale-x-100 animate-slide-in-left" style={{ animationDelay: '0.8s' }} />
        <div className="w-24 h-0.5 bg-transparent mx-2"></div>
        <span className="text-green-500 font-semibold text-sm animate-fade-in" style={{ animationDelay: '1s' }}>Backload Found!</span>
      </div>
    </div>
  </div>
);

const FleetVisual = () => (
  <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 flex flex-col space-y-2">
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-slate-800 dark:text-slate-200">Fleet Performance</h3>
      <div className="flex items-center space-x-1">
        <span className="text-xs text-green-500">Live</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>
    </div>
    <div className="flex-grow flex items-end justify-between space-x-2 px-2">
      <div className="w-1/4 h-[60%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-1/4 h-[80%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-1/4 h-[50%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.3s' }}></div>
      <div className="w-1/4 h-[70%] bg-amber-500 rounded-t-md animate-grow-bar" style={{ animationDelay: '0.4s' }}></div>
    </div>
    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 px-2">
      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
    </div>
    <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg space-y-1">
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-slate-600 dark:text-slate-300">Efficiency</span>
        <span className="font-bold text-green-500">89%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
        <div className="bg-green-500 h-1.5 rounded-full w-[89%] animate-grow-bar-x" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  </div>
);

const PaymentsVisual = () => {
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Paid');
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-800 dark:text-slate-200">Invoice #INV-0451</h3>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
          status === 'Pending' 
          ? 'text-yellow-800 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-900/50' 
          : 'text-green-800 bg-green-100 dark:text-green-100 dark:bg-green-900/50'
        }`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm animate-fade-in" style={{ animationDelay: '0.1s' }}><span className="text-slate-500 dark:text-slate-400">Item 1</span><span className="font-medium text-slate-800 dark:text-slate-200">£450.00</span></div>
        <div className="flex justify-between text-sm animate-fade-in" style={{ animationDelay: '0.2s' }}><span className="text-slate-500 dark:text-slate-400">Item 2</span><span className="font-medium text-slate-800 dark:text-slate-200">£320.00</span></div>
        <div className="w-full h-px bg-slate-200 dark:bg-slate-700 my-2"></div>
        <div className="flex justify-between font-bold"><span className="text-slate-800 dark:text-slate-200">Total</span><span className="text-slate-800 dark:text-slate-200">£770.00</span></div>
      </div>
      {status === 'Paid' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="border-4 border-green-500 text-green-500 rounded-full w-32 h-32 flex items-center justify-center font-bold text-3xl uppercase transform -rotate-12 animate-scale-in-stamp">
            Paid
          </div>
        </div>
      )}
    </div>
  );
};

const alerts = [
  {
    id: 1,
    type: 'traffic',
    icon: AlertTriangle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    message: 'M25 Delay (+25 min)',
    location: 'Junction 28, Brentwood',
  },
  {
    id: 2,
    type: 'maintenance',
    icon: Wrench,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    message: 'HOSS-07 (LK18 ABC) Service Due',
    location: 'Next 50 miles',
  },
  {
    id: 3,
    type: 'job',
    icon: Star,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    message: 'New Priority Job (AMZ LCY2)',
    location: 'London Gateway Port',
  },
];

const UrgentAlerts = () => {
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAlertIndex(prevIndex => (prevIndex + 1) % alerts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentAlert = alerts[currentAlertIndex];

  return (
    <div className="h-full flex flex-col">
      <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-base">Urgent Alerts</h3>
      <div className={`relative flex-grow p-3 rounded-lg overflow-hidden ${currentAlert.bgColor} animate-background-shimmer`}>
        <div className="flex items-start">
          <div className="relative w-8 h-8 flex-shrink-0 mr-3">
            <div className={`absolute inset-0 rounded-full opacity-50 animate-ping ${currentAlert.bgColor.replace('bg-', 'bg-opacity-50 ')}`}></div>
            <div className={`relative w-8 h-8 rounded-full flex items-center justify-center ${currentAlert.bgColor}`}>
              <currentAlert.icon className={`w-4 h-4 ${currentAlert.color}`} />
            </div>
          </div>
          <div className="relative w-full overflow-hidden">
            <div key={currentAlert.id} className="animate-slide-in-bottom">
              <p className={`font-bold text-sm ${currentAlert.color}`}>{currentAlert.message}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{currentAlert.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LiveStats = () => {
  const revenue = useAnimatedCounter(12450);
  const jobs = useAnimatedCounter(42);
  const onTimeRate = useAnimatedCounter(98.7);

  return (
    <div className="h-full flex flex-col">
      <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-base">Live Stats</h3>
      <div className="space-y-3 flex-grow flex flex-col justify-around">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Revenue Today</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">
              £{revenue.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </p>
            <span className="flex items-center text-xs font-bold text-green-500 ml-2">
              <ArrowUp className="w-3 h-3" /> 5.2%
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Jobs Completed</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">{jobs.toFixed(0)}</p>
            <span className="text-xs font-bold text-green-500 ml-2">+3 today</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400">On-Time Rate</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
              <div className="bg-green-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${onTimeRate}%` }}></div>
            </div>
            <span className="font-bold text-green-500 text-base">{onTimeRate.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="col-span-5 lg:col-span-2 grid grid-rows-2 gap-4">
      <div className="row-span-1 p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
        <LiveStats />
      </div>
      <div className="row-span-1 p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
        <UrgentAlerts />
      </div>
    </div>
  );
};

const homeFaqData = [
  {
    question: 'What is haulage management software?',
    answer: "It's software built specifically for haulage and transport businesses. It replaces the mix of spreadsheets, phone calls, and WhatsApp groups most operators rely on, with one system for creating jobs, dispatching drivers, tracking deliveries, and sending invoices. HOSS is built for UK haulage operators specifically.",
  },
  {
    question: 'How is HOSS different from using spreadsheets?',
    answer: "Spreadsheets don't update in real time, can't notify drivers of new jobs, and require someone to chase down PODs and ETAs manually. With HOSS, drivers get their jobs on their phone, update statuses with a single tap, and capture PODs on-site. Your office sees everything live, without needing to pick up the phone.",
  },
  {
    question: 'Is HOSS suitable for owner-operators and small fleets?',
    answer: "Yes. Whether you're running one vehicle or fifty, HOSS works for your size of operation. Owner-drivers use it to manage their own jobs, capture PODs, and send invoices straight from their phone. You only pay for the users you have.",
  },
  {
    question: 'What is a transport management system (TMS)?',
    answer: 'A TMS is software that manages the day-to-day of running a transport operation: jobs, drivers, routes, documents, and billing. HOSS is a TMS built specifically for UK haulage companies, with features like HGV routing, driver daily checks, and Xero integration.',
  },
  {
    question: 'How long does it take to get started with HOSS?',
    answer: "Most operators are up and running within a day. There's no lengthy installation or setup process. You add your drivers, create your first jobs, and the system is ready to go. We're on hand to help if you get stuck.",
  },
  {
    question: 'Do drivers need to be tech-confident to use the app?',
    answer: "No. The driver app is built to be as simple as possible. Drivers tap to accept a job, tap when they're on route, tap when they arrive, and take a photo for the POD. That's the core of it. Most drivers pick it up without any training.",
  },
  {
    question: 'Does HOSS integrate with Xero?',
    answer: 'Yes. HOSS integrates with Xero so invoices created in HOSS can be pushed straight to your accounts. It cuts out the manual data entry and keeps your invoicing and accounting in sync.',
  },
  {
    question: 'Can my customers track their own deliveries?',
    answer: "Yes. Each customer can be given access to a branded portal where they can see the status of their jobs, track deliveries in real time, view PODs, and download invoices, without needing to call or email your office.",
  },
];

const Home: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'HOSS - Haulage One Stop Solution Ltd',
        legalName: 'Haulage One Stop Solution Ltd',
        url: 'https://thehoss.co.uk',
        logo: 'https://thehoss.co.uk/logo.png',
        foundingDate: '2024',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'London',
          addressCountry: 'GB',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+44-20-3151-2025',
          contactType: 'customer support',
          areaServed: 'GB',
          availableLanguage: 'English',
        },
        sameAs: [
          'https://apps.apple.com/gb/app/hoss/id6760239877',
          'https://play.google.com/store/apps/details?id=uk.co.thehoss.hoss',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'HOSS',
        operatingSystem: 'iOS, Android, Web',
        applicationCategory: 'BusinessApplication',
        description: 'Haulage management software for UK transport operators. Job dispatching, driver tracking, digital PODs, invoicing, and a branded customer portal.',
        url: 'https://thehoss.co.uk',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          availability: 'https://schema.org/InStock',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: homeFaqData.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'schema-home';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);
    return () => { document.getElementById('schema-home')?.remove(); };
  }, []);

  const interactiveFeatures = [
    {
      icon: Smartphone,
      title: 'Stop chasing drivers',
      description: "Stop spending numerous hours per day chasing drivers for eta's to jobs, in & out times of deliveries & POD's! Our mobile app for drivers is extremely easy to use and is simple as pressing one button which instantly updates the job for office to see!",
      visual: <MapVisual />,
    },
    {
      icon: Users,
      title: 'Customer Access',
      description: "If you have customers which you do work for often then you can give them access which will allow them to see all jobs allocated to them to avoid the need for constant back and forth emails, they can view the job and see all needed details including POD's, ETA's, Times of arrivals & departures.",
      visual: <BackloadVisual />,
    },
    {
      icon: LayoutDashboard,
      title: 'Unify Fleet Management',
      description: "Manage daily checks for drivers & even set reminders for vehicle MOT's or regular inspections.",
      visual: <FleetVisual />,
    },
    {
      icon: CreditCard,
      title: 'Easy Invoicing',
      description: 'With the simple click of a button you can generate an invoice with all the customers details and details of the job including POD images!',
      visual: <PaymentsVisual />,
    },
  ];

  return (
    <>
      <SEOHead
        title="HOSS | Haulage Management Software for UK Operators"
        description="Job dispatching, driver tracking, digital PODs, and invoicing in one platform. Built for UK haulage companies. Scales from owner-drivers to large fleets."
        path="/"
      />
      <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent dark:from-gray-900/50 dark:to-transparent z-0"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12">
          {/* Top Content */}
          <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-snug">
          The Haulage Management Platform That Gets Out of Your Way.
          </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              HOSS handles job dispatching, driver tracking, invoicing, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/demo">
                <Button variant="dark" size="lg" icon={ArrowRight} iconPosition="right">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/features" className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Explore Features
              </Link>
            </div>
          </div>

          {/* Visual Diagram */}
          <div className="w-full max-w-7xl mx-auto mt-16 md:mt-24">
            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center space-y-8">
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                      <feature.icon className="w-5 h-5 text-amber-500" />
                    </div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{feature.name}</span>
                  </div>
                ))}
              </div>
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                <Truck className="w-10 h-10 text-amber-600 dark:text-amber-500" />
              </div>
              <div className="w-full max-w-lg">
                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-4 w-full backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-md text-slate-800 dark:text-slate-200">Dashboard</span>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl relative">
                      <h3 className="font-semibold text-slate-700 dark:text-slate-300 text-sm mb-2">Live Fleet: Essex</h3>
                      <div 
                        className="relative h-32 rounded-lg overflow-hidden bg-cover bg-center map-grid-overlay"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612387692213-eda2b6a8425f?q=80&w=1974&auto=format&fit=crop')" }}
                      >
                        <div className="absolute inset-0 bg-black/20 dark:bg-black/50"></div>
                        <div className="relative w-full h-full">
                          <span className="absolute top-[40%] left-[48%] text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded -translate-x-1/2">Chelmsford</span>
                          <span className="absolute top-[70%] left-[65%] text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded -translate-x-1/2">Southend</span>
                          <span className="absolute top-[50%] left-[20%] text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded -translate-x-1/2">Harlow</span>
                          {trucks.map(truck => (
                            <div key={truck.id} className="absolute" style={truck.position}>
                              <div className="relative w-2.5 h-2.5">
                                <div className={`absolute inset-0 ${truck.pingColor} rounded-full animate-ping`}></div>
                                <div className={`relative block w-2.5 h-2.5 ${truck.color} rounded-full border border-white`}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:block relative md:h-[400px]">
              <div className="relative flex flex-row items-center justify-between h-full">
                <div className="flex flex-col justify-between h-full py-2">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex items-center space-x-4 group">
                      <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-500/30 group-hover:border-amber-400 dark:group-hover:border-amber-600">
                        <feature.icon className="w-6 h-6 text-slate-500 dark:text-slate-400 transition-colors group-hover:text-amber-500" />
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-lg">{feature.name}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                  <div className="relative w-28 h-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                    <Truck className="w-12 h-12 text-amber-600 dark:text-amber-500" />
                  </div>
                </div>
                <div className="w-full md:w-auto max-w-lg">
                  <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-4 w-full backdrop-blur-sm animate-shadow-pulse bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/60 dark:to-slate-900/60 animate-background-pan">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-base text-slate-800 dark:text-slate-200">Operations Dashboard</span>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="col-span-5 lg:col-span-3 flex flex-col gap-4">
                        <div className="p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl relative">
                          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm">Live Fleet: Essex</h3>
                          <div 
                            className="relative h-32 rounded-lg overflow-hidden bg-cover bg-center map-grid-overlay"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612387692213-eda2b6a8425f?q=80&w=1974&auto=format&fit=crop')" }}
                          >
                            <div className="absolute inset-0 bg-black/20 dark:bg-black/50"></div>
                            <div className="relative w-full h-full">
                              <span className="absolute top-[40%] left-[48%] text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded -translate-x-1/2">Chelmsford</span>
                              <span className="absolute top-[70%] left-[65%] text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded -translate-x-1/2">Southend</span>
                              <span className="absolute top-[50%] left-[20%] text-[10px] text-white font-bold bg-black/60 px-1.5 py-0.5 rounded -translate-x-1/2">Harlow</span>
                              {trucks.map(truck => (
                                <div key={truck.id} className="absolute group animate-float-gentle" style={truck.position}>
                                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-slate-900 text-white text-xs font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                                    <p>{truck.driver}</p>
                                    <p className="text-slate-400 font-medium">{truck.id}</p>
                                  </div>
                                  <div className="relative w-3 h-3">
                                    <div className={`absolute inset-0 ${truck.pingColor} rounded-full animate-ping`}></div>
                                    <div className={`relative block w-3 h-3 ${truck.color} rounded-full border-2 border-white`}></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-100 dark:bg-slate-900/50 rounded-xl animate-background-shimmer">
                          <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-2 text-sm">Active Jobs</h3>
                          <div className="space-y-1">
                            <div className="flex justify-between items-center text-xs p-1.5 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800/50">
                              <div className="flex items-center">
                                <Truck className="w-3 h-3 mr-2 text-amber-500" />
                                <span className="font-medium text-slate-700 dark:text-slate-300">Chelmsford &rarr; Colchester</span>
                              </div>
                              <span className="flex items-center text-green-600 dark:text-green-400 font-semibold"><CheckCircle className="w-3 h-3 mr-1" /> On Time</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-1.5 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800/50">
                              <div className="flex items-center">
                                <Truck className="w-3 h-3 mr-2 text-amber-500" />
                                <span className="font-medium text-slate-700 dark:text-slate-300">Southend &rarr; London</span>
                              </div>
                              <span className="flex items-center text-yellow-600 dark:text-yellow-400 font-semibold"><Clock className="w-3 h-3 mr-1 animate-spin" style={{ animationDuration: '2s' }} /> In Transit</span>
                            </div>
                            <div className="flex justify-between items-center text-xs p-1.5 rounded-md transition-colors hover:bg-slate-200 dark:hover:bg-slate-800/50">
                              <div className="flex items-center">
                                <Truck className="w-3 h-3 mr-2 text-amber-500" />
                                <span className="font-medium text-slate-700 dark:text-slate-300">Harwich &rarr; Tilbury</span>
                              </div>
                              <span className="flex items-center text-red-600 dark:text-red-400 font-semibold"><AlertTriangle className="w-3 h-3 mr-1" /> At Risk</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DashboardSidebar />
                    </div>
                  </div>
                </div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-[-1]" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 400">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(245, 158, 11, 0.5)" />
                    <stop offset="100%" stopColor="rgba(245, 158, 11, 0.1)" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <g filter="url(#glow)">
                  <path d="M 280 50 C 420 50, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 280 125 C 420 125, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 280 275 C 420 275, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 280 350 C 420 350, 450 200, 580 200" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 700 200 H 850" stroke="url(#line-grad)" strokeWidth="2" fill="none" />
                  <path d="M 850 190 H 700" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5" fill="none" />
                  <path d="M 850 210 H 700" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5" fill="none" />
                  {!prefersReducedMotion && (
                    <>
                      <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="8s" repeatCount="indefinite" path="M 280 50 C 420 50, 450 200, 580 200" /></circle>
                      <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="7s" repeatCount="indefinite" path="M 280 125 C 420 125, 450 200, 580 200" /></circle>
                      <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="6s" repeatCount="indefinite" path="M 280 275 C 420 275, 450 200, 580 200" /></circle>
                      <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="9s" repeatCount="indefinite" path="M 280 350 C 420 350, 450 200, 580 200" /></circle>
                      <circle cx="0" cy="0" r="5" fill="#f59e0b"><animateMotion dur="5s" repeatCount="indefinite" path="M 700 200 H 850" /></circle>
                      <circle cx="0" cy="0" r="4" fill="#22c55e"><animateMotion dur="4s" repeatCount="indefinite" path="M 850 190 H 700" /></circle>
                      <circle cx="0" cy="0" r="4" fill="#22c55e"><animateMotion dur="4s" begin="0.5s" repeatCount="indefinite" path="M 850 210 H 700" /></circle>
                    </>
                  )}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* The HOSS Advantage Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">How HOSS Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A closer look at the parts of HOSS your team will actually use every day.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-4 lg:pb-0 space-x-2 lg:space-x-0 lg:space-y-2">
                {interactiveFeatures.map((feature, index) => (
                  <button
                    key={feature.title}
                    onClick={() => setActiveFeature(index)}
                    className={`p-4 rounded-lg text-left transition-all duration-300 w-48 lg:w-full flex-shrink-0 ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <feature.icon className={`w-6 h-6 mr-3 flex-shrink-0 ${activeFeature === index ? 'text-white' : 'text-amber-600 dark:text-amber-400'}`} />
                      <span className={`font-semibold ${activeFeature === index ? 'text-white' : 'text-gray-900 dark:text-gray-100'}`}>{feature.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="relative w-full h-auto md:h-[450px]">
                {interactiveFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`transition-all duration-500 ease-in-out ${
                      activeFeature === index ? 'opacity-100 translate-y-0 static' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                      <div className="relative w-full h-80 md:h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/20 rounded-2xl bg-purple-grid-pattern-faded"></div>
                        <div className="relative w-[90%] h-[90%] transform transition-transform duration-500 group-hover:scale-105">
                          {feature.visual}
                        </div>
                      </div>
                      <div className="pr-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Experts Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-amber-500/10 dark:bg-amber-500/5 rounded-full blur-3xl -z-0 animate-pulse-slow"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 lg:mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-snug">
                Built by people who know <span className="text-amber-600 dark:text-amber-500">haulage</span>.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                HOSS was built by people with direct experience in the industry. We know what it's like to manage drivers, chase PODs, and deal with the daily grind of running a haulage operation. We built a system that actually fits the way the job works.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full blur-2xl animate-pulse-slow"></div>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <Warehouse className="w-24 h-24 sm:w-32 sm:h-32 text-amber-600 dark:text-amber-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertFeatures.map((feature) => (
              <div key={feature} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200 dark:border-slate-700 rounded-xl p-6 h-full flex items-center">
                  <CheckSquare className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">Built for Every Size of Operation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From single-vehicle owner-drivers to larger fleets, HOSS works for the operation you have now and grows with you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoWeHelp.map((who) => (
              <div key={who.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <who.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{who.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{who.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LiveDemo />
      <AppShowcase />

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Common Questions About HOSS
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Straight answers to what most people ask before getting started.
            </p>
          </div>
          <div className="space-y-3">
            {homeFaqData.map((faq, index) => (
              <div key={index} className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900 dark:text-gray-100 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <MinusCircle className="w-5 h-5 text-amber-600 flex-shrink-0 ml-4" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-10 text-center bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-10 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                See HOSS in Action
              </h3>
              <p className="text-lg text-amber-100 mb-8 max-w-3xl mx-auto">
                Book a demo and we'll walk you through how HOSS works for your type of operation.
              </p>
              <Link to="/demo">
                <Button size="lg" className="bg-white text-amber-700 hover:bg-slate-100 font-bold shadow-lg transform hover:scale-105">
                  SIGN UP FOR A FREE DEMO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;