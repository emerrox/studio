import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Correct import for Geist font
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import CookieConsentBanner from '@/components/cookie-consent-banner'; // Added import

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GWO Landing',
  description: 'Your trusted partner for GWO safety and technical training.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        <CookieConsentBanner /> {/* Added CookieConsentBanner */}
      </body>
    </html>
  );
}
