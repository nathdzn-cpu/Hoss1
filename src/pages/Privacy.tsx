import React from 'react';
import { Shield, Database, Users, Globe, MapPin, Camera, Smartphone, FileText, Bell, CreditCard, Building2 } from 'lucide-react';
import Card from '../components/Card';

const Privacy: React.FC = () => {
  const sections = [
    {
      id: 'data-collect',
      icon: Database,
      title: '1. Data We Collect',
      content: 'We collect the following data when you use our app:',
      items: [
        { icon: Users, text: 'Account information: name, email address, phone number' },
        { icon: MapPin, text: 'Location data: precise GPS location of drivers during active jobs' },
        { icon: Camera, text: 'Photos: images taken for proof of delivery and vehicle inspection checks' },
        { icon: MapPin, text: 'Addresses: collection and delivery addresses related to jobs' },
        { icon: Smartphone, text: 'Device information: device type and operating system for app functionality' },
      ],
    },
    {
      id: 'how-we-use',
      icon: FileText,
      title: '2. How We Use Your Data',
      content: 'We use your data to:',
      items: [
        { icon: Shield, text: 'Provide and operate the haulage management platform' },
        { icon: Users, text: 'Authenticate your account and manage access' },
        { icon: MapPin, text: 'Track driver locations during active jobs' },
        { icon: Camera, text: 'Record proof of delivery including signatures and photos' },
        { icon: FileText, text: 'Complete daily vehicle inspection checks' },
        { icon: CreditCard, text: 'Generate invoices and manage billing' },
        { icon: Bell, text: 'Send notifications related to job updates' },
      ],
    },
    {
      id: 'data-sharing',
      icon: Globe,
      title: '3. Data Sharing',
      content: 'We do not sell your data to third parties. We share data only with:',
      items: [
        { icon: Building2, text: 'Your organisation: your employer or the company that manages your account can see data related to their operations' },
        { icon: Database, text: 'Service providers: we use Supabase for data storage, Stripe for payment processing, and TomTom for mapping services. These providers process data on our behalf under their own privacy policies' },
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Last updated: January 2026
          </p>
          <p className="text-lg text-blue-200 mt-4 max-w-2xl mx-auto">
            Haulage One Stop Solution Ltd ("HOSS", "we", "our", "us") operates the HOSS mobile application and web platform. This policy explains what data we collect, how we use it, and your rights.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <Card key={section.id} className="p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {section.content}
                    </p>
                    {section.items && (
                      <ul className="space-y-4">
                        {section.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                              <item.icon className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="p-8 md:p-10 mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border-2 border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Questions About Our Privacy Policy?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to reach out.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Bottom Pattern */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 HOSS - Haulage One Stop Solutions. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;