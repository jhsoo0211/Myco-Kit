import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Kit from './pages/Kit';
import Impact from './pages/Impact';
import Experience from './pages/Experience';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Technology from './pages/Technology';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-spore-cream font-pretendard overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/cases" element={<CaseStudy />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
