import { CursorSpotlight } from '@/components/CursorSpotlight';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { CaseStudies } from '@/components/CaseStudies';
import { Certificates } from '@/components/Certificates';
import { Statistics } from '@/components/Statistics';
import { GitHubSection } from '@/components/GitHubSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Projects />
        <Skills />
        <Experience />
        <CaseStudies />
        <Certificates />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
