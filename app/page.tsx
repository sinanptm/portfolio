import HeaderSection from "@/components/HeaderSection"
import ProfileSummary from "@/components/ProfileSummary"
import SkillsSection from "@/components/SkillsSection"
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/FooterSection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <HeaderSection />
        <ProfileSummary />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
    </div>
  )
}