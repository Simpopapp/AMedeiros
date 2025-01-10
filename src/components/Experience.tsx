import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronRight } from "lucide-react";

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

export const Experience = () => {
  return (
    <section className="py-16 px-8 bg-resume-secondary animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-resume-accent" />
          Experiência Profissional
        </h2>
        
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-resume-accent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              <div className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-resume-accent bg-white group-hover:bg-resume-accent transition-colors duration-300" />
              
              <Card className="ml-12 border-l-4 border-l-resume-accent transform hover:-translate-y-1 transition-transform duration-300">
                <CardHeader>
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-resume-primary group-hover:text-resume-accent transition-colors duration-300">
                        {exp.company}
                      </CardTitle>
                      <p className="text-lg text-resume-text mt-1 flex items-center gap-2">
                        {exp.role}
                        <ChevronRight className="h-4 w-4 text-resume-accent" />
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-resume-accent/10 text-resume-accent">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-resume-text mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-resume-text flex items-start gap-2">
                        <span className="text-resume-accent mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};