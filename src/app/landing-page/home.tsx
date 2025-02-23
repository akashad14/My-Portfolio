import Image from "next/image"
import { Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className=" text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 border border-purple-500/20 rotate-12" />
        <div className="absolute top-[30%] right-[20%] w-48 h-48 border border-purple-500/20 -rotate-12" />
      </div>

      <main className=" mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl">I am AkashDeep Singh</h2>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-purple-400">Next-Level Frontend</span>
                <br />
                Developer.
              </h1>
            </div>

            <p className="text-lg text-gray-300 max-w-xl">
              I break down complex user experience problems to create integrity focused solutions that connect billions
              of people
            </p>

            <div className="space-y-6">
              <Button
                variant="outline"
                className="group border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>

              <div className="flex gap-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-900/20 transform rotate-6 h-96" />
            <Image
              src="/images/home1.jpg"
              alt="Profile photo"
              width={500}
              height={500}
              className="rounded-3xl relative z-10 object-cover h-96 "
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}

