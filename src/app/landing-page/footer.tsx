"use client"

import { ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Define page links with IDs
  const pages = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact"},
  ]

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-transparent rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-white text-4xl font-bold">G</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-lg">
            {pages.map((page) => (
              <li key={page.id}>
                <Link href={page.id} className="hover:text-gray-300 transition-colors">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved by ThemeJunction</div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-lg transition-opacity duration-300 ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  )
}
