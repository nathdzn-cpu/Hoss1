import React from 'react';
import { Shield, Database, Users, Globe, MapPin, Camera, Smartphone, FileText, Bell, CreditCard, Building2, Lock, Eye, Server, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Privacy: React.FC = () => {
  const dataCollectItems = [
    { 
      icon: Users, 
      title: 'Account Information',
      text: 'Name, email address, phone number',
      color: 'blue'
    },
    { 
      icon: MapPin, 
      title: 'Location Data',
      text: 'Precise GPS location of drivers during active jobs',
      color: 'green'
    },
    { 
      icon: Camera, 
      title: 'Photos',
      text: 'Images taken for proof of delivery and vehicle inspection checks',
      color: 'purple'
    },
    { 
      icon: MapPin, 
      title: 'Addresses',
      text: 'Collection and delivery addresses related to jobs',
      color: 'amber'
    },
    { 
      icon: Smartphone, 
      title: 'Device Information',
      text: 'Device type and operating system for app functionality',
      color: 'red'
    },
  ];

  const dataUseItems = [
    { icon: Shield, text: 'Provide and operate the haulage management platform' },
    { icon: Users, text: 'Authenticate your account and manage access' },
    { icon: MapPin, text: 'Track driver locations during active jobs' },
    { icon: Camera, text: 'Record proof of delivery including signatures and photos' },
    { icon: FileText, text: 'Complete daily vehicle inspection checks' },
    { icon: CreditCard, text: 'Generate invoices and manage billing' },
    { icon: Bell, text: 'Send notifications related to job updates' },
  ];

  const serviceProviders = [
    { name: 'Supabase', purpose: 'Data Storage', icon: Database },
    { name: 'TomTom', purpose: 'Mapping & Navigation', icon: MapPin },
    { name: 'Xero', purpose: 'Accounting Integration', icon: CreditCard },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  };

  return (
    <div className="pt-20 md:pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Shield Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-8 shadow-2xl shadow-blue-500/30">
            <Shield className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Last updated: January 2026</span>
          </div>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Haulage One Stop Solution Ltd</span> ("HOSS", "we", "our", "us") operates the HOSS mobile application and web platform. This policy explains what data we collect, how we use it, and your rights.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Data Encrypted</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">End-to-end encryption</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Transparent</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Clear data practices</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">UK Based</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">GDPR Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Data We Collect */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">Section 1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Data We Collect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We collect the following data when you use our app to provide you with the best possible service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCollectItems.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: How We Use Your Data */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full mb-4">
                <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300 font-medium">Section 2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                How We Use Your Data
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Your data is used exclusively to deliver and improve our haulage management services. Here's how:
              </p>
              
              <div className="space-y-4">
                {dataUseItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
              <Card className="relative p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Data Rights</h3>
                    <p className="text-gray-500 dark:text-gray-400">Protected under GDPR</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Right to access your data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Right to rectification</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Right to erasure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">Right to data portability</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Data Sharing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
              <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Section 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Data Sharing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              We <span className="font-bold text-red-600 dark:text-red-400">do not sell</span> your data to third parties. We share data only with:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Your Organisation */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Your Organisation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your employer or the company that manages your account can see data related to their operations. This is necessary for the platform to function. Drivers' job activity is visible to the organisation that assigned those jobs.
                  </p>
                </div>
              </div>
            </Card>

            {/* Service Providers */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Service Providers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    We use trusted third-party services to operate our platform. These providers process data on our behalf under their own privacy policies.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Service Provider Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {serviceProviders.map((provider, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <provider.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{provider.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{provider.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Privacy Policy?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle your data, our team is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@thehoss.co.uk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mail className="w-5 h-5" />
              info@thehoss.co.uk
            </a>
          </div>
        </div>
      </section>

      </div>
  );
};

// Clock component for the date badge
const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

export default Privacy;