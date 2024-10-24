import HeaderSection from "@/components/home/HeaderSection";
import SkillsSection from "@/components/home/SkillsSection";
import ModelSceneBackground from "@/components/ModelSceneBackground";


export default function Portfolio() {
  return (
    <div className="h-[300vh] remove-scrollbar overflow-hidden">
      <ModelSceneBackground>
        <HeaderSection />
        <SkillsSection />
      </ModelSceneBackground>
    </div>
  );
}