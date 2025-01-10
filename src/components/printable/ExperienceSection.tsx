import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Target, Award } from "lucide-react";
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
      "Responsável pela operação da Subsidiaria Borges no Brasil, reportando ao diretor mundial da Borges Branded foods sediada na Espanha",
      "Direção das áreas de vendas, Marketing, financeiro, importação e merchandising na filial Brasil",
      "Reestruturação dos canais de vendas e políticas comerciais",
      "Expansão da malha de distribuição no Brasil e ampliação de portfólio"
    ]
  },
  {
    company: "Barilla Group",
    role: "Diretora comercial",
    period: "2012 - 2014",
    location: "São Paulo Area, Brazil",
    achievements: [
      "Dobrou o volume de vendas de 7mil para 13mil tons em um ano",
      "Conquistou 4% do marketshare brasileiro em tempo recorde",
      "Ampliou carteira de 2.500 para 17.000 clientes",
      "Faturamento projetado de R$ 150 milhões em 2014"
    ],
    responsibilities: [
      "Liderança de equipe com 33 colaboradores (6 gerentes de vendas, 1 gerente trade Mkt e 25 vendedores)",
      "Reestruturação da área comercial e canais de vendas",
      "Prospecção e contratação de 36 novos distribuidores",
      "Implementação do programa de excelência em distribuição"
    ]
  },
  {
    company: "Cargill",
    role: "Gerente Nacional comercial",
    period: "2006 - 2012",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Gestão de equipe com 42 colaboradores e operação de R$ 500 milhões",
      "Negociação com principais Stakeholders e administração de investimentos",
      "Interface com departamentos de trade/marketing/planejamento/crédito/logística",
      "Alinhamento estratégico da equipe de varejo com equipe key account"
    ]
  },
  {
    company: "Philip Morris International",
    role: "Gerente de vendas Key account",
    period: "2004 - 2006",
    location: "São Paulo Area, Brazil",
    achievements: [
      "72% de incremento no sell out do Wal Mart com projeto piloto",
      "Redução significativa de rupturas em lojas através do projeto de consignação"
    ],
    responsibilities: [
      "Gestão de contas nacionais (GPA, Wal Mart e Carrefour)",
      "Desenvolvimento de estratégias para key accounts regionais",
      "Renegociação de contratos de fornecimento"
    ]
  },
  {
    company: "Parmalat",
    role: "Coordenadora de vendas",
    period: "1996 - 2004",
    location: "São Paulo Area, Brazil",
    responsibilities: [
      "Gestão de equipe com 6 vendedores e 40 promotores",
      "Atendimento às lojas Carrefour em São Paulo",
      "Estruturação de propostas de negócios e controles",
      "Gestão de contratos de fornecimento"
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

          {exp.achievements && (
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-resume-primary flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-resume-accent" />
                Principais Conquistas
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
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
          </div>
        </motion.div>
      ))}
    </div>
  );
};