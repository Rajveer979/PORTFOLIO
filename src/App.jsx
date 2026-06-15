import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


