import { Building2 } from "lucide-react";
import { ExperienceItem } from "./experience/ExperienceItem";
import { experiences } from "@/data/experiences";

export const ExperienceSection = () => {
  return (
    <div className="flex-grow space-y-6">
      <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
        <Building2 className="h-8 w-8 text-resume-accent" />
        Experiência Profissional
      </h2>

      {experiences.map((experience, index) => (
        <ExperienceItem 
          key={experience.company} 
          experience={experience} 
          index={index} 
        />
      ))}
    </div>
  );
};