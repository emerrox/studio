import Link from 'next/link';
import { Wind } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="bg-secondary border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* Adjusted grid to 2 cols */}
          <div className="flex items-center justify-center md:justify-start">
            <Wind className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold">GWO Training Solutions</span>
          </div>
          
          <nav className="flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-foreground/80"> {/* Adjusted nav alignment */}
            <Link href="#courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link> {/* Placeholder */}
          </nav>

          {/* Social media links removed from here */}
        </div>
        <div className="mt-8 pt-8 border-t border-border/60 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} GWO Training Solutions. All rights reserved.</p>
          <p className="mt-1">Designed by an Expert Designer for Professionals.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
