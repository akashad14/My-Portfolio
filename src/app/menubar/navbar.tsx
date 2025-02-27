"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Home, User, Briefcase, Phone, Menu,  } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Get all sections
      const sections = ["home", "about", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Phone },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-none" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between md:justify-center h-16 sm:h-20">
          {/* Logo or Brand - visible on mobile */}
          <div className="flex md:hidden">
            <Image
                            src="/images/logo/ads-logo1.png"
                            alt="Code editor showing development work"
                            width={50}
                            height={50}
                            className="h-[100px] w-[100px]"
                            priority
                          />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] sm:w-[350px] bg-[#1a0033] border-r border-purple-900">
                <div className="flex items-center justify-between mb-6">
                  <SheetTitle className="text-white text-2xl font-bold">Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="">
                     
                    <Image 
                      src="/images/close.png" // Update the path to your image
                      alt="Close"
                      width={24} 
                      height={24} 
                      className="h-6 w-6"
                    />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center gap-3 text-white hover:bg-white/10 hover:text-white justify-start h-14 text-lg",
                          activeSection === item.id && "bg-white/10",
                        )}
                        onClick={() => {
                          scrollToSection(item.id)
                        }}
                      >
                        <item.icon className="h-6 w-6" />
                        {item.label}
                      </Button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-2 border border-gray-700">
          
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "flex items-center gap-1 lg:gap-2 text-white hover:bg-white/10 hover:text-white rounded-full transition-colors border border-gray-800",
                  activeSection === item.id && "bg-white/10",
                )}
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            ))}
          </div>
          {/* <div className="flex rounded-full bg-black/40 backdrop-blur-md items-start">
            <Image
                            src="/images/logo/ads-logo1.png"
                            alt="Code editor showing development work"
                            width={50}
                            height={50}
                            className="h-[100px] w-[100px]"
                            priority
                          />
          </div> */}
        </nav>
      </div>
    </header>
  )
}

