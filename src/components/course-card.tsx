
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon: Icon, tags, link }) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:-translate-y-1">
      <CardHeader className="p-6 flex justify-center items-center bg-muted/30 h-48">
        <Icon className="h-24 w-24 text-primary" />
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
