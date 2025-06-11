'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from(linksRef.current?.children, {
      opacity: 0,
      y: -10,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      ease: 'back.out',
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out',
    });
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const mobileMenuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#f59e0b',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        ref={navbarRef}
        initial={{ opacity: 0, y: -10 }}  // Reduced from -20 to -10
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 px-6 py-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo with text */}
          <div ref={logoRef} className="flex items-center space-x-2">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D0BAQGMUieZc78dDg/company-logo_200_200/company-logo_200_200/0/1724694096011?e=1754524800&v=beta&t=jrlF0NhHRGMa7SDAbCjTOTChpT7zwpy1uLMsWnfr65k"
              alt="Logo"
              className="h-10 w-10 object-contain rounded-4xl"
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white"
            >
              Deaf Link
            </motion.span>
          </div>

          {/* Desktop Links */}
          <div
            ref={linksRef}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover="hover"
                whileTap="tap"
                variants={linkVariants}
              >
                <Link href={link.href}>
                  <span className="text-white font-medium text-sm uppercase tracking-wider">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Connect Button */}
          <motion.div
            ref={buttonRef}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <button className="bg-yellow-900 cursor-pointer text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2">
              <span>Connect to us</span>
              <FiArrowRight className="inline" />
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-black/90 z-50 p-6 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white focus:outline-none"
              >
                <FiX size={28} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    delay: 0.1 * navLinks.indexOf(link),
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={link.href}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="text-white text-2xl font-medium"
                    >
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-900 cursor-pointer text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 mt-8"
              >
                <span>Connect to us</span>
                <FiArrowRight className="inline" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;