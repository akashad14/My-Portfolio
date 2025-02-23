"use client"

import Image from "next/image"
import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Page() {

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/My Akashdeep Singh resume.pdf";
    link.download = "Akashdeep_Singh_CV.pdf";
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
    <div className="text-white p-6 md:p-12 relative overflow-hidden">
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={item} className="space-y-4">
              <motion.h2 variants={item} className="text-2xl">
                I am Akash
              </motion.h2>
              <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold">
                <span className="text-purple-400">Next-Level Web</span>
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
                  { icon: Github, href: "https://github.com/yourusername" },
                  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                  
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
            className="relative aspect-square max-w-md mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-900/20 transform rotate-6 h-96" />
            <Image
              src="/images/home1.jpg"
              alt="Code editor showing development work"
              width={500}
              height={500}
              className="rounded-3xl relative z-10 object-cover transition-transform duration-500 hover:scale-105 h-96"
              priority
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

