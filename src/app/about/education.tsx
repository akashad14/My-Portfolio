export default function EducationExperience() {
  return (
    <div className=" p-6 md:p-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Education & <span className="text-[#7C3AED]">Work Experience</span>
        </h1>

        <div className="rounded-2xl border-2 border-[#321763] bg-[#140c1c]/30 p-8">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Education Section */}
            <div>
              <h2 className="mb-8 text-xl font-semibold text-[#7C3AED]">EDUCATION</h2>
              <div className="relative space-y-8 before:absolute before:left-[5px] before:top-2 before:h-[calc(100%-24px)] before:w-[2px] before:bg-[#28134E]">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#7C3AED]" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">Master of Computer Applications</h3>
                    <p className="text-white">DAV Instituteof Engineering And Technology</p>
                    <p className="text-sm text-gray-400">08/2022 - 09/2024</p>
                  </div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#7C3AED]" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">Bachelor of Computer Applications</h3>
                    <p className="text-white">DAV COLLEGE</p>
                    <p className="text-sm text-gray-400">08/2019 - 05/2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="mb-8 text-xl font-semibold text-[#7C3AED]">EXPERIENCE</h2>
              <div className="relative space-y-8 before:absolute before:left-[5px] before:top-2 before:h-[calc(100%-24px)] before:w-[2px] before:bg-[#28134E]">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#7C3AED]" />
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white">Coders Boutique</h3>
                    <p className="text-white">Frontend Developer Intern</p>
                    <p className="text-sm text-gray-400">10/2024 - 01/2025</p>
                    <p className="text-sm text-slate-400">
                    A company focused on web development and IT solutions.
                  </p>
                <ul className="mt-2 list-disc list-outside tracking-normal text-sm/6 text-slate-400">
                  <li>Developed and maintained responsive web applications using React.js, Next.js, and JavaScript.
                  </li>
                  <li>
                  Optimized front-end performance, reducing page load times by 25% through code refactoring.
                  </li>
                  <li>
                  Resolved over 10+ UI/UX issues, enhancing user experience across multiple browsers.
                  </li>
                  <li>
                  Collaborated with senior developers to implement Tailwind CSS and improve design consistency.
                  </li>
                </ul>
                </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

