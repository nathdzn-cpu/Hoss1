import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'hoss_cookie_consent';

export const hasConsent = () => localStorage.getItem(CONSENT_KEY) === 'accepted';

const loadMetaPixel = () => {
  if ((window as any).fbq) return;
  const f = window as any;
  const n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
  const t = document.createElement('script') as HTMLScriptElement;
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode!.insertBefore(t, s);
  f.fbq('init', '2699613123707091');
  f.fbq('track', 'PageView');
};

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      loadMetaPixel();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    loadMetaPixel();
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-semibold mb-1">We use cookies</p>
          <p className="text-sm text-slate-300">
            We use cookies to understand how you use our site and to improve your experience. See our{' '}
            <Link to="/privacy" className="underline hover:text-amber-400 transition-colors" onClick={decline}>
              Privacy Policy
            </Link>{' '}
            for details.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-white px-5 py-2 rounded-xl transition-colors"
          >
            Accept
          </button>
          <button onClick={decline} className="text-slate-500 hover:text-white transition-colors ml-1" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
