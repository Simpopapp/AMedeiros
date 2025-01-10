import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronRight, Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Oba Hortifruti",
    role: "Diretora comercial",
    period: "June 2019 - Present",
    location: "Campinas e Região, Brasil",
    responsibilities: [
      "Responsável pela área comercial das categorias de mercearia, frios, auto serviço, adega, biscoiteria e padaria",
      "Planejamento, negociação e desenvolvimento de marca própria das categorias",
      "Negócios internacionais",
      "Promoção e coordenação a vendas no varejo",
    ],
  },
  {
    company: "Borges International Group",
    role: "Diretora geral",
    period: "March 2015 - October 2018",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Responsável pela operação da Subsidiaria Borges no Brasil",
      "Reestruturação dos canais de vendas",
      "Estruturação de políticas comerciais",
      "Fortalecimento de parcerias existentes e prospecção de novos parceiros",
    ],
  },
  {
    company: "Barilla Group",
    role: "Diretora comercial",
    period: "June 2012 - June 2014",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Gestão de equipe de 33 colaboradores",
      "Reestruturação da área comercial",
      "Prospecção e contratação de 36 novos distribuidores",
      "Desenvolvimento do canal de vendas diretas",
    ],
  },
  {
    company: "Cargill",
    role: "Gerente Nacional comercial",
    period: "January 2006 - May 2012",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Responsável por equipe de 42 colaboradores",
      "Negociação interna e externa com principais Stakeholders",
      "Administração dos investimentos para o canal",
      "Interface com os departamentos de trade/marketing/planejamento/crédito/logística",
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

export const Experience = () => {
  return (
    <section className="py-16 px-8 bg-resume-secondary">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2 
          className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2"
          variants={item}
        >
          <Briefcase className="h-8 w-8 text-resume-accent" />
          Experiência Profissional
        </motion.h2>
        
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-resume-accent/30">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={item}
            >
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-resume-accent bg-white group-hover:bg-resume-accent transition-colors duration-300" />
              
              <Card className="ml-12 border-l-4 border-l-resume-accent transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-resume-primary group-hover:text-resume-accent transition-colors duration-300 flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-resume-accent" />
                        {exp.company}
                      </CardTitle>
                      <p className="text-lg text-resume-text mt-1 flex items-center gap-2">
                        {exp.role}
                        <ChevronRight className="h-4 w-4 text-resume-accent" />
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge variant="secondary" className="bg-resume-accent/10 text-resume-accent flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                      <span className="text-sm text-resume-text flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-resume-text flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="text-resume-accent mt-1.5">•</span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};