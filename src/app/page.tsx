import Navbar from "@/app/menubar/navbar"
import HomePage from "@/app/landing-page/home"
import AboutPage from "@/app/about/about"
import EducationExperience from "@/app/about/education"
import SkillsSection from "@/app/about/skills"
import ProjectsSection from "@/app/project/project"
import Footer from "@/app/landing-page/footer"

export default function Page() {
  return (
    <div className="min-h-screen  text-white">
      <Navbar />

      <main className="flex flex-col ">
        <section id="home" className="min-h-screen bg-gradient-to-br from-black to-purple-950 flex items-center justify-center pt-20 px-4 sm:px-6">
          <HomePage />
        </section>

        <section
          id="about"
          className="min-h-screen bg-black flex flex-col items-center justify-center py-16 px-4 sm:px-4"
        >
          <AboutPage/>
          <div className="mt-16 w-full">
            <EducationExperience />
            <SkillsSection/>
          </div>
        </section>

        <section id="projects" className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <ProjectsSection />
        </section>

        {/* <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Section</h2>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}

