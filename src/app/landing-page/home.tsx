"use client"

import Image from "next/image"
import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Page() {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Akashdeep-Singh-Resume.pdf";
    link.download = "Akashdeep-Singh-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    
    <div className="min-h-screen w-full text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-[20%] right-[10%] w-64 h-64 border border-purple-500/20 rotate-12" />
        <div className="absolute top-[30%] right-[20%] w-48 h-48 border border-purple-500/20 -rotate-12" />
      </motion.div>

      <main className="max-w-7xl mx-auto relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={item} className="space-y-4">
              <motion.h2 variants={item} className="text-2xl">
                I am Akashdeep Singh
              </motion.h2>
              <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold">
                <span className="text-purple-400">React.js Frontend</span>
                <br />
                Developer.
              </motion.h1>
            </motion.div>

            <motion.p variants={item} className="text-lg text-gray-300 max-w-xl">
              I break down complex user experience problems to create integrity focused solutions that connect billions
              of people
            </motion.p>

            <motion.div variants={item} className="space-y-6">
              <Button
                variant="outline"
                className="group border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>

              <motion.div variants={container} className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/akashad14" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/akashdeep-singh-613644224/" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={item}
            className="relative aspect-square max-w-md mx-auto lg:pt-16 "
            initial={{ rotate: 5 }}
            whileHover={{
              rotate: 0,
              transition: {
                duration: 1.5,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            }}
          >
            <motion.div
              className="relative z-10 rounded-3xl overflow-hidden object-cover border-3 border-[#2a1454]"
              // initial={{ rotate: 3 }}
              whileHover={{
                rotate: 0,
                boxShadow: "0 0 0 2px rgb(59, 130, 246)", // Blue border
                transition: {
                  duration: 1.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                  boxShadow: { duration: 0.3 }, // Faster transition for the border
                },
              }}
            >
              <Image
                src="/images/h.jpg"
                alt="Code editor showing development work"
                width={500}
                height={500}
                className="object-cover w-full lg:h-[450px] h-[250px] transition-transform duration-500 hover:scale-105 object-right"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
   
  )
}

