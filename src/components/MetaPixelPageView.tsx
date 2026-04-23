import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hasConsent } from './CookieConsent';

const MetaPixelPageView: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (hasConsent() && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelPageView;
