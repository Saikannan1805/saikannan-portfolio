import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// Wrapper component for consistent section spacing and layout alignment
export function Container({ children, className, id }: ContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        // scroll-mt ensures correct offset for anchor navigation
        "min-h-screen flex items-center justify-center px-3 py-8 md:px-4 md:py-12 scroll-mt-24 md:scroll-mt-28",
        className
      )}
    >
      {/* Centered content with a fixed max width */}
      <div className="w-full max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}
