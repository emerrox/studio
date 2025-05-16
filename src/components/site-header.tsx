import Link from 'next/link';
import { Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Wind className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            GWO Training Solutions
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 sm:space-x-6">
          <Link href="/#courses" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 hover:-translate-y-0.5 transform duration-150 ease-in-out">
            Courses
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 hover:-translate-y-0.5 transform duration-150 ease-in-out">
            Testimonials
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 hover:-translate-y-0.5 transform duration-150 ease-in-out">
            Contact
          </Link>
        </nav>
        {/* The "Register Now" button and its wrapping div have been removed */}
      </div>
    </header>
  );
};

export default SiteHeader;
