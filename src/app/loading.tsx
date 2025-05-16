
// src/app/loading.tsx
import { Loader2 } from 'lucide-react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground fixed inset-0 z-[100]">
      <Loader2 className="h-16 w-16 animate-spin text-primary mb-6" />
      <p className="text-xl text-muted-foreground tracking-wider">
        Loading...
      </p>
    </div>
  );
}
