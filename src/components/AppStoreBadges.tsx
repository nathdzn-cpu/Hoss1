import React from 'react';

const AppStoreBadges: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}>
    <a
      href="https://apps.apple.com/gb/app/hoss/id6760239877"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download HOSS on the App Store"
    >
      <img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
        alt="Download on the App Store"
        className="h-20 w-auto"
      />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=uk.co.thehoss.hoss&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get HOSS on Google Play"
    >
      <img
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt="Get it on Google Play"
        className="h-[116px] w-auto -my-[13px]"
      />
    </a>
  </div>
);

export default AppStoreBadges;
