import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/Aboutme'
import TechOrbitSection from './components/TechOrbitSection'
import ProjectsSection from './components/ProjectsSection'
import ReachMeOrbitSection from './components/ReachMeOrbitSection'


export default function HomePage() {
  return (
    <div className="w-full bg-[#03040A] text-[#E6E6F1] overflow-x-hidden">
      
     
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>
      </div>


      <section className="min-h-screen flex items-center justify-center">
        <AboutMe />
      </section>
      <TechOrbitSection />
      <ProjectsSection />
      <ReachMeOrbitSection />
    </div>
  )
}
