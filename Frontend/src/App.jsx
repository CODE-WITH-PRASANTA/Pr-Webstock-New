import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/home/home';
import Service from './pages/service/service';
import Navbar from './components/navbar/navbar';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Pricing from './pages/Pricing/Pricing';
// import Projects from './pages/Projects/Projects';
import { PacmanLoader } from 'react-spinners';
import Adsection from './pages/Ads/Ads';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust spinner duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {loading ? (
        <div className="spinner-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <PacmanLoader color="#56bbff" size={25} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/ads' element={<Adsection />}/>
            {/* <Route path='/projects' element={<Projects />} /> */}
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
