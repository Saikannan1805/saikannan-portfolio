import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center px-3 py-8 md:px-4 md:py-12",
        className
      )}
    >
      <div className="w-full max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
}
