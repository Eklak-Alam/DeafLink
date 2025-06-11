'use client'
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaGithub />, url: "#", name: "GitHub" },
    { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaEnvelope />, url: "#", name: "Email" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-900 to-purple-600 bg-clip-text text-transparent">
              Deaf Link
            </h3>
            <p className="text-gray-400 text-lg max-w-md">
              Empowering millions with innovative assistive technology. Join our mission to make the world more accessible.
            </p>

            <div className="space-y-2">
              <h4 className="text-lg font-medium">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.url}
                    aria-label={link.name}
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-yellow-600 transition-all"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Logo Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-40 h-40 rounded-full border-4 border-yellow-600 bg-white overflow-hidden shadow-lg">
              <img
                src="/logo.png" // Replace with your logo path
                alt="Deaf Link Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Deaf Link. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4 flex-wrap">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
