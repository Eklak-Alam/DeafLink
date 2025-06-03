'use client'
import { motion } from "framer-motion";
import { FaAssistiveListeningSystems, FaMobile, FaUserCog } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";
import { RiVolumeVibrateFill } from "react-icons/ri";

const ServicesPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      icon: <RiVolumeVibrateFill className="text-4xl text-purple-500" />,
      title: "Speech-to-Vibration Conversion",
      description: "Real-time conversion of speech into customizable vibration patterns for intuitive understanding.",
      features: [
        "Multiple vibration patterns",
        "Adjustable intensity levels",
        "Low latency processing"
      ]
    },
    {
      icon: <BsSoundwave className="text-4xl text-blue-400" />,
      title: "Sound Direction Detection",
      description: "Identifies the direction of sound sources to enhance spatial awareness.",
      features: [
        "360° sound detection",
        "Dual vibration motors for direction",
        "Environmental noise filtering"
      ]
    },
    {
      icon: <FaAssistiveListeningSystems className="text-4xl text-yellow-400" />,
      title: "Customizable Alerts",
      description: "Programmable vibration patterns for important sounds like alarms or doorbells.",
      features: [
        "Learn mode for new sounds",
        "Priority alert system",
        "Cloud-based pattern library"
      ]
    },
    {
      icon: <FaMobile className="text-4xl text-green-400" />,
      title: "Mobile App Integration",
      description: "Companion app for device customization and additional features.",
      features: [
        "Pattern customization",
        "Usage analytics",
        "Firmware updates",
        "Community features"
      ]
    },
    {
      icon: <IoMdSettings className="text-4xl text-pink-500" />,
      title: "Personalization Settings",
      description: "Tailor the device to your specific needs and preferences.",
      features: [
        "Sensitivity adjustment",
        "Battery optimization",
        "Vibration pattern creation",
        "User profiles"
      ]
    },
    {
      icon: <FaUserCog className="text-4xl text-cyan-400" />,
      title: "Accessibility Support",
      description: "Comprehensive support and training for new users.",
      features: [
        "In-person training",
        "Video tutorials in ISL",
        "24/7 customer support",
        "Community forums"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white py-16 pt-32  px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center mb-20"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-900 to-white"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
        >
          Comprehensive solutions designed to empower the deaf community through innovative technology.
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-900 border-2 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="inline-block p-1 rounded-2xl bg-gradient-to-r from-yellow-900 to-blue-600 mb-8"
        >
          <div className="bg-black px-8 py-4 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Deaf Link?</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have transformed their communication experience with our innovative wearable.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-yellow-900 rounded-full font-medium hover:opacity-90 transition-opacity">
              Get Started Today
            </button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="inline-block p-1 rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-900"
        >
          <div className="bg-black px-8 py-4 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer enterprise solutions and custom implementations for organizations.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-900 to-pink-500 rounded-full font-medium hover:opacity-90 transition-opacity">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ServicesPage;