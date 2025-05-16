import SiteHeader from '@/components/site-header';
import HeroSection from '@/components/hero-section';
import AboutGwoSection from '@/components/about-gwo-section'; // Added import
import CourseListings from '@/components/course-listings';
import TestimonialsSection from '@/components/testimonials-section';
import ContactFormSection from '@/components/contact-form';
import SiteFooter from '@/components/site-footer';

export default function GwoLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutGwoSection /> {/* Added new section */}
        <CourseListings />
        <TestimonialsSection />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </div>
  );
}