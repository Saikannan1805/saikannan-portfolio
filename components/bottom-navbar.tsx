'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User, Briefcase, FolderOpen, Code, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { delay } from '@/lib/constants';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function BottomNavbar() {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const els = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.15, 0.25, 0.35, 0.5] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,560px)]">
      <div className="animate-fade-in" style={delay(9)}>
        {/* compact translucent glass container */}
        <div className="
          relative rounded-2xl border border-white/14
          bg-[rgba(12,18,28,0.80)] supports-[backdrop-filter]:backdrop-blur-xl
          shadow-[0_10px_30px_rgba(0,0,0,.35)]
          px-1.5 py-1
        ">
          {/* use grid so the bar never stretches item spacing; each item takes equal space */}
          <div className="grid grid-cols-5 gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(id)}
                className={cn(
                  'w-full rounded-xl px-2 py-2 flex flex-col items-center gap-1 text-[11px]',
                  activeSection === id
                    ? 'text-white bg-white/12'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                )}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                <Icon size={16} />
                <span className="hidden sm:block">{label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
