"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="container mx-auto px-6 py-10 flex flex-col md:py-20">
      
      {/* Title - Always Centered */}
      <motion.h1
        className="text-4xl sm:text-5xl font-medium mb-10 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h1>

      {/* Grid Container */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-20 w-full">
        
        {/* Left Side - Text Content (Left-Aligned on Larger Screens) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4 text-blue-400">Akashdeep Singh</h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 text-gray-300">Frontend Developer</h3>
          
          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I&apos;m Akashdeep Singh, a passionate frontend developer based in Punjab. I completed my MCA in August
            2024 and have a strong foundation in HTML, CSS, JavaScript, and modern frameworks like TypeScript and
            Next.js. I&apos;m currently honing my skills through projects and freelance work, aiming to create sleek,
            user-friendly web experiences. Always eager to learn and innovate, I&apos;m looking for opportunities to
            grow in the field of web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <Image
            src="/images/about.jpg"
            alt="Akashdeep Singh"
            width={500}
            height={500}
            className="rounded-lg shadow-2xl w-full h-auto"
          />
          <motion.div
            className="absolute inset-0 bg-blue-500 mix-blend-multiply rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
