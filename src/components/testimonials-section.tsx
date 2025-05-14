import TestimonialCard from './testimonial-card';

const testimonials = [
  {
    quote: "The GWO Basic Safety Training was incredibly thorough and practical. I feel much more confident working at heights now. The instructors were top-notch!",
    name: 'Alex Johnson',
    role: 'Wind Turbine Technician',
    avatarUrl: 'https://placehold.co/100x100',
    avatarHint: 'professional headshot',
    rating: 5,
  },
  {
    quote: "I completed the Advanced Rescue Training, and it exceeded my expectations. The scenarios were realistic, and the skills I learned are invaluable. Highly recommend!",
    name: 'Maria Rodriguez',
    role: 'Site Safety Supervisor',
    avatarUrl: 'https://placehold.co/100x100',
    avatarHint: 'smiling professional',
    rating: 5,
  },
  {
    quote: "The Sea Survival course was intense but essential for offshore work. The facilities and trainers were excellent. This company truly prioritizes safety.",
    name: 'David Lee',
    role: 'Offshore Wind Engineer',
    avatarUrl: 'https://placehold.co/100x100',
    avatarHint: 'person engineer',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">What Our Students Say</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Real feedback from professionals who have advanced their careers with our GWO training.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
