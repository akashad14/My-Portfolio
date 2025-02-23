"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", image: "/images/html.png" },
  { name: "CSS", image: "/images/css.png" },
  { name: "NEXTjs", image: "/images/next.js.png" },
  { name: "TailwindCSS", image: "/images/tailwind-css.svg" },
  { name: "React", image: "/images/react.png" },
  { name: "JavaScript", image: "/images/java-script.png" },
  { name: "Github", image: "/images/git.png" },
];

export default function SkillsSection() {
  return (
    <section className="bg-[#0a0214] text-white py-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-purple-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-2 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We put your ideas and wishes into a unique web project that inspires you and your customers.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#181122] p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-all hover:scale-110 hover:bg-[#241735] hover:shadow-[0_0_15px_#6c2bd9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            //   whileHover={{ rotate: 5 }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />
              <span className="text-purple-400 mt-2 text-lg">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
