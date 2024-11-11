import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ClientSignup from './pages/ClientSignup';
import ProfessionalSignup from './pages/ProfessionalSignup';
import ClientDashboard from './pages/ClientDashboard';
import ProfessionalDashboard from './pages/ProfessionalDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/client-signup" element={<ClientSignup />} />
            <Route path="/professional-signup" element={<ProfessionalSignup />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;