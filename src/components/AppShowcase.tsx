import React, { useState } from 'react';
import { CheckCircle, MapPin, FileText, Bell, Camera, Clock, Truck } from 'lucide-react';
import AppStoreBadges from './AppStoreBadges';

const screens = [
  {
    label: 'Job Dashboard',
    content: (
      <div className="w-full h-full bg-slate-50 flex flex-col p-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-bold text-slate-700">Today's Jobs</span>
          <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
            <span className="text-[6px] text-white font-bold">3</span>
          </div>
        </div>
        <div className="bg-amber-500 text-white rounded-lg p-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold">LDN → MCR</span>
            <span className="text-[7px] bg-white/20 px-1 rounded">Active</span>
          </div>
          <div className="flex items-center gap-1">
            <Truck className="w-2.5 h-2.5" />
            <span className="text-[7px]">Deliver by 3:00 PM</span>
          </div>
          <div className="mt-1.5 w-full bg-white/20 rounded-full h-0.5">
            <div className="bg-white h-0.5 rounded-full w-[60%]"></div>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-lg p-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-slate-700">DV → GLW</span>
            <span className="text-[7px] text-amber-600 bg-amber-50 px-1 rounded">Pending</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-[7px] text-slate-500">Starts at 5:00 PM</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-lg p-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-slate-700">BHM → BRS</span>
            <span className="text-[7px] text-green-600 bg-green-50 px-1 rounded">Done</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-2.5 h-2.5 text-green-500" />
            <span className="text-[7px] text-slate-500">POD captured</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: 'Live Tracking',
    content: (
      <div className="w-full h-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612387692213-eda2b6a8425f?q=80&w=600&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full h-full p-2 flex flex-col justify-between">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1.5">
            <span className="text-[8px] font-bold text-slate-700">Live Fleet</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg p-1.5">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-semibold text-slate-700">HOSS-04 · Chelmsford</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-lg p-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-semibold text-slate-700">HOSS-07 · Harlow</span>
            </div>
          </div>
        </div>
        <MapPin className="absolute top-[40%] left-[50%] w-4 h-4 text-amber-400 drop-shadow" />
        <MapPin className="absolute top-[60%] left-[30%] w-4 h-4 text-green-400 drop-shadow" />
      </div>
    ),
  },
  {
    label: 'POD & Invoice',
    content: (
      <div className="w-full h-full bg-slate-50 flex flex-col p-3 space-y-2">
        <span className="text-[9px] font-bold text-slate-700">Invoice #INV-0451</span>
        <div className="bg-white border border-slate-100 rounded-lg p-2 space-y-1.5">
          <div className="flex justify-between">
            <span className="text-[8px] text-slate-500">Collection</span>
            <span className="text-[8px] font-medium text-slate-700">London, E1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[8px] text-slate-500">Delivery</span>
            <span className="text-[8px] font-medium text-slate-700">Manchester, M1</span>
          </div>
          <div className="w-full h-px bg-slate-100"></div>
          <div className="flex justify-between">
            <span className="text-[8px] font-bold text-slate-700">Total</span>
            <span className="text-[8px] font-bold text-slate-700">£770.00</span>
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-lg p-2 flex items-center gap-2">
          <div className="w-10 h-8 bg-slate-200 rounded flex items-center justify-center flex-shrink-0">
            <Camera className="w-3 h-3 text-slate-400" />
          </div>
          <div>
            <p className="text-[8px] font-semibold text-slate-700">POD Photo</p>
            <p className="text-[7px] text-slate-400">Captured · 14:32</p>
          </div>
          <CheckCircle className="w-3 h-3 text-green-500 ml-auto" />
        </div>
        <button className="w-full bg-amber-500 text-white rounded-lg py-1.5 text-[9px] font-bold">
          Send Invoice
        </button>
      </div>
    ),
  },
];

const appFeatures = [
  { icon: MapPin, label: 'Live Tracking' },
  { icon: FileText, label: 'Instant Invoicing' },
  { icon: Bell, label: 'Smart Alerts' },
  { icon: Camera, label: 'POD Capture' },
  { icon: Truck, label: 'Fleet View' },
  { icon: CheckCircle, label: 'Daily Checks' },
];

const PhoneFrame: React.FC<{ screen: typeof screens[0]; active: boolean }> = ({ screen, active }) => (
  <div
    className={`relative transition-all duration-500 ${
      active ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-40 z-0'
    }`}
  >
    <div className="w-36 h-64 sm:w-40 sm:h-72 bg-slate-900 rounded-[2rem] p-1.5 shadow-2xl ring-1 ring-white/10">
      <div className="w-full h-full bg-white rounded-[1.6rem] overflow-hidden flex flex-col">
        <div className="flex-shrink-0 h-5 bg-slate-900 flex items-center justify-center">
          <div className="w-12 h-2 bg-slate-800 rounded-full"></div>
        </div>
        <div className="flex-1 overflow-hidden">
          {screen.content}
        </div>
        <div className="flex-shrink-0 h-4 bg-slate-50 flex items-center justify-center">
          <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
);

const AppShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Phone mockups */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-end justify-center gap-4 sm:gap-6">
              {screens.map((screen, i) => (
                <button key={screen.label} onClick={() => setActive(i)} className="focus:outline-none">
                  <PhoneFrame screen={screen} active={active === i} />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {screens.map((screen, i) => (
                <button
                  key={screen.label}
                  onClick={() => setActive(i)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    active === i
                      ? 'bg-amber-500 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>
          </div>

          {/* App details */}
          <div className="text-white">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo-o.png"
                alt="HOSS"
                className="w-16 h-16 rounded-2xl shadow-lg flex-shrink-0 object-contain bg-white p-1"
              />
              <div>
                <h3 className="text-2xl font-bold">HOSS</h3>
                <p className="text-slate-400 text-sm">Mobile App</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              The app your drivers will actually use.
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Drivers pick it up on day one. Press a button, job's updated. Take a photo, POD's done. No chasing, no calls, no grief.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {appFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5">
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs text-white/90 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <AppStoreBadges />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
