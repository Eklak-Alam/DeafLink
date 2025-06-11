// AboutPage.jsx (Updated for full responsiveness and design changes)
'use client'
import { motion } from "framer-motion";
import { FaAccessibleIcon, FaUserFriends, FaLightbulb } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";

const AboutPage = () => {
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

  const features = [
    {
      icon: <FaAccessibleIcon className="text-3xl text-purple-500" />,
      title: "Accessibility First",
      description: "Designed specifically for the deaf community with intuitive interfaces.",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-400" />,
      title: "Innovative Technology",
      description: "Cutting-edge speech-to-vibration conversion with directional awareness.",
    },
    {
      icon: <FaUserFriends className="text-3xl text-blue-400" />,
      title: "User-Centric",
      description: "Co-created with deaf individuals to ensure real-world usability.",
    },
    {
      icon: <IoMdGlobe className="text-3xl text-green-400" />,
      title: "Made for India",
      description: "Affordable solution tailored for 3.2 million completely deaf Indians.",
    },
  ];

  const comparisons = [
    {
      title: "Hearing Aids",
      description: "Amplify sound but ineffective for profound hearing loss.",
    },
    {
      title: "Cochlear Implants",
      description: "Surgical and very costly. Not accessible to all.",
    },
    {
      title: "Bone Conduction Wearables",
      description: "Lacks directionality and environmental awareness.",
    },
    {
      title: "Sign Language",
      description: "Needs both parties to understand it—limited in public settings.",
    },
  ];

  return (
    <div className="min-h-screen text-white py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-black">
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
          Empowering the Deaf Community
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
        >
          Deaf Link is revolutionizing communication for the deaf through innovative wearable technology.
        </motion.p>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-1 rounded-2xl bg-gradient-to-br from-yellow-900 to-cyan-400"
        >
          <div className="bg-black p-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-gray-300 text-lg">
              In India, 3.2 million people are completely deaf with limited access to affordable assistive technology.
              Traditional solutions are often expensive, non-portable, or don't provide directional sound information.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Working / Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative p-1 rounded-2xl bg-gradient-to-br from-purple-500 to-yellow-900"
        >
          <div className="bg-black p-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Our Work in Progress</h2>
            <p className="text-gray-300 text-lg">
              We are building an intuitive wearable that converts speech into directional vibrations. It aims to provide
              real-time environmental awareness for the deaf, while remaining affordable and easy to use.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why <span className="text-yellow-900">Deaf Link</span> Stands Out
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Market Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-20"
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Market Comparison
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {comparisons.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-900 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <div className="inline-flex items-center mb-12">
          <RiTeamFill className="text-4xl text-cyan-400 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold">Our Roadmap</h2>
        </div>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          We’re currently prototyping our hardware, conducting user testing, and preparing for a broader pilot launch.
          Our next milestones include clinical validation, manufacturing partnerships, and app integration.
        </p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="inline-block p-1 rounded-full bg-gradient-to-r from-yellow-900 to-pink-600"
        >
          <div className="bg-black px-8 py-3 rounded-full">
            <span className="text-lg font-medium">Join Our Mission</span>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
