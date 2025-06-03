'use client'


import { motion } from "framer-motion";
import { BsMicrosoft } from "react-icons/bs";
import { SiNetflix, SiSpotify, SiApple, SiAmazon } from "react-icons/si";

export function ClientsSection ()  {
  const logos = [
    { icon: <SiNetflix className="w-full h-full" />, name: "Netflix" },
    { icon: <SiSpotify className="w-full h-full" />, name: "Spotify" },
    { icon: <SiApple className="w-full h-full" />, name: "Apple" },
    { icon: <BsMicrosoft  t className="w-full h-full" />, name: "Microsoft" },
    { icon: <SiAmazon className="w-full h-full" />, name: "Amazon" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm uppercase tracking-widest text-gray-400 mb-8"
        >
          Trusted by industry leaders
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-24 h-8 text-gray-300 hover:text-white transition-colors">
                {logo.icon}
                <span className="sr-only">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
