'use client'

import React from "react";
import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { BsEye, BsHeart, BsLightbulb } from "react-icons/bs";

export function MissionVisionSection() {
  const missionVision = [
    {
      type: "Mission",
      icon: <FiTarget className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Our Mission",
      content: "To create an inclusive digital ecosystem that empowers the deaf community through innovative technology, fostering meaningful connections and breaking down communication barriers worldwide.",
      gradient: "bg-white",
      bgGradient: "bg-gray-800",
      emoji: "🎯",
      features: ["Inclusive Technology", "Global Accessibility", "Community Empowerment"]
    },
    {
      type: "Vision",
      icon: <BsEye className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: "Our Vision",
      content: "A world where communication knows no boundaries, where every deaf individual has equal access to opportunities, connections, and experiences through seamless, accessible technology solutions.",
      gradient: "bg-white",
      bgGradient: "bg-gray-800",
      emoji: "👁️",
      features: ["Boundary less Communication", "Equal Opportunities", "Seamless Access"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-white">
              Our Mission
            </span>{" "}
            <span className="text-white">&</span>{" "}
            <span className="bg-clip-text text-transparent bg-white">
              Vision
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Driven by passion, guided by purpose - discover what motivates us to build a more inclusive world
          </motion.p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateY: index % 2 === 0 ? 5 : -5,
                scale: 1.02
              }}
              className="group relative h-full"
              style={{ perspective: "1000px" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-black backdrop-blur-sm border border-gray-500 group-hover:border-gray-300 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-500 h-full flex flex-col">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-5"
                      animate={{
                        x: [0, Math.random() * 30 - 15],
                        y: [0, Math.random() * 30 - 15],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Header */}
                <div className="relative z-10 flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 sm:p-4 rounded-xl sm:rounded-4xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-4xl transition-shadow duration-300`}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-4xl sm:text-5xl lg:text-6xl mb-2"
                    >
                      {item.emoji}
                    </motion.div>
                    <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 flex-1 relative z-10"
                >
                  {item.content}
                </motion.p>

                {/* Features */}
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-center gap-3 sm:gap-4 group/feature cursor-pointer"
                    >
                      <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${item.gradient} group-hover/feature:scale-125 transition-transform duration-300`} />
                      <span className="text-gray-400 group-hover/feature:text-white transition-colors duration-300 text-sm sm:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}