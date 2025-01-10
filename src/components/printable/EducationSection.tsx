import { GraduationCap, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection = () => {
  return (
    <div className="flex-grow space-y-4">
      <h2 className="text-2xl font-bold text-resume-primary mb-3">
        Formação e Competências
      </h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-resume-secondary p-3 rounded-lg mb-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <GraduationCap className="h-5 w-5 text-resume-accent" />
          <h3 className="text-lg font-bold text-resume-primary">Educação</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <BookOpen className="h-4 w-4 text-resume-accent mt-1" />
            <div>
              <h4 className="text-base font-semibold text-resume-primary">
                Faculdades Integradas de Guarulhos
              </h4>
              <p className="text-sm text-resume-text">Graduação em Administração</p>
              <p className="text-xs text-resume-accent">1997 - 2001</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-3"
      >
        <div className="bg-resume-secondary p-2.5 rounded-lg">
          <h3 className="text-base font-bold text-resume-primary mb-2">Gestão Comercial</h3>
          <ul className="space-y-1 text-sm text-resume-text">
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Negociação
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Desenvolvimento de Marca
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Gestão de Equipes
            </li>
          </ul>
        </div>
        
        <div className="bg-resume-secondary p-2.5 rounded-lg">
          <h3 className="text-base font-bold text-resume-primary mb-2">Competências Técnicas</h3>
          <ul className="space-y-1 text-sm text-resume-text">
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Análise de Mercado
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              KPIs Comerciais
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Gestão de Projetos
            </li>
          </ul>
        </div>
        
        <div className="bg-resume-secondary p-2.5 rounded-lg">
          <h3 className="text-base font-bold text-resume-primary mb-2">Soft Skills</h3>
          <ul className="space-y-1 text-sm text-resume-text">
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Liderança
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Comunicação
            </li>
            <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
              Resolução de Problemas
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};