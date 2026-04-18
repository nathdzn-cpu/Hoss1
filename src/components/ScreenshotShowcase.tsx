import React, { useState } from 'react';

const screens = [
  {
    label: 'Dashboard',
    tag: 'Live overview',
    src: '/screenshot-dashboard.png',
    description: 'See your whole operation at a glance. Revenue, active jobs, driver locations and alerts — all on one screen.',
  },
  {
    label: 'Jobs',
    tag: 'Job management',
    src: '/screenshot-jobs.png',
    description: 'Create, assign and track every job. Filter by status, driver or customer and see exactly where everything stands.',
  },
  {
    label: 'Invoicing',
    tag: 'Get paid faster',
    src: '/screenshot-invoice.png',
    description: 'Generate invoices from completed jobs in seconds. Push straight to Xero and track payment status without chasing.',
  },
  {
    label: 'Fleet',
    tag: 'Fleet management',
    src: '/screenshot-fleet.png',
    description: 'Keep on top of every vehicle. MOT dates, service schedules and driver assignments in one place.',
  },
];

const ScreenshotShowcase: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            See it in action
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            A proper look at the platform your office team will use every day.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {screens.map((screen, i) => (
            <button
              key={screen.label}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:text-amber-600'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>

        {/* Screenshot */}
        <div className="relative">
          {screens.map((screen, i) => (
            <div
              key={screen.label}
              className={`transition-all duration-500 ${
                active === i ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
                <img
                  src={screen.src}
                  alt={`HOSS ${screen.label} screen`}
                  className="w-full h-auto block"
                />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 text-xs font-semibold rounded-full mb-2">
                  {screen.tag}
                </span>
                <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotShowcase;
