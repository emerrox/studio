
import { ShieldCheck, RefreshCw, ArrowUpFromLine, HardHat, BookOpenText, Wrench, HeartPulse, Zap, Move, KeyRound, Clipboard } from 'lucide-react';
import CourseCard from './course-card';

const courses = [
  {
    title: 'Basic Safety Training',
    description: 'Core safety skills: First Aid, Manual Handling, Fire Awareness, Working at Heights, and Sea Survival modules.',
    icon: ShieldCheck,
    tags: ['5 Modules', 'GWO Certified', '28-35h'],
    link: '#contact',
  },
  {
    title: 'Basic Safety Training Refresh',
    description: 'Refresher for core safety skills: First Aid, Manual Handling, Fire Awareness, Working at Heights, Sea Survival. Online Partial available.',
    icon: RefreshCw,
    tags: ['5 Modules', 'GWO Refresh', '18-25h', 'Online Option'],
    link: '#contact',
  },
  {
    title: 'Lift Training',
    description: 'Training for lift users (4h), commissioning & inspection (7h), and full operation including installation & maintenance (14h).',
    icon: ArrowUpFromLine,
    tags: ['Specialized Lift', 'Up to 25h', 'Phased Modules'],
    link: '#contact',
  },
  {
    title: 'Basic Technical Training',
    description: 'Technical training in Hydraulics (8h), Electricity (9h), Mechanics (13.5h), and Installation (18h).',
    icon: HardHat,
    tags: ['4 Modules', 'Technical', '29-30.5h'],
    link: '#contact',
  },
  {
    title: 'Advanced Rescue Training',
    description: 'Advanced rescue: Hub/Rotor/Blade Interior, Nacelle/Tower/Basement, Industrial Rescue (1&2), Nacelle Refresh. Combined ART option.',
    icon: BookOpenText,
    tags: ['Specialized Rescue', 'GWO Certified', '21h Combined'],
    link: '#contact',
  },
  {
    title: 'Blade Repair',
    description: 'GWO & Siemens Gamesa Blade Repair courses. Essential new requirement for global wind sector blade repair.',
    icon: Wrench,
    tags: ['Blade Maintenance', 'GWO Certified', '70h'],
    link: '#contact',
  },
  {
    title: 'Enhanced First Aid',
    description: 'BST First Aid, Advanced First Aid, and Refresher courses for both.',
    icon: HeartPulse,
    tags: ['Advanced Medical', 'GWO Certified', '20h'],
    link: '#contact',
  },
  {
    title: 'Control of Hazardous Energies',
    description: 'Modules: Basic Safety, Electrical Safety, and Pressurized Fluids Safety.',
    icon: Zap,
    tags: ['LOTO', 'Hazard Control', '22h'],
    link: '#contact',
  },
  {
    title: 'Slinger Signaller',
    description: 'Course on signalling, load lifting, and hoists.',
    icon: Move,
    tags: ['Lifting Operations', 'Crane Safety', '14h'],
    link: '#contact',
  },
  {
    title: 'Wind Limited Access',
    description: 'Courses for Onshore Restricted Access and Offshore Restricted Access.',
    icon: KeyRound,
    tags: ['Restricted Access', 'Site Safety', '7h'],
    link: '#contact',
  },
  {
    title: 'Instructor Qualification Training',
    description: 'Instructor Qualification Training (IQT) and Cross-Skilling Instructor Qualification Training (IQTX).',
    icon: Clipboard,
    tags: ['Train the Trainer', 'GWO Certified', '72h'],
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"> {/* Adjusted for better layout with more items */}
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseListings;
