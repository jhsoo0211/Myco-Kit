import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Story from './pages/Story';
import Mission from './pages/Mission';
import Partnership from './pages/Partnership';
import Kit from './pages/Kit';
import Technology from './pages/Technology';
import Impact from './pages/Impact';
import CaseStudy from './pages/CaseStudy';
import Experience from './pages/Experience';
import CAD from './pages/CAD';
import Funding from './pages/Funding';
import Contact from './pages/Contact';
import Donation from './pages/Donation';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-white font-body overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      {/* 홈은 pt-0 (히어로가 full-screen), 다른 페이지는 pt-20 */}
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Story />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/partnership" element={<Partnership />} />
          {/* Product */}
          <Route path="/kit" element={<Kit />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/cases" element={<CaseStudy />} />
          {/* Experience */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/cad" element={<CAD />} />
          {/* Other */}
          <Route path="/funding" element={<Funding />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
