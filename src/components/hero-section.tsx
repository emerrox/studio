import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary via-background to-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Elevate Your Skills with</span>
          <span className="block text-primary">GWO Certified Training</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
          Empowering professionals in the wind energy sector with world-class safety and technical expertise. Achieve global standards, ensure safety, and boost your career.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#courses">
              Explore Our Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden -z-10">
        <Image
          src="https://placehold.co/1920x1080"
          alt="Wind turbines background"
          layout="fill"
          objectFit="cover"
          className="opacity-10"
          data-ai-hint="wind safety"
        />
      </div>
    </section>
  );
};

export default HeroSection;
