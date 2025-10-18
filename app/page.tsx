import { About } from './(sections)/about';
import { Experience } from './(sections)/experience';
import { Projects } from './(sections)/projects';
import { Skills } from './(sections)/skills';
import { Contact } from './(sections)/contact';
import { BottomNavbar } from '@/components/bottom-navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* Merged Contact + Resume lives here */}
      <Contact />
      <BottomNavbar />
    </div>
  );
}
