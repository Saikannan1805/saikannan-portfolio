'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User, Briefcase, FolderOpen, Code, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Code },
  // Resume merged into Contact
  { id: 'contact', label: 'Contact', icon: Mail },
];

export function BottomNavbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50">
      <div className="liquid-glass-dark rounded-xl px-4 py-2">
        <div className="flex items-center gap-4">
          {navItems.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(id)}
              className={cn(
                'flex flex-col items-center gap-1 px-2 py-1.5 text-xs transition-all duration-300',
                activeSection === id
                  ? 'text-white bg-white/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              )}
            >
              <Icon size={16} />
              <span className="hidden sm:block">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
