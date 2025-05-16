
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, UserCircle } from 'lucide-react'; // Added UserCircle

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, rating }) => {

  return (
    <Card className="h-full flex flex-col justify-between bg-card shadow-lg p-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:-translate-y-1">
      <CardContent className="p-0">
        <Quote className="w-8 h-8 text-primary mb-4 transform -scale-x-100" />
        <p className="text-foreground/80 italic mb-6 text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 flex items-center justify-center bg-muted">
            {/* Replaced Image with UserCircle icon */}
            <UserCircle className="h-10 w-10 text-foreground/50" />
          </div>
          <div>
            <p className="font-semibold text-md text-primary">{name}</p>
            <p className="text-xs text-foreground/60">{role}</p>
            <div className="flex mt-1">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
