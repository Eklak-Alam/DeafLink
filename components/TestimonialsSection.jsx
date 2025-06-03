'use client'
import { motion } from "framer-motion";


export function TestimonialsSection () {
  const testimonials = [
    {
      quote: "This team transformed our digital presence completely. The results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "👩"
    },
    {
      quote: "Incredible attention to detail and communication throughout the project lifecycle.",
      author: "Michael Chen",
      role: "Product Manager, InnovateCo",
      avatar: "👨"
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
            Client <span className="text-blue-400">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-0.5 rounded-xl"
            >
              <div className="bg-gray-900 h-full p-8 rounded-xl">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};