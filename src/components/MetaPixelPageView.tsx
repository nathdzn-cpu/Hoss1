import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { hasConsent } from './CookieConsent';

const MetaPixelPageView: React.FC = () => {
  const location = useLocation();
  const mounted = useRef(false);

  useEffect(() => {
    // Skip the initial mount — loadMetaPixel() already fires PageView on load
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (hasConsent() && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelPageView;
