import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Deeprap IT Solutions
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-lg">
            A young, dynamic startup delivering modern IT solutions,
            web development and AI-driven services to help businesses grow.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto p-8 space-y-20">
        {/* Company Intro */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-cyan-300">Who We Are</h2>
            <p className="text-gray-300 text-lg">
              Deeprap IT Solutions Pvt Ltd is a young, dynamic startup focused
              on modern IT solutions, web development, and AI-driven services.
              We help businesses grow by delivering innovative technology
              solutions.
            </p>
            <p className="text-gray-300 text-lg">
              Our team thrives on creativity, efficiency and a customer-first mindset.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Startup Team"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-700 to-blue-800 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-semibold text-white mb-3">Our Vision</h3>
            <p className="text-gray-200">
              To become a leading IT solutions provider, blending technology and
              creativity to empower businesses globally.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-gray-200">
              To deliver scalable, AI-driven and user-friendly solutions that
              simplify complex business processes and enhance efficiency.
            </p>
          </motion.div>
        </div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10 text-cyan-300">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web & Mobile Apps",
                desc: "Custom web and mobile application development using modern frameworks.",
                img: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
              },
              {
                title: "AI & Machine Learning",
                desc: "Data-driven AI and ML solutions for predictive analytics and automation.",
                img: "https://cdn-icons-png.flaticon.com/128/2103/2103787.png",
              },
              {
                title: "IT Consulting",
                desc: "Helping startups and businesses with IT strategy and digital transformation.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07, y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white text-gray-900 p-8 rounded-2xl shadow-xl text-center hover:shadow-cyan-500/30 border border-gray-200"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-md"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-cyan-400"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-cyan-700">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-700 to-fuchsia-700 p-10 rounded-2xl text-center shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Deeprap IT Solutions?
          </h2>
          <p className="text-gray-200 text-lg mb-4">
            As a young startup, we combine agility, innovation and
            customer-first thinking to deliver cutting-edge solutions for
            businesses worldwide.
          </p>
          <p className="text-gray-200 text-lg">
            Let us help you transform your ideas into real-world digital solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
