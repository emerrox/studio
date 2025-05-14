
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateImage } from '@/ai/flows/generate-image-flow';

interface CourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string; // This will now be the default/fallback
  imageHint: string;
  tags: string[];
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = async ({ title, description, icon: Icon, imageUrl: defaultImageUrl, imageHint, tags, link }) => {
  let currentImageUrl = defaultImageUrl;
  if (!currentImageUrl.endsWith('.png') && currentImageUrl.startsWith('https://placehold.co')) {
    currentImageUrl = `${currentImageUrl}.png`;
  }


  try {
    const genOutput = await generateImage({ prompt: imageHint });
    if (genOutput.imageDataUri) {
      currentImageUrl = genOutput.imageDataUri;
    }
  } catch (error) {
    console.error(`Failed to generate image for course "${title}" (hint: ${imageHint}):`, error);
    // currentImageUrl remains the default placeholder
  }

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image 
            src={currentImageUrl} 
            alt={title} 
            fill={true} 
            className="object-cover" 
            data-ai-hint={imageHint} // Keep hint for reference or future re-generation
            unoptimized={currentImageUrl.startsWith('data:')} // Necessary for base64 data URIs
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <Icon className="absolute top-4 right-4 h-8 w-8 text-white/80" />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-foreground/70 mb-4 h-20 overflow-hidden text-ellipsis">
          {description}
        </CardDescription>
        <div className="space-x-2">
          {tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
