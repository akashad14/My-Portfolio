"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function EducationExperience() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] px-4 md:px-20 py-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Education & <span className="text-purple-500">Work Experience</span>
      </motion.h1>

      <Card className="p-8 bg-[#111111] border border-purple-500/20 rounded-2xl shadow-[0_0_15px_rgba(139,92,246,0.1)]">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-purple-500 mb-8">EDUCATION</h2>
            <div className="space-y-8 relative">
              <div className="absolute left-1.5 top-2 bottom-0 w-0.5 bg-purple-500/20" />

              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                transition={{ duration: 0.2 }}
                className="relative pl-8 p-4 rounded-lg"
              >
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="text-xl font-semibold text-white">Master of Computer Applications</h3>
                <p className="text-gray-400">DAV Institute of Engineering And Technology</p>
                <p className="text-sm text-gray-500">08/2022 - 09/2024</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                transition={{ duration: 0.2 }}
                className="relative pl-8 p-4 rounded-lg"
              >
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h3>
                <p className="text-gray-400">DAV COLLEGE</p>
                <p className="text-sm text-gray-500">08/2019 - 05/2022</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-purple-500 mb-8">EXPERIENCE</h2>
            <div className="space-y-8 relative">
              <div className="absolute left-1.5 top-2 bottom-0 w-0.5 bg-purple-500/20" />

              <motion.div
                whileHover={{ scale: 1.02, backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                transition={{ duration: 0.2 }}
                className="relative pl-8 p-4 rounded-lg"
              >
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-purple-500" />
                <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
                <p className="text-gray-400">Coders Boutique</p>
                <p className="text-sm text-gray-500">10/2024 - 01/2025</p>
                <p className="text-gray-400 mt-2">A company focused on web development and IT solutions.</p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li className="list-disc ml-4">
                    Developed and maintained responsive web applications using React.js, Next.js, and JavaScript.
                  </li>
                  <li className="list-disc ml-4">
                    Optimized front-end performance, reducing page load times by 25% through code refactoring.
                  </li>
                  <li className="list-disc ml-4">
                    Resolved over 10+ UI/UX issues, enhancing user experience across multiple browsers.
                  </li>
                  <li className="list-disc ml-4">
                    Collaborated with senior developers to implement Tailwind CSS and improve design consistency.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  )
}
