import { Award, BookOpenText, Anchor, HardHat } from 'lucide-react';
import CourseCard from './course-card';

const courses = [
  {
    title: 'GWO Basic Safety Training (BST)',
    description: 'Essential safety skills covering First Aid, Manual Handling, Fire Awareness, Working at Heights, and Sea Survival modules.',
    icon: Award,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'safety training',
    tags: ['5 Modules', 'GWO Certified'],
    link: '#contact',
  },
  {
    title: 'GWO Basic Technical Training (BTT)',
    description: 'Fundamental technical knowledge for wind turbine technicians, including mechanical, electrical, and hydraulic systems.',
    icon: HardHat,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'technical turbine',
    tags: ['3 Modules', 'Hands-on'],
    link: '#contact',
  },
  {
    title: 'GWO Advanced Rescue Training (ART)',
    description: 'Advanced techniques for rescue operations in various wind turbine environments. Builds upon BST Working at Heights.',
    icon: BookOpenText, // Using BookOpenText as a suitable icon
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'rescue height',
    tags: ['High-Risk', 'Specialized'],
    link: '#contact',
  },
  {
    title: 'GWO Sea Survival Training',
    description: 'Specialized training for personnel working offshore, covering emergency procedures and survival techniques at sea.',
    icon: Anchor,
    imageUrl: 'https://placehold.co/600x400',
    imageHint: 'offshore survival',
    tags: ['Offshore', 'Safety Critical'],
    link: '#contact',
  },
];

const CourseListings = () => {
  return (
    <section id="courses" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our GWO Certified Courses</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Comprehensive training programs designed to meet global wind industry standards.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseListings;
