import Link from 'next/link';
import { Wind, Linkedin, Facebook, Twitter } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="bg-secondary border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Wind className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold">GWO Training Solutions</span>
          </div>
          
          <nav className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-foreground/80">
            <Link href="#courses" className="hover:text-primary transition-colors">Courses</Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact Us</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link> {/* Placeholder */}
          </nav>

          <div className="flex justify-center md:justify-end space-x-4">
            <Link href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
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
