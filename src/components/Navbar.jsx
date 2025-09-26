import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";

export default function Navbar({ token, handleLogout, user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo and Name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold">
          Deeprap <span className="text-blue-400">IT Solutions</span>
        </span>
      </Link>

      {/* Hamburger Menu */}
      <div className="md:hidden z-50" onClick={toggleMenu}>
        {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center font-medium">
        <NavLinks token={token} handleLogout={handleLogout} user={user} />
      </ul>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        {/* Close button inside drawer */}
        <div className="flex justify-end p-4">
          <FiX
            size={26}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 px-6 py-4 text-lg">
          <NavLinks
            token={token}
            handleLogout={() => {
              handleLogout();
              setIsOpen(false); // close menu after logout
            }}
            user={user}
          />
        </ul>
      </div>
    </nav>
  );
}

// 👇 Extracted to keep things clean
function NavLinks({ token, handleLogout, user }) {
  return (
    <>
      <li>
        <Link to="/" className="hover:text-blue-400">Home</Link>
      </li>
      <li>
        <Link to="/our-team" className="hover:text-purple-400">Our Team</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-yellow-400">About</Link>
      </li>
      <li>
        <Link to="/who-we-are" className="hover:text-yellow-400">Who We Are</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-green-400">Contact</Link>
      </li>
      <li>
        <Link to="/projects" className="hover:text-indigo-400">Projects</Link>
      </li>

      {!token ? (
        <>
          <li>
            <Link to="/login" className="hover:text-pink-400">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-indigo-400">Register</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/dashboard" className="hover:text-red-400">Dashboard</Link>
          </li>
          {user?.email === "pradeepnaidu147@gmail.com" && (
            <li>
              <Link to="/admin" className="hover:text-yellow-400">Admin Panel</Link>
            </li>
          )}
          <li>
            <button
              onClick={handleLogout}
              className="hover:text-red-500 font-semibold"
            >
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );
}
