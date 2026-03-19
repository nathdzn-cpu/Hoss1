import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sliders, Smartphone, Users, GanttChartSquare, Zap, FileClock, MessageSquare, BarChart } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const OurSolution: React.FC = () => {

  const features = [
    {
      icon: GanttChartSquare,
      title: 'Live Job Tracking',
      description: 'A centralized dashboard to create, assign, and monitor every job in real-time. From multi-drop routes to backloads, gain complete visibility over your entire operation.',
      visual: (
        <div className="w-full h-full bg-slate-100 dark:bg-slate-900/50 rounded-lg p-3 space-y-2 overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Active Jobs</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="p-2 bg-white dark:bg-slate-800 rounded opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium">London &rarr; Manchester</span>
              <span className="text-xs text-green-500 font-semibold animate-pulse">On Time</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-1">
              <div className="bg-green-500 h-1 rounded-full w-[75%] animate-grow-bar-x" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
          <div className="p-2 bg-white dark:bg-slate-800 rounded opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium">Dover &rarr; Glasgow</span>
              <span className="text-xs text-yellow-500 font-semibold animate-pulse">In Transit</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 mt-1">
              <div className="bg-yellow-500 h-1 rounded-full w-[40%] animate-grow-bar-x" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Smartphone,
      title: 'Intuitive Driver App',
      description: 'Empower your drivers with a simple mobile app. They can view job details, get optimized routes, capture PODs with photos and signatures, and communicate instantly.',
      visual: (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-32 h-56 bg-slate-800 dark:bg-slate-900 rounded-2xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300 animate-float-gentle">
            <div className="w-full h-full bg-white dark:bg-slate-800 rounded-lg p-1.5 space-y-1.5 animate-background-shimmer">
              <p className="text-xs font-bold text-center text-slate-700 dark:text-slate-300">Today's Jobs</p>
              <div className="bg-amber-500 text-white p-1.5 rounded-md text-[10px] animate-pop-in" style={{ animationDelay: '0.2s' }}>
                <p className="font-bold">LDN &rarr; MCR</p>
                <p className="opacity-80">Deliver by 3:00 PM</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-700 p-1.5 rounded-md text-[10px] animate-pop-in" style={{ animationDelay: '0.4s' }}>
                <p className="font-bold text-slate-600 dark:text-slate-300">DV &rarr; GLW</p>
                <p className="opacity-80 text-slate-500 dark:text-slate-400">Deliver by 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Users,
      title: 'Branded Customer Portal',
      description: 'Give your clients a professional, self-service experience. They can request quotes, book jobs, track their shipments in real-time, and access invoices 24/7.',
      visual: (
        <div className="w-full h-full bg-slate-100 dark:bg-slate-900/50 rounded-lg p-3 space-y-2 overflow-hidden">
          <div className="flex items-center space-x-2 opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0 animate-pulse"></div>
            <div>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Global Logistics Inc.</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Customer Portal</p>
            </div>
          </div>
          <div className="p-2 bg-white dark:bg-slate-800 rounded text-xs opacity-0 animate-slide-in-bottom" style={{ animationDelay: '0.4s' }}>
            <p className="font-bold mb-1">Tracking ID: #GL-12345</p>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></div>
              <p className="text-green-600 dark:text-green-400 font-semibold animate-pulse">In Transit</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Sliders,
      title: 'Powerful Office Tools',
      description: 'Automate your back-office with tools for instant quoting, automated invoicing, driver self-billing, and deep analytics to track profitability and performance.',
      visual: (
        <div className="w-full h-full bg-slate-100 dark:bg-slate-900/50 rounded-lg p-3 grid grid-cols-2 gap-2">
          <div className="bg-white dark:bg-slate-800 rounded p-2 animate-pop-in transition-transform duration-200 hover:scale-110 animate-background-shimmer" style={{ animationDelay: '0.2s' }}>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Revenue</p>
            <p className="text-sm font-bold text-green-500">£12,450</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded p-2 animate-pop-in transition-transform duration-200 hover:scale-110 animate-background-shimmer" style={{ animationDelay: '0.3s' }}>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Jobs</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">42</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded p-2 animate-pop-in transition-transform duration-200 hover:scale-110 animate-background-shimmer" style={{ animationDelay: '0.4s' }}>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">On-Time</p>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-200">98.7%</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded p-2 animate-pop-in transition-transform duration-200 hover:scale-110 animate-background-shimmer" style={{ animationDelay: '0.5s' }}>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Profit</p>
            <p className="text-sm font-bold text-green-500">£4,120</p>
          </div>
        </div>
      )
    },
  ];

  const benefits = [
    {
      icon: FileClock,
      title: 'Reduce Admin by 70%',
      description: 'Automate invoicing, POD management, and quoting to free up hours of daily administrative work.',
      example: '"We used to spend half our day on paperwork. HOSS cut that down to minutes." - J. Smith, ABC Haulage'
    },
    {
      icon: MessageSquare,
      title: 'Improve Communication',
      description: 'Centralize all job information and communication, eliminating endless phone calls and lost messages.',
      example: '"Our drivers and customers are always in the loop. No more \'Where\'s my delivery?\' calls." - M. Patel, Patel Transport'
    },
    {
      icon: Zap,
      title: 'Streamline Operations',
      description: 'From first quote to final invoice, every step is connected in one seamless workflow, reducing errors and delays.',
      example: '"Booking and dispatching is now a two-minute job, not a twenty-minute headache." - T. Jones, Express Freight'
    },
    {
      icon: BarChart,
      title: 'Increase Profitability',
      description: 'With better data, reduced empty miles, and improved efficiency, HOSS helps you make smarter decisions that boost your bottom line.',
      example: '"We\'ve increased our profit per job by 15% since switching to HOSS." - D. Evans, Celtic Carriers'
    },
  ];

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-snug">
            The Complete Solution for Haulage Success
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            HOSS unifies every part of your business—from the driver on the road to the client at their desk—into one simple, powerful, and intelligent platform.
          </p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              One Platform, Total Control
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore the four core pillars of the HOSS platform, designed to work together to streamline your entire operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white dark:bg-slate-900 p-8 rounded-2xl h-full border border-slate-200 dark:border-slate-700 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                  <div className="flex flex-col justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                  </div>
                  <div className="h-40 sm:h-48 flex items-center justify-center">
                    {feature.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Transform Your Business, Instantly
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              HOSS isn't just about features; it's about results. See how our platform delivers tangible benefits to businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} hover className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{benefit.description}</p>
                <p className="text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/50 p-2 rounded-lg italic">
                  {benefit.example}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-slate-800 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Ready to See the HOSS Difference?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let us show you how our all-in-one solution can streamline your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button size="lg" icon={ArrowRight} iconPosition="right">
                Book a Free Demo
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSolution;