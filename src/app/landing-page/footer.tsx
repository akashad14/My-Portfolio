"use client";
import { Github, Linkedin, } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center border-t-1 border-blue-950">
      {/* Logo & Description */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          
          <span className="text-yellow-500 text-xl font-semibold">ADS</span>
        </div>

        <p className="max-w-lg text-sm px-4">
          Lorem Ipsum Dolor Sit Amet Consectetur. Nunc Luctus Malesuada Massa At Donec Diam. Felis Nec Sit A In Sodales.
          Quis Pellentesque Nisl Laoreet Sagittis.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-gray-500 text-2xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Github />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin />
          </a>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="mt-6 border-t border-gray-800  pt-4 text-sm flex flex-col md:flex-row justify-between items-center px-6">
        <p>© Copyright 2025 @ADS All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
