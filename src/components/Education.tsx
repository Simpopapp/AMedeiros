import { GraduationCap, BookOpen, Award, UserCheck, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Liderança",
    items: [
      "Gestão de Equipes",
      "Desenvolvimento de Talentos",
      "Planejamento Estratégico",
      "Tomada de Decisão",
    ],
  },
  {
    category: "Comercial",
    items: [
      "Negociação",
      "Gestão de Contas-Chave",
      "Desenvolvimento de Negócios",
      "Estratégia de Vendas",
    ],
  },
  {
    category: "Gestão",
    items: [
      "Gestão de Projetos",
      "Análise Financeira",
      "Gestão de Riscos",
      "Planejamento Orçamentário",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Education = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="mb-16">
          <motion.h2 
            className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2"
            variants={item}
          >
            <GraduationCap className="h-8 w-8 text-resume-accent" />
            Educação
          </motion.h2>
          <motion.div variants={item}>
            <Card className="border-l-4 border-l-resume-accent transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-resume-secondary rounded-full">
                    <Building className="w-6 h-6 text-resume-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-resume-primary">
                      Faculdades Integradas de Guarulhos
                    </h3>
                    <p className="text-resume-text mt-1">
                      Graduação em Administração
                    </p>
                    <Badge 
                      variant="secondary" 
                      className="mt-2 bg-resume-accent/10 text-resume-accent"
                    >
                      1997 - 2001
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div>
          <motion.h2 
            className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2"
            variants={item}
          >
            <Award className="h-8 w-8 text-resume-accent" />
            Competências
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                variants={item}
              >
                <Card 
                  className="border-t-4 border-t-resume-accent transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <UserCheck className="w-5 h-5 text-resume-accent" />
                      <h3 className="text-lg font-semibold text-resume-primary">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-resume-text flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <span className="text-resume-accent mt-1.5">•</span>
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};