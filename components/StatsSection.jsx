'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function StatsSection () {
  const stats = [
    { number: 150, label: "Projects Completed", plus: "+" },
    { number: 95, label: "Happy Clients", plus: "%" },
    { number: 10, label: "Years Experience", plus: "+" },
    { number: 24, label: "Team Members", plus: "" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <AnimatedNumber value={stat.number} />{stat.plus}
              </div>
              <p className="text-gray-400 uppercase text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper component for number animation
const AnimatedNumber = ({ value }) => {
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    const duration = 2000;
    const start = 0;
    const increment = value / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        current = value;
      }
      setCurrentValue(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{currentValue}</>;
};