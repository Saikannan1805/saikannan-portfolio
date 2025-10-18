import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'panel';
}

export function Glass({ children, className, variant = 'default' }: GlassProps) {
  const glassClasses = variant === 'panel' ? 'glass-panel-dark' : 'liquid-glass-dark';

  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        glassClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
