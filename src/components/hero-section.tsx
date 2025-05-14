
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { generateImage } from '@/ai/flows/generate-image-flow';

const HeroSection = async () => {
  const imageHint = "wind safety";
  const defaultImageUrl = "https://placehold.co/1920x1080.png";
  let imageUrl = defaultImageUrl;

  try {
    const genOutput = await generateImage({ prompt: imageHint });
    if (genOutput.imageDataUri) {
      imageUrl = genOutput.imageDataUri;
    }
  } catch (error) {
    console.error(`Failed to generate image for hero section (hint: ${imageHint}):`, error);
    // imageUrl remains the default placeholder
  }

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
          src={imageUrl}
          alt="Wind turbines background with a focus on safety measures"
          fill={true}
          className="object-cover opacity-10"
          priority // For LCP images
          unoptimized={imageUrl.startsWith('data:')} // Necessary for base64 data URIs if not domain-configured
        />
      </div>
    </section>
  );
};

export default HeroSection;
