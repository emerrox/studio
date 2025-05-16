
import { Award, BookOpenText, HardHat, Wrench, HeartPulse, Zap, Move, KeyRound, Clipboard } from 'lucide-react';
import CourseCard from './course-card';

const courses = [
  {
    title: 'GWO Basic Safety Training (BST)', // Kept original as it was not in the new list but is standard
    description: 'Essential safety skills covering First Aid, Manual Handling, Fire Awareness, Working at Heights, and Sea Survival modules.',
    icon: Award,
    tags: ['5 Modules', 'GWO Certified'],
    link: '#contact',
  },
  {
    title: 'Basic Technical Training',
    description: 'Modules: BTT Hydraulics (8h), BTT Electricity (9h), BTT Mechanics (13.5h), BTT Installation (18h).',
    icon: HardHat,
    tags: ['4 Modules', 'Technical Skills'],
    link: '#contact',
  },
  {
    title: 'Advanced Rescue Training',
    description: 'Courses: Hub, Rotor, Blade Interior Rescue (1); Nacelle, Tower, Basement Rescue (2); Industrial Rescue (1); Industrial Rescue (2); Nacelle Rescue Refresh. Possibility of Combined ART with all four modules.',
    icon: BookOpenText,
    tags: ['Specialized Rescue', 'GWO Certified'],
    link: '#contact',
  },
  {
    title: 'Blade Repair',
    description: 'Courses: GWO Blade Repair, Siemens Gamesa Blade Repair. New essential requirement to work in blade repair in the global wind sector.',
    icon: Wrench,
    tags: ['Blade Maintenance', 'GWO Certified'],
    link: '#contact',
  },
  {
    title: 'Enhanced First Aid',
    description: 'Courses: BST First Aid and Advanced First Aid. BST First Aid Refresh and Advanced First Aid Refresh.',
    icon: HeartPulse,
    tags: ['Advanced Medical', 'GWO Certified'],
    link: '#contact',
  },
  {
    title: 'Control of Hazardous Energies',
    description: 'Modules: Basic Safety Module, Electrical Safety Module, and Pressurized Fluids Safety Module.',
    icon: Zap,
    tags: ['LOTO', 'Safety Procedures'],
    link: '#contact',
  },
  {
    title: 'Slinger Signaller',
    description: 'Course: Signalling and load lifting + Hoists.',
    icon: Move,
    tags: ['Lifting Operations', 'Crane Safety'],
    link: '#contact',
  },
  {
    title: 'Wind Limited Access',
    description: 'Courses: Onshore Restricted Access and Offshore Restricted Access.',
    icon: KeyRound,
    tags: ['Restricted Access', 'Site Safety'],
    link: '#contact',
  },
  {
    title: 'Instructor Qualification Training',
    description: 'Courses: Instructor Qualification Training (IQT), Cross-Skilling Instructor Qualification Training (IQTX).',
    icon: Clipboard,
    tags: ['Train the Trainer', 'GWO Certified'],
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> {/* Adjusted grid for potentially 9 items */}
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseListings;
