import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col items-center relative overflow-hidden pb-32">

      {/* --- Glowing Animated Circles --- */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-600 rounded-full opacity-20 top-[-10%] left-[-10%] blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-pink-500 rounded-full opacity-20 bottom-[-10%] right-[-10%] blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* --- Hero Section --- */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center mt-20 z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Empowering your Digital Journey
      </motion.h1>

      <motion.p
        className="mt-4 md:mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We build next-gen <span className="text-blue-400 font-semibold">IT Services</span>, 
        create modern <span className="text-green-400 font-semibold">Web Experiences</span>, 
        and leverage <span className="text-pink-400 font-semibold">AI/ML technologies</span>.
      </motion.p>

      {/* --- Action Buttons --- */}
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-6 z-10">
        <motion.a
          href="/our-team"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-full text-lg font-semibold shadow-lg"
        >
          Meet Our Team
        </motion.a>
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-green-600 hover:bg-green-800 rounded-full text-lg font-semibold shadow-lg"
        >
          View Projects
        </motion.a>
      </div>

      {/* --- Core Services Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-6 max-w-6xl z-10">
        {[
          {
            title: "IT Services",
            color: "text-blue-400",
            desc: "Reliable and scalable IT solutions tailored for your business.",
            img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          },
          {
            title: "Web Design",
            color: "text-green-400",
            desc: "Modern, responsive, and user-friendly web design services.",
            img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          },
          {
            title: "AI / ML",
            color: "text-pink-400",
            desc: "Data-driven predictions using cutting-edge AI & ML techniques.",
            img: "https://cdn-icons-png.flaticon.com/512/4727/4727424.png"
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-800 rounded-2xl shadow-xl text-center border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className={`text-2xl font-bold ${service.color}`}>
              {service.title}
            </h3>
            <p className="mt-3 text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* --- Other Services Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 px-6 max-w-6xl z-10">
        {[
          {
            title: "Small Websites",
            color: "text-blue-400",
            desc: "Single-page websites for restaurants, bakeries & startups.",
            img: "https://cdn-icons-png.flaticon.com/512/2312/2312440.png"
          },
          {
            title: "Graphic Designing",
            color: "text-green-400",
            desc: "Logos, posters, creative posts and brand identity.",
            img: "https://cdn-icons-png.flaticon.com/512/744/744502.png"
          },
          {
            title: "Influencer Marketing",
            color: "text-pink-400",
            desc: "Boost brand with influencer-driven campaigns.",
            img: "https://cdn-icons-png.flaticon.com/512/3437/3437394.png"
          },
          {
            title: "Social Media Marketing",
            color: "text-yellow-400",
            desc: "Grow your audience with proven strategies.",
            img: "https://cdn-icons-png.flaticon.com/512/3798/3798940.png"
          },
          {
            title: "Video Editing",
            color: "text-red-400",
            desc: "Ads, reels, shorts, and professional video editing.",
            img: "https://cdn-icons-png.flaticon.com/512/4021/4021696.png"
          },
          {
            title: "Account Handling",
            color: "text-indigo-400",
            desc: "We manage your brand’s online presence effectively.",
            img: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-800 rounded-2xl shadow-xl text-center border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className={`text-2xl font-bold ${service.color}`}>
              {service.title}
            </h3>
            <p className="mt-3 text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* --- Soft Glow Behind --- */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400 to-pink-500 rounded-full opacity-10 blur-3xl -z-10 -translate-x-1/2 animate-pulse"></div>
    </div>
  );
}
