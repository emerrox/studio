
// src/components/cookie-consent-banner.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, CheckCircle, XCircle } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'gwo_cookie_consent';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 m-4 p-4 md:p-6 shadow-2xl border-t-4 border-primary">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start text-sm text-foreground/80">
          <Cookie className="h-6 w-6 mr-3 text-primary flex-shrink-0 mt-1" />
          <p>
            This website uses cookies to ensure you get the best experience. By clicking "Accept", you agree to our use of cookies. 
            Learn more in our{' '}
            <Link href="/cookie-policy" className="underline hover:text-primary transition-colors">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <div className="flex flex-shrink-0 gap-3 mt-4 md:mt-0">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            <XCircle className="mr-2 h-4 w-4" />
            Decline
          </Button>
          <Button variant="default" size="sm" onClick={handleAccept} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <CheckCircle className="mr-2 h-4 w-4" />
            Accept
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CookieConsentBanner;
