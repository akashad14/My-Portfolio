"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  liveLink: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Graphic design Portfolio website",
    description: "How Deloitte found freedom, flexibility, and rebrand success",
    image: "/images/project/portfolio website.png",
    liveLink: "https://portfolio-nextjs-tegv.vercel.app",
  },
  {
    id: 2,
    title: "Travel website",
    description: "Tattoo artist portfolio showcasing precision and artistry",
    image: "/images/project/travel website.png",
    liveLink: "https://meek-blancmange-02d768.netlify.app/",
  },
  {
    id: 3,
    title: "Job Posting Website",
    description: "Project was about precision and information",
    image: "/images/project/job portal website.png",
    liveLink: "https://rococo-bunny-6c8f81.netlify.app/",
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, image, liveLink }) => {
  return (
    <div className="bg-gradient-to-br from-black to-purple-950 sm:px-6 lg:px-10 lg:pt-10 rounded-md overflow-visible">
      <div className="relative overflow-visible group">
        {/* Image */}
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={400}
          className="w-full h-48 sm:h-64 md:h-80 lg:w-[450px] lg:h-[450px] object-cover object-top cursor-pointer rounded-xl"
        />

        {/* Hover Overlay (Visible Only When Hovering Over the Image) */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 sm:left-[-19px] sm:right-2 sm:w-[480px] h-[110px] bg-gradient-to-br from-[#824def] to-purple-900 bg-opacity-50 flex flex-col justify-end px-6 py-4 text-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold">{title}</h3>

          {/* Description */}
          <p className="text-sm mb-1">{description}</p>

          {/* View Project Link */}
          <Link href={liveLink} passHref>
            <motion.div
              className="flex items-center justify-between text-lg font-semibold cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
               viewBox="0 0 24 24" 
               fill="currentColor">
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z">
                </path>
                </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-purple-300 mb-4">My Recent Works</h2>
        <p className="text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
          customers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-10 lg:px-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;