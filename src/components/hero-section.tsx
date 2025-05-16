
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroImageUrl = "/images/imagen.png"; // Using local image

  return (
    <section className="relative py-20 md:py-32"> {/* Removed opaque background gradient */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden -z-10">
        <Image
          src={heroImageUrl}
          alt="GWO certified training for wind energy professionals"
          fill={true}
          className="object-cover" // Image is now fully opaque
          priority 
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Added dark overlay for text contrast */}
      </div>
      <div className="container mx-auto px-4 text-center relative z-0"> {/* Ensure text content is above overlay */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white"> {/* Changed text to white for better contrast on dark overlay */}
          <span className="block">Elevate Your Skills with</span>
          <span className="block text-primary">GWO Certified Training</span> {/* Primary color for emphasis */}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 sm:text-xl md:text-2xl"> {/* Changed text to light gray */}
          Empowering professionals in the wind energy sector with world-class safety and technical expertise. Achieve global standards, ensure safety, and boost your career.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#courses">
              Explore Our Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="border-white text-white bg-transparent hover:bg-white hover:text-primary focus-visible:ring-white"
          >
            <Link href="#contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
