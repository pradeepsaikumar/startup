import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    name: "Pradeep Sai Kumar",
    role: "Team Lead | Full Stack & AI Engineer",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Leading the team with expertise in AI, Machine Learning, and Full Stack Development.",
    img: "pradeep.png",
    
  },
  {
    name: "Nandini",
    role: "Java Full Stack Developer",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Passionate about Java programming and creating responsive, user-friendly interfaces.",
    img: "nandini.png",
  },
  {
    name: "Tejasri",
    role: "Backend Developer and Database Specialist",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Specialized in building robust APIs and managing databases efficiently.",
    img: "teju.png",
  },
  {
    name: "Gayatri",
    role: "Machine Learning Engineer and Application Developer",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Loves working with data to generate insights and build predictive models.",
    img: "gayu.png",
  },
  {
    name: "Dinesh",
    role: "AI/ML Engineer and Application Tester",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Focused on deep learning and predictive analytics to solve real-world problems.",
    img: "dinesh.png",
  },
  {
    name: "Praveen",
    role: "Python Full Stack Developer and Backend Specialist",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Ensures smooth deployment pipelines and full-stack app delivery.",
    img: "pravi.png",
  },
  {
    name: "Sai charan",
    role: "Data analyst and Visualization Expert",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "Passionate about data visualization and creating insightful dashboards.",
    img: "charan.png",
  },
  {
    name: "Manasa",
    role: "Full Stack Developer",
    qualification: "B.Tech in Computer Science and Engineering",
    bio: "full stcack developer with a knack for crafting seamless user experiences.",
    img: "manu.png",
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1497493292307-31c376b6e479"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Who We Are
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Meet the brains behind Deeprap IT Solutions
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 md:px-20 text-center bg-white text-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          We believe that true pioneers and innovators thrive in uncharted
          territory.
        </motion.h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our impact extends far beyond our business and that of our clients.
          Together, we aim to empower individuals and communities, helping them
          achieve more and lead better lives through innovation and dedication.
        </p>
      </section>

      {/* Team Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mt-16"
      >
        👥 Meet Our Team
      </motion.h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 px-6 max-w-7xl mx-auto pb-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-6 shadow-xl flex flex-col items-center text-center cursor-pointer border border-gray-700 hover:shadow-cyan-500/30"
            onClick={() => setSelectedMember(member)}
          >
            <div className="w-32 h-32 overflow-hidden border-4 border-cyan-400 shadow-lg rounded-full">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-cyan-300">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white text-black rounded-2xl p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 text-black hover:text-red-600 text-2xl"
              >
                ✕
              </button>
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-cyan-400 mb-4"
              />
              <h3 className="text-2xl font-bold text-center text-cyan-600">
                {selectedMember.name}
              </h3>
              <p className="text-center text-gray-700">{selectedMember.role}</p>
              <p className="text-center text-sm italic text-gray-500 mt-1">
                {selectedMember.qualification}
              </p>
              <p className="mt-4 text-gray-800 text-center">{selectedMember.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}