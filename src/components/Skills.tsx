import { Code, Brain, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    {
      category: "Gestão Comercial",
      items: ["Negociação", "Desenvolvimento de Marca", "Gestão de Equipes", "Planejamento Estratégico"],
      icon: <Brain className="h-6 w-6 text-resume-accent" />
    },
    {
      category: "Competências Técnicas",
      items: ["Análise de Mercado", "KPIs Comerciais", "Gestão de Projetos", "Business Intelligence"],
      icon: <Code className="h-6 w-6 text-resume-accent" />
    },
    {
      category: "Soft Skills",
      items: ["Liderança", "Comunicação", "Resolução de Problemas", "Trabalho em Equipe"],
      icon: <Lightbulb className="h-6 w-6 text-resume-accent" />
    }
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
          Competências
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <motion.div
              key={skillSet.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                {skillSet.icon}
                <h3 className="text-xl font-semibold text-resume-primary">
                  {skillSet.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-resume-text before:content-['•'] before:text-resume-accent before:font-bold"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};