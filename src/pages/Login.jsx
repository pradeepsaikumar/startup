import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-center text-cyan-300 mb-8"
        >
          Welcome Back
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-200 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-transform transform hover:scale-[1.02]"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-transform transform hover:scale-[1.02]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-cyan-500/30 transition-colors"
          >
            Login
          </motion.button>
        </motion.form>

        <p className="mt-8 text-center text-gray-300">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-cyan-300 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </motion.div>
    </div>
  );
}
