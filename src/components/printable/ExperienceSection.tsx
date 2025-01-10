import { Building2 } from "lucide-react";
import { ExperienceItem } from "./experience/ExperienceItem";
import { experiences } from "@/data/experiences";

interface ExperienceSectionProps {
  page?: number;
}

export const ExperienceSection = ({ page = 1 }: ExperienceSectionProps) => {
  // Dividir as experiências em duas páginas
  const itemsPerPage = 2;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageExperiences = experiences.slice(startIndex, endIndex);

  if (pageExperiences.length === 0) return null;

  return (
    <div className="flex-grow space-y-6">
      {page === 1 && (
        <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
          <Building2 className="h-8 w-8 text-resume-accent" />
          Experiência Profissional
        </h2>
      )}

      {pageExperiences.map((experience, index) => (
        <ExperienceItem 
          key={experience.company} 
          experience={experience} 
          index={index} 
        />
      ))}
    </div>
  );
};