// src/components/about-gwo-section.tsx
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react'; // Using ShieldCheck as a relevant icon for safety standards

const AboutGwoSection = () => {
  const imageUrl = '/images/imagen2.png'; // Assumes imagen2.png is in public/images/

  return (
    <section id="about-gwo" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary mb-6 flex items-center">
                <ShieldCheck className="w-10 h-10 mr-3 text-primary" />
                What is GWO Certification?
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Global Wind Organisation (GWO) is a non-profit body founded by leading wind turbine
                manufacturers and owners. GWO certification ensures that technicians working in the
                wind industry meet high standards of safety and technical competence through
                standardized training programs.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                This global standard enhances safety, reduces risks,
                and promotes a skilled workforce, recognized worldwide.
              </p>
            </div>
            {/* Optional: Could add a button or link here if needed, e.g.,
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#courses">Learn About Our GWO Courses</Link>
            </Button>
            */}
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-xl rounded-lg">
              <div className="relative aspect-video"> {/* Common aspect ratio for images */}
                <Image
                  src={imageUrl}
                  alt="Wind industry professionals with GWO certification"
                  fill
                  className="object-cover"
                  data-ai-hint="wind turbine safety"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGwoSection;