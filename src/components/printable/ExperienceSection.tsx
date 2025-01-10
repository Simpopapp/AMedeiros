import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Oba Hortifruti",
    role: "Diretora comercial",
    period: "2019 - Presente",
    location: "Campinas e Região, Brasil",
    responsibilities: [
      "Responsável pela área comercial das categorias de mercearia, frios, auto serviço, adega, biscoiteria e padaria",
      "Planejamento, negociação e desenvolvimento de marca própria das categorias",
      "Negócios internacionais",
      "Promoção e coordenação a vendas no varejo"
    ]
  },
  {
    company: "Borges International Group",
    role: "Diretora geral",
    period: "2015 - 2018",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Responsável pela operação da Subsidiaria Borges no Brasil",
      "Reestruturação dos canais de vendas",
      "Estruturação de políticas comerciais",
      "Fortalecimento de parcerias existentes e prospecção de novos parceiros"
    ]
  },
  {
    company: "Barilla Group",
    role: "Diretora comercial",
    period: "2012 - 2014",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Gestão de equipe de 33 colaboradores",
      "Reestruturação da área comercial",
      "Prospecção e contratação de 36 novos distribuidores",
      "Desenvolvimento do canal de vendas diretas"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <div className="flex-grow space-y-6">
      <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
        <Building2 className="h-8 w-8 text-resume-accent" />
        Experiência Profissional
      </h2>

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-resume-secondary p-6 rounded-lg"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-resume-primary">{exp.company}</h3>
              <p className="text-lg text-resume-text">{exp.role}</p>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-resume-accent/10 text-resume-accent flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </Badge>
              <span className="text-sm text-resume-text flex items-center gap-1 mt-2">
                <MapPin className="h-3 w-3" />
                {exp.location}
              </span>
            </div>
          </div>
          <ul className="space-y-2">
            {exp.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                className="text-resume-text flex items-start gap-2"
              >
                <span className="text-resume-accent mt-1.5">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};