'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-6 text-center relative"
    >
      <motion.div
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="text-4xl font-bold text-white">G</div>
      </motion.div>
      <nav className="flex justify-center space-x-6 text-gray-300">
        {['About', 'Services', 'Portfolios', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href="#"
            whileHover={{ color: '#A78BFA' }}
            className="transition duration-300"
          >
            {item}
          </motion.a>
        ))}
      </nav>
      <p className="text-gray-500 mt-3">
        &copy; 2024 All rights reserved by <a href="#" className="text-purple-400">ADS</a>
      </p>

      {showScroll && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-purple-500 p-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
        >
          <FaArrowUp className="text-white" />
        </motion.button>
      )}
    </motion.footer>
  );
}
