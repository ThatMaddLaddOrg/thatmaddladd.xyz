import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalStyle = {
  background: '#1b1b1b',
  padding: '2rem',
  borderRadius: '1rem',
  maxWidth: '600px',
  width: '90%',
  color: '#fff',
  boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
  textAlign: 'center',
  position: 'relative',
};

const closeStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'transparent',
  border: 'none',
  color: '#a855f7',
  fontSize: '1.5rem',
  cursor: 'pointer',
};

const AboutModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={backdropStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            style={modalStyle}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button style={closeStyle} onClick={onClose}>
              &times;
            </button>
            <h2 style={{ color: '#a855f7', marginBottom: '1rem' }}>
              <i className="fas fa-user-astronaut" style={{ marginRight: '0.5rem' }}></i>
              About Me
            </h2>
            <p style={{ lineHeight: 1.6, color: '#ccc' }}>
              I am ThatMaddLadd — a Roleplayer, Twitch streamer, Discord community Moderator, and Developer.
              <br /><br />
              I love building cool things, making chaotic stuff and connecting with great communities like <strong>Schedule I</strong> and <strong>Free2RP</strong>.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
                <a href="https://twitch.tv/thatmaddladd" target="_blank" rel="noreferrer" style={{ color: '#9146ff', marginRight: '1rem' }}>
                    <i className="fab fa-twitch"></i> Twitch
                </a>
                <a href="https://github.com/thatmaddladd" target="_blank" rel="noreferrer" style={{ color: '#a855f7', marginRight: '1rem' }}>
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://twitter.com/thatmaddladd" target="_blank" rel="noreferrer" style={{ color: '#1da1f2' }}>
                    <i className="fab fa-x-twitter"></i> X / Twitter
                </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
