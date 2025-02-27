"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-6 border-1 rounded-xl border-purple-500/20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">
              <span className="text-[#a855f7]">Let&apos;s</span> work together!
            </h1>
            <p className="text-gray-400">
              I&apos; design and code beautifully simple things and I love what I do. Just simple like that!
            </p>
          </div>

          <form className="space-y-6">
            <Input
              type="text"
              placeholder="First name"
              className="bg-transparent border-b border-gray-700 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            <Input
              type="text"
              placeholder="Last name"
              className="bg-transparent border-b border-gray-700 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            <Input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-b border-gray-700 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            <Input
              type="tel"
              placeholder="Phone number"
              className="bg-transparent border-b border-gray-700 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-[#a855f7]"
            />
            <Textarea
              placeholder="Message"
              className="bg-transparent border-b border-gray-700 rounded-none px-0 min-h-[100px] focus-visible:ring-0 focus-visible:border-[#a855f7] resize-none"
            />
            <Button className="bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-full px-8">Send Message</Button>
          </form>
        </div>

        <div className="space-y-8">
          <p className="text-gray-400">
          I&apos;m currently available to take on new projects, so feel free to send me a message about anything that you
            want to run past me. You can contact anytime at 24/7.
          </p>

          <div className="space-y-4">
            <p className="text-white hover:text-[#a855f7] transition-colors">
              <a href="tel:+01123654896">+01 123 654 8096</a>
            </p>
            <p className="text-white hover:text-[#a855f7] transition-colors">
              <a href="mailto:gerolddesign@mail.com">gerolddesign@mail.com</a>
            </p>
            <p className="text-white">
              Warne Park Street Pine,
              <br />
              FL 33157, New York
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-[#a855f7] transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-[#a855f7] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-[#a855f7] transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-[#a855f7] transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

