import { User, Mail, MapPin, Briefcase, Globe2, Brain, Code, Lightbulb } from "lucide-react";

const StaticResume = () => {
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

  const languages = [
    { name: "Português", level: "Nativo", proficiency: 100 },
    { name: "Inglês", level: "Fluente", proficiency: 90 },
    { name: "Espanhol", level: "Intermediário", proficiency: 75 }
  ];

  const experiences = [
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

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Hero Section */}
      <section className="bg-resume-secondary py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-40 h-40 mx-auto rounded-full bg-resume-accent mb-8 overflow-hidden">
            <img
              src="/lovable-uploads/0f0bddb9-9136-4122-a863-4751fe7f38e9.png"
              alt="Alessandra Medeiros de Oliveira"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-resume-primary mb-4">
            Alessandra Medeiros de Oliveira
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-resume-accent mb-6">
            <Briefcase className="w-5 h-5" />
            <h2 className="text-xl font-medium">Diretora Comercial</h2>
          </div>
          
          <h3 className="text-lg text-resume-text mb-8">
            Oba Hortifruti | Negociação, Desenvolvimento de Marca Própria e Negócios Internacionais
          </h3>
          
          <div className="flex flex-wrap gap-6 justify-center items-center text-resume-text">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-resume-accent" />
              <span>São Paulo, Brazil</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <Mail className="w-5 h-5 text-resume-accent" />
              <span>contato@alessandra.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 px-8 bg-resume-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-resume-text">
                Com mais de duas décadas em gestão comercial, na Indústria e
                varejo, dedico-me atualmente à expansão e fortalecimento das
                categorias de produtos no Oba Hortifruti.
              </p>
              <p className="text-resume-text">
                A condução dos negócios nacionais e internacionais,
                desenvolvimento de marca própria e gestão estratégica de
                produtos, me proporcionaram uma visão global e competências
                profundas em negociações e parcerias comerciais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-resume-primary mb-4">
                Principais Focos
              </h3>
              <ul className="space-y-3 text-resume-text">
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Planejamento e negociação de marcas próprias
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Importação e negócios internacionais
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Promoção de vendas no varejo
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Gestão estratégica de produtos
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Relacionamento com fornecedores e clientes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-8 bg-resume-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-resume-primary mb-8">
            Experiência Profissional
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-resume-primary">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-resume-text">{exp.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-resume-accent">{exp.period}</p>
                    <p className="text-sm text-resume-text">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-resume-text flex items-start gap-2">
                      <span className="text-resume-accent">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-resume-primary mb-12 text-center">
            Competências
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet) => (
              <div
                key={skillSet.category}
                className="bg-white p-6 rounded-lg shadow-lg"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 px-8 bg-resume-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Globe2 className="h-8 w-8 text-resume-accent" />
            <h2 className="text-3xl font-bold text-resume-primary">
              Idiomas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language) => (
              <div
                key={language.name}
                className="bg-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-resume-primary mb-2">
                  {language.name}
                </h3>
                <p className="text-resume-text mb-4">{language.level}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-resume-accent h-2.5 rounded-full"
                    style={{ width: `${language.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticResume;