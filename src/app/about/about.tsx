"use client"

import { motion } from "framer-motion"
import {Phone, MapPin, Mail, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-6 md:px-10 rounded-md">
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants} className="relative mb-12">
          <h1 className="text-5xl font-bold mb-2">About Me</h1>
          <div className="w-48 h-1 bg-gradient-to-r from-rose-500 to-pink-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/images/home.jpg"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-3xl w-full object-cover"
              priority
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-semibold mb-4">Who Am I?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
              I&apos;m a Frontend Developer passionate about creating responsive and user-friendly web applications 
              using React.js, Next.js, and JavaScript. I&apos; enjoy turning ideas into clean and interactive designs
               while focusing on UI and performance optimization.
              </p>
              <p className="text-gray-300 leading-relaxed">
              Always eager to learn new technologies and improve my skills, I am looking for opportunities to
               contribute and grow in a dynamic development team.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-semibold mb-6">Personal Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 bg-zinc-900/50 p-4 rounded-xl">
                  <div className="bg-zinc-800 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-zinc-900/50 p-4 rounded-xl">
                  <div className="bg-zinc-800 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">Example@Mail.Com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-zinc-900/50 p-4 rounded-xl">
                  <div className="bg-zinc-800 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-zinc-900/50 p-4 rounded-xl">
                  <div className="bg-zinc-800 p-3 rounded-lg">
                    <Calendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Birthday</p>
                    <p className="text-white">Mar 14, 2001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

