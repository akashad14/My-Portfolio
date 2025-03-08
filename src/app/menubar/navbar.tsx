"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, User, Briefcase, Phone, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Add refresh animation
    const refreshAnimation = () => {
      const navbar = document.getElementById("navbar")
      if (navbar) {
        navbar.classList.add("animate-fade-in")
        setTimeout(() => {
          navbar.classList.remove("animate-fade-in")
        }, 1000)
      }
    }

    refreshAnimation()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    console.log("Menu toggled, new state:", !isOpen)
  }

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <motion.nav
        id="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 py-4 px-4 md:px-8 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center md:justify-center">
          {/* Logo */}
          <Link
            href="/"
            className="md:absolute md:left-8 lg:left-12"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <Image
              src="/images/logo/ads-logo1.png"
              alt="ADS Logo"
              width={100}
              height={50}
              className="w-auto h-[50px] md:h-[120px] pl-11"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex justify-center">
            <div className="bg-zinc-800/80 rounded-full px-2 py-1 backdrop-blur-sm">
              <ul className="flex items-center">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="flex items-center justify-center space-x-1 px-4 py-2 mr-2 rounded-full text-white hover:bg-zinc-700 transition-colors"
                  >
                    <div className="bg-zinc-700 p-2 rounded-full">
                      <Home size={16} />
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="flex items-center space-x-1 px-4 py-2 mr-2 border-1 border-purple-500/20 rounded-full text-white hover:bg-zinc-700 transition-colors"
                  >
                    <User size={18} className="mr-1" />
                    <span>About</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="flex items-center space-x-1 px-4 py-2 mr-2 border-1 border-purple-500/20 rounded-full text-white hover:bg-zinc-700 transition-colors"
                  >
                    <Briefcase size={18} className="mr-1" />
                    <span>Projects</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center space-x-1 px-4 py-2 mr-2 border-1 border-purple-500/20 rounded-full text-white hover:bg-zinc-700 transition-colors"
                  >
                    <Phone size={18} className="mr-1" />
                    <span>Contact</span>
                  </button>
                </li>
                {/* <li>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-white hover:bg-zinc-700 transition-colors"
                  >
                    <ImageIcon size={18} className="mr-1" />
                    <span>Gallery</span>
                  </button>
                </li> */}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-full hover:bg-zinc-800/50 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Separate from nav to avoid positioning issues */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden pt-20 px-4 bg-black/50">
          <div className="bg-zinc-900 rounded-xl p-4 shadow-lg">
            <ul className="flex flex-col space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                >
                  <Home size={20} />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                >
                  <User size={20} />
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                >
                  <Briefcase size={20} />
                  <span>Projects</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                >
                  <Phone size={20} />
                  <span>Contact</span>
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-white hover:bg-zinc-800 transition-colors"
                >
                  <ImageIcon size={20} />
                  <span>Gallery</span>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

