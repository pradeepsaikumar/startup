import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-6">
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
          className="text-4xl font-extrabold text-center text-indigo-300 mb-8"
        >
          Create Account
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-gray-200 mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform transform hover:scale-[1.02]"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform transform hover:scale-[1.02]"
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
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform transform hover:scale-[1.02]"
            />
          </div>

          <div>
            <label className="block text-gray-200 mb-2 font-medium">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-transform transform hover:scale-[1.02]"
            >
              <option value="user" className="text-gray-800">User</option>
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-indigo-500/30 transition-colors"
          >
            Register
          </motion.button>
        </motion.form>

        <p className="mt-8 text-center text-gray-300">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-300 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
