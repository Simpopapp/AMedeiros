import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Target, Award } from "lucide-react";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
}

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-resume-secondary p-6 rounded-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-resume-primary">{experience.company}</h3>
          <p className="text-lg text-resume-text">{experience.role}</p>
        </div>
        <div className="text-right">
          <Badge variant="secondary" className="bg-resume-accent/10 text-resume-accent flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {experience.period}
          </Badge>
          <span className="text-sm text-resume-text flex items-center gap-1 mt-2">
            <MapPin className="h-3 w-3" />
            {experience.location}
          </span>
        </div>
      </div>

      {experience.achievements && (
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-resume-primary flex items-center gap-2 mb-2">
            <Award className="h-4 w-4 text-resume-accent" />
            Principais Conquistas
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="text-resume-text flex items-start gap-2"
              >
                <span className="text-resume-accent mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h4 className="text-lg font-semibold text-resume-primary flex items-center gap-2 mb-2">
          <Target className="h-4 w-4 text-resume-accent" />
          Responsabilidades
        </h4>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, idx) => (
            <li
              key={idx}
              className="text-resume-text flex items-start gap-2"
            >
              <span className="text-resume-accent mt-1.5">•</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};