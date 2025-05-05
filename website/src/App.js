import React from 'react';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import CursorTrail from './components/CursorTrail';
import ParallaxBackground from './components/ParallaxBackground';
import TitleAnimator from './components/TitleAnimator';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
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
