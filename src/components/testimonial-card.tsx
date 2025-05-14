
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { generateImage } from '@/ai/flows/generate-image-flow';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string; // This will now be the default/fallback
  avatarHint: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = async ({ quote, name, role, avatarUrl: defaultAvatarUrl, avatarHint, rating }) => {
  let currentAvatarUrl = defaultAvatarUrl;
  if (!currentAvatarUrl.endsWith('.png') && currentAvatarUrl.startsWith('https://placehold.co')) {
    currentAvatarUrl = `${currentAvatarUrl}.png`;
  }

  try {
    const genOutput = await generateImage({ prompt: avatarHint });
    if (genOutput.imageDataUri) {
      currentAvatarUrl = genOutput.imageDataUri;
    }
  } catch (error) {
    console.error(`Failed to generate avatar for "${name}" (hint: ${avatarHint}):`, error);
    // currentAvatarUrl remains the default placeholder
  }
  
  return (
    <Card className="h-full flex flex-col justify-between bg-card shadow-lg p-6 rounded-lg">
      <CardContent className="p-0">
        <Quote className="w-8 h-8 text-primary mb-4 transform -scale-x-100" />
        <p className="text-foreground/80 italic mb-6 text-base leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={currentAvatarUrl} 
              alt={name} 
              fill={true} 
              className="object-cover" 
              data-ai-hint={avatarHint} // Keep hint for reference
              unoptimized={currentAvatarUrl.startsWith('data:')} // Necessary for base64 data URIs
            />
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
