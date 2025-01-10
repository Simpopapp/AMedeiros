import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
];

export const Experience = () => {
  return (
    <section className="py-16 px-8 bg-resume-secondary animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-8">
          Experiência Profissional
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-resume-accent">
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-resume-primary">
                      {exp.company}
                    </CardTitle>
                    <p className="text-lg text-resume-text mt-1">{exp.role}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-resume-text mb-4">{exp.location}</p>
                <ul className="list-disc list-inside space-y-2 text-resume-text">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};