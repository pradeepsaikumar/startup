import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Formspree endpoint (replace YOUR_FORM_ID with actual)
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const res = await fetch("https://formspree.io/f/xqadredv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const data = await res.json();
      if (data.ok || res.status === 200) {
        setStatus("✅ Thanks for reaching out! We’ll respond within 24 hours.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again later.");
      }
    } catch (err) {
      setStatus("❌ Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-center text-cyan-300 mb-3"
        >
          Contact Us
        </motion.h1>
        <p className="text-center text-gray-200 mb-8">
          Have questions about our services, want to collaborate, or just say
          hi? Fill out the form and our team will get back to you within
          <span className="font-semibold text-cyan-200"> 24 hours.</span>
        </p>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-5 mb-8"
        >
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-white text-2xl transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-5"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-white/20 text-white placeholder-gray-300 border border-cyan-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full bg-white/20 text-white placeholder-gray-300 border border-cyan-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="w-full bg-white/20 text-white placeholder-gray-300 border border-cyan-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-3 rounded-xl transition-transform transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Send Message
          </button>
        </motion.form>

        {status && (
          <p className="mt-6 text-center text-cyan-200 font-medium">{status}</p>
        )}

        {/* Extra contact info */}
        <p className="mt-6 text-center text-gray-300 text-sm">
          Prefer email? Write to us at{" "}
          <a
            href="mailto:contact@deeprapit.com"
            className="text-cyan-300 hover:underline"
          >
            contact@deeprapit.com
          </a>
          . <br />
          We usually reply within a business day.
        </p>
      </motion.div>
    </div>
  );
}
