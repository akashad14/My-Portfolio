"use client";

import type React from "react"

export default function EducationExperience() {
  return (
    <div className="min-h-screen bg-black text-gray-300 pt-16 pb-10 px-4 md:px-6 lg:px-">
      <div className=" mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-medium text-white mb-6">Education & Experience</h1>
        {/* <p className="text-lg text-gray-400 mb-16">
          Established history of success in design and development, consistently delivering valuable insights and
          driving significant results.
        </p> */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="relative">
            <h2 className="text-2xl font-semibold text-white mb-8">Education</h2>
            <div className="relative border-l border-gray-700 pl-8 ml-4">
              {/* Timeline Item 1 */}
              <div className="mb-16 relative">
                <span className="absolute -left-[35px] flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 border border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </span>
                <div className="inline-block px-4 py-1 bg-gray-900 rounded-full text-sm text-gray-400 mb-4">
                08/2022 - 09/2024
                </div>
                <h3 className="text-xl font-medium text-white mb-2"> Master of Computer Applications</h3>
                <p className="text-gray-400 mb-2">DAV Institute of Engineering And Technology</p>
              
              </div>

              {/* Timeline Item 2 */}
              <div className="mb-16 relative">
                <span className="absolute -left-[35px] flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 border border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </span>
                <div className="inline-block px-4 py-1 bg-gray-900 rounded-full text-sm text-gray-400 mb-4">
                  08/2019 - 05/2022
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Bachelor of Computer Applications</h3>
                <p className="text-gray-400 mb-2">DAV COLLEGE</p>
                
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="relative">
            <h2 className="text-2xl font-semibold text-white mb-8">Experience</h2>
            <div className="relative border-l border-gray-700 pl-8 ml-4">
              {/* Frontend Developer Intern */}
              <div className="mb-16 relative">
                <span className="absolute -left-[35px] flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 border border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </span>
                <div className="inline-block px-4 py-1 bg-gray-900 rounded-full text-sm text-gray-400 mb-4">
                  10/2024 - 01/2025
                </div>
                <h3 className="text-xl font-medium text-white mb-2">Coders Boutique</h3>
                <p className="text-gray-400 mb-2">Frontend Developer Intern</p>
                <p className="text-gray-500 mb-4">A company focused on web development and IT solutions.</p>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                  <li>Assist in the development and maintenance of scalable web application</li>
                  <li>
                    Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frontend
                    frameworks
                  </li>
                  <li>
                    Identify and fix front-end issues and bugs, ensuring a smooth user experience across different
                    devices
                  </li>
                </ul>
              </div>

              {/* Add more experience items here */}
              {/* <div className="mb-16 relative">
                <span className="absolute -left-[35px] flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 border border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                </span>
                <div className="inline-block px-4 py-1 bg-gray-900 rounded-full text-sm text-gray-400 mb-4">
                  2023 - 2024
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">Personal Projects</h3>
                <p className="text-gray-400 mb-2">@ Web Developer</p>
                <p className="text-gray-500">
                  Developed and maintained various personal web development projects using modern technologies and best
                  practices.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

