'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: { 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      }
    },
    closed: { 
      x: '-100%',
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30,
        delay: 0.1
      }
    }
  };

  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      y: 20
    }
  };

  return (
    <nav className="bg-blue-800 text-white sticky top-0 z-50 shadow-md">

      <div className="container mx-auto px-4">
        {/* Top row - always visible */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center z-50">
            <Image 
              src="/images/nisi-logo.png" 
              alt="NISI Logo" 
              width={120} 
              height={50} 
            />
          </Link>

          {/* Desktop navigation - visible on md screens and up */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/plans" className="hover:text-blue-200">Plans</Link>
            <Link href="/coverage" className="hover:text-blue-200">Coverage</Link>
            <Link href="/about" className="hover:text-blue-200">About Us</Link>
            <Link href="/support" className="hover:text-blue-200">Support</Link>
            
            <div className="h-6 w-px bg-white mx-2"></div>
            
            <Link 
              href="/login" 
              className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-100"
            >
              Customer Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu - full screen with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-blue-800 pt-24 px-6 md:hidden z-40"
            >
              <motion.div 
                className="flex flex-col h-full"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                <motion.div variants={linkVariants}>
                  <Link 
                    href="/plans" 
                    className="block text-2xl py-4 hover:text-blue-200 border-b border-blue-700"
                    onClick={toggleMenu}
                  >
                    Plans
                  </Link>
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <Link 
                    href="/coverage" 
                    className="block text-2xl py-4 hover:text-blue-200 border-b border-blue-700"
                    onClick={toggleMenu}
                  >
                    Coverage
                  </Link>
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <Link 
                    href="/about" 
                    className="block text-2xl py-4 hover:text-blue-200 border-b border-blue-700"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <Link 
                    href="/support" 
                    className="block text-2xl py-4 hover:text-blue-200 border-blue-700"
                    onClick={toggleMenu}
                  >
                    Support
                  </Link>
                </motion.div>
                
                {/* Horizontal line separator */}
                <motion.div variants={linkVariants}>
                  <hr className="border-blue-600 my-4" />
                </motion.div>
                
                <motion.div variants={linkVariants}>
                  <Link 
                    href="/login" 
                    className="block bg-white text-blue-800 px-6 py-3 rounded-lg text-xl font-semibold text-center mt-4 hover:bg-blue-100"
                    onClick={toggleMenu}
                  >
                    Customer Login
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}