import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import Safety from '@/components/Safety';
import Timeline from '@/components/Timeline';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Equipment />
      <Safety />
      <Timeline />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
