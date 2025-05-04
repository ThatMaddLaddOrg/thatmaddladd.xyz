import React from 'react';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CursorTrail from './components/CursorTrail';
import ParallaxBackground from './components/ParallaxBackground';
import TitleAnimator from './components/TitleAnimator';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ParallaxBackground />
      <CursorTrail />
      <TitleAnimator />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
