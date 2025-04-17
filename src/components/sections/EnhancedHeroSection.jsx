/*
 * File: src/components/sections/EnhancedHeroSection.jsx
 * Description: Upgraded hero section with animations and dynamic text rotation
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedHeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = [
    "Digital Marketing",
    "Web Development",
    "Brand Strategy",
    "Social Media",
    "Content Creation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-light-bg via-white to-light-bg py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-purple opacity-5 rounded-full"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary-orange opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-60 h-60 bg-primary-purple opacity-5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-semibold text-primary-orange tracking-widest uppercase mb-2">TRANSFORMING BRANDS</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-purple mb-6">
              Smart Media
            </h1>
            <div className="flex items-center h-12 mb-6">
              <span className="text-lg md:text-xl text-dark-text mr-2">
                Specialists in
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl font-bold text-primary-orange"
                >
                  {rotatingTexts[currentText]}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-lg text-light-text mb-8 max-w-lg">
              To assist firms aiming to expand globally, a go-to-market strategy and execution specialist for Business marketing solutions
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn btn-primary">
                Discover More
              </Link>
              <Link to="/contact" className="btn border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white hover:-translate-y-1 transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Right side image */}
          <motion.div 
            className="md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Social media image with border */}
            <div 
              className="bg-white rounded-lg shadow-xl border-2 border-primary-orange overflow-hidden p-3"
              style={{ 
                width: '300px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src="/social-media-ads.png" 
                alt="Social Media Ads"
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;