import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  vercelUrl: string;
}

const projects: Project[] = [
  {
    title: "Graphic design Portfolio website",
    description: "Tool- Next.js, TypeScript, Tailwind CSS",
    image: "/images/p1.png",
    vercelUrl: "https://portfolio-nextjs-tegv.vercel.app",
  },
  {
    title: "Travel website",
    description: "Tool- HTML, CSS, JavaScript",
    image: "/images/p2.png",
    vercelUrl: "https://meek-blancmange-02d768.netlify.app/",
  },
  {
    title: "Job Posting Website",
    description: "Tool- HTML, CSS, JavaScript, Bootstrap",
    image: "/images/p4.png",
    vercelUrl: "https://rococo-bunny-6c8f81.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="pb-16 pt-10 px-6  text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-center md:text-left mb-4 md:mb-0">My Projects</h2>
          <Link href="/project" className="text-blue-400 hover:underline text-lg">
            See All
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-700 bg-gray-800 shadow-lg flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-6 flex-grow">
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Link href={project.vercelUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="gap-2 p-0 text-blue-400 hover:bg-gray-700">
                    Live demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
