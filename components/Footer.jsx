'use client'
import { motion } from "framer-motion";


import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer () {
  const socialLinks = [
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaGithub />, url: "#", name: "GitHub" },
    { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaEnvelope />, url: "#", name: "Email" },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4">YourStudio</h3>
            <p className="text-gray-400 max-w-md">
              Building digital experiences that matter with cutting-edge technology and design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium mb-4 text-center md:text-right">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.url}
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} YourStudio. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};