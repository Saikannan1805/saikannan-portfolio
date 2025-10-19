import { About } from './(sections)/about';
import { Experience } from './(sections)/experience';
import { Projects } from './(sections)/projects';
import { Skills } from './(sections)/skills';
import { Contact } from './(sections)/contact';
import { BottomNavbar } from '@/components/bottom-navbar';
import { ParallaxBackground } from '@/components/parallax-background';

// Rendering the home page that combines all sections in one scrollable view
export default function Home() {
  return (
    // Root wrapper ensures full-height layout with hidden overflow
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layer with parallax scroll effect */}
      <ParallaxBackground src="/bg1.jpg" startPercent={100} endPercent={0} />

      {/* Core sections of the portfolio */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      {/* Fixed bottom navigation bar for quick section access */}
      <BottomNavbar />
    </div>
  );
}
