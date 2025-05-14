import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  avatarHint: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatarUrl, avatarHint, rating }) => {
  return (
    <Card className="h-full flex flex-col justify-between bg-card shadow-lg p-6 rounded-lg">
      <CardContent className="p-0">
        <Quote className="w-8 h-8 text-primary mb-4 transform -scale-x-100" />
        <p className="text-foreground/80 italic mb-6 text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={avatarUrl} alt={name} layout="fill" objectFit="cover" data-ai-hint={avatarHint} />
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
