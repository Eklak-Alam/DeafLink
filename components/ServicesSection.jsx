'use client'

import { motion } from "framer-motion";

export function ServicesSection () {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites with React, Next.js, and Tailwind CSS.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful interfaces that prioritize user experience and conversion.",
      icon: "🎨"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with React Native.",
      icon: "📱"
    },
    {
      title: "E-commerce",
      description: "High-converting online stores with Shopify and custom solutions.",
      icon: "🛒"
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-purple-400">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 rounded-xl"
            >
              <div className="bg-gray-900 h-full p-6 rounded-xl">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};