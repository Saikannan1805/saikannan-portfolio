import { About } from './(sections)/about';
import { Experience } from './(sections)/experience';
import { Projects } from './(sections)/projects';
import { Skills } from './(sections)/skills';
import { Contact } from './(sections)/contact';
import { BottomNavbar } from '@/components/bottom-navbar';
import { ParallaxBackground } from '@/components/parallax-background';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* === Parallax Background Layer === */}
      <ParallaxBackground src="/bg1.jpg" startPercent={100} endPercent={0} />

      {/* === Main Content Sections === */}
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />

      {/* === Bottom Navbar === */}
      <BottomNavbar />
    </div>
  );
}
