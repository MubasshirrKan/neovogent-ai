import Hero from './components/Hero';
import Story from './components/Story';
import VideoSection from './components/VideoSection';
import Departments from './components/Departments';
import Privacy from './components/Privacy';
import Clients from './components/Clients';
import SaveMoney from './components/SaveMoney';
import CTA from './components/CTA';
import Stars from './components/Stars';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="bg-space-900 min-h-screen text-zinc-900 w-full font-sans antialiased relative">
      <Stars />
      <Hero />
      <Story />
      <VideoSection />
      <Departments />
      <Privacy />
      <Clients />
      <SaveMoney />
      <CTA />
      <Footer />
    </main>
  );
}
