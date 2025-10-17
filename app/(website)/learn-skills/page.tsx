import SkillsHero from "@/components/learn-skills/SkillsHero"
import SkillCategories from "@/components/learn-skills/SkillCategories"
import PopularSkills from "@/components/learn-skills/PopularSkills"
import WhyLearnWithUs from "@/components/learn-skills/WhyLearnWithUs"
import CompanySection from "@/components/home/company-section"

export default function SkillBasedCoursePage() {
  return (
    <main className="min-h-screen">
      <SkillsHero />
      <SkillCategories />
      <PopularSkills />
      <WhyLearnWithUs />
      <CompanySection />
    </main>
  )
}


