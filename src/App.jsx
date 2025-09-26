import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/Team";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "{}"));

  // Listen for role/approval changes from AdminPanel
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user") || "{}");
      setUser(updatedUser);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser({});
    alert("Logged out successfully!");
  };

  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">
          Deeprap <span className="text-blue-400">IT Solutions</span>
        </h1>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/our-team" className="hover:text-purple-400 transition">Our Team</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-green-400 transition">Contact</Link>
          <Link to="/projects" className="hover:text-indigo-400">Projects</Link>


          {!token ? (
            <>
              <Link to="/login" className="hover:text-pink-400 transition">Login</Link>
              <Link to="/register" className="hover:text-indigo-400 transition">Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-red-400 transition">Dashboard</Link>

              {/* Only Super Admin sees AdminPanel link */}
              {user?.email === "pradeepnaidu147@gmail.com" && (
                <Link to="/admin" className="hover:text-yellow-400 transition">Admin Panel</Link>
              )}

              <button
                onClick={handleLogout}
                className="hover:text-red-500 transition font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanel setUser={setUser} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
