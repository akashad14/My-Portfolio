"use client"

import { ArrowUp, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About"},
    { id: "projects", label: "Projects"},
    { id: "contact", label: "Contact"},
  ]

  return (
    <footer className="bg-[#140c2e] text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="w-20 h-20 relative">
            <Image src="/images/logo/ads-logo1.png" alt="Logo" width={150} height={150} className="rounded-full bg-white" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="link"
                className="text-white hover:text-purple-300 transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-[#8B6EFF]">© {new Date().getFullYear()} All rights reserved by ADS</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-6 right-6 rounded-full bg-[#8B6EFF] hover:bg-[#7B5FEF] text-white"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-5 w-5" />
        <span className="sr-only">Back to top</span>
      </Button>
    </footer>
  )
}

