
import Link from 'next/link';
import { Wind } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="bg-secondary border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <Wind className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">GWO Training Solutions</span>
            </div>
            <p className="text-xs text-foreground/60 text-center md:text-left">
              Your trusted partner for GWO safety and technical training.
            </p>
          </div>
          
          <nav className="flex flex-col sm:flex-row justify-center md:justify-end items-center md:items-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-foreground/80">
            <Link href="/#courses" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-150 ease-in-out">Courses</Link>
            <Link href="/#testimonials" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-150 ease-in-out">Testimonials</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-150 ease-in-out">Contact Us</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-150 ease-in-out">Cookie Policy</Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-150 ease-in-out">Privacy Policy</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-border/60 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} GWO Training Solutions. All rights reserved.</p>
          <p className="mt-1">Powered by Total HSE</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
