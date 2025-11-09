import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Dashboard />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
