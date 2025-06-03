'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setShowPreview(false);
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white pt-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-2xl mx-auto"
      >
        <motion.h1 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-2 text-center text-yellow-900">
          Contact Us
        </motion.h1>
        <motion.p variants={fadeIn} className="text-gray-400 text-center mb-12">
          Have questions? We'd love to hear from you. We'll respond as soon as possible.
        </motion.p>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-500 to-emerald-600 p-1 rounded-xl mb-8"
          >
            <div className="bg-black rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                <FaCheck className="text-3xl text-green-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-300">
                Your message has been sent successfully. We'll contact you soon.
              </p>
            </div>
          </motion.div>
        ) : (
          <>
            {showPreview ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-purple-500 to-blue-600 p-1 rounded-xl mb-8"
              >
                <div className="bg-gray-900 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Message Preview</h2>
                    <button
                      onClick={() => setShowPreview(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <MdOutlineClose className="text-xl" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Name</h3>
                      <p className="text-white">{formData.name || "Not provided"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Email</h3>
                      <p className="text-white">{formData.email || "Not provided"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Subject</h3>
                      <p className="text-white">{formData.subject || "Not provided"}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Message</h3>
                      <p className="text-white whitespace-pre-line">
                        {formData.message || "Not provided"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      onClick={() => setShowPreview(false)}
                      className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeIn}
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowPreview(true);
                }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-900 rounded-lg">
                    <div className="flex items-center px-4 py-3 border-b border-gray-800">
                      <FaUser className="text-gray-500 mr-3" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="bg-transparent w-full focus:outline-none text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-900 rounded-lg">
                    <div className="flex items-center px-4 py-3 border-b border-gray-800">
                      <FaEnvelope className="text-gray-500 mr-3" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="bg-transparent w-full focus:outline-none text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-900 rounded-lg">
                    <div className="flex items-center px-4 py-3 border-b border-gray-800">
                      <FaComment className="text-gray-500 mr-3" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="bg-transparent w-full focus:outline-none text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl">
                  <div className="bg-gray-900 rounded-lg">
                    <div className="px-4 py-3">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Your Message"
                        className="bg-transparent w-full focus:outline-none text-white placeholder-gray-500 resize-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-900 to-yellow-600 rounded-xl font-medium flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Preview & Send Message
                </motion.button>
              </motion.form>
            )}
          </>
        )}

        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center text-gray-400"
        >
          <p>Alternatively, you can email us directly at:</p>
          <a 
            href="mailto:contact@deaf-link.example" 
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            https://www.linkedin.com/in/hanushashwat/
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;