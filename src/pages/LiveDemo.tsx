import React from 'react';
import { DemoProvider } from '../components/demo/DemoContext';
import { OfficePane } from '../components/demo/OfficePane';
import { DriverPane } from '../components/demo/DriverPane';
import { GuideOverlay } from '../components/demo/GuideOverlay';

const LiveDemo: React.FC = () => (
  <div className="bg-slate-50 dark:bg-slate-900">
    {/* Header */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        See it in action
      </h2>
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        A proper look at the platform your office team will use every day.
      </p>
      <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
        This is a rough guide on how HOSS works — the live platform is more in depth.
      </p>
    </div>

    {/* Demo */}
    <div className="relative mx-4 sm:mx-6 lg:mx-8 mb-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700" style={{ height: 680 }}>
      <style>{`
        @keyframes pulse-btn {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <DemoProvider>
        <div style={{ height: '100%', display: 'flex', position: 'relative', background: '#F0F0F0' }}>
          <OfficePane />
          <DriverPane />
          <GuideOverlay />
        </div>
      </DemoProvider>
    </div>
  </div>
);

export default LiveDemo;
