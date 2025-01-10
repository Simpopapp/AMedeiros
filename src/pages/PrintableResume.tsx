import { PrintableHeader } from "@/components/printable/PrintableHeader";
import { PrintableFooter } from "@/components/printable/PrintableFooter";
import { PrintableLayout } from "@/components/printable/PrintableLayout";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, Trophy, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const PrintableResume = () => {
  return (
    <PrintableLayout>
      {/* Página 1: Cabeçalho e Resumo */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
        <PrintableHeader />
        
        <main className="flex-grow space-y-6">
          <div className="bg-resume-secondary p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-resume-primary mb-4 flex items-center gap-2">
              <Target className="h-6 w-6 text-resume-accent" />
              Resumo Profissional
            </h3>
            <div className="space-y-4 text-resume-text">
              <p>
                Com mais de duas décadas em gestão comercial, na Indústria e varejo, 
                dedico-me atualmente à expansão e fortalecimento das categorias de 
                produtos no Oba Hortifruti.
              </p>
              <p>
                Nossa equipe tem se concentrado em planejar e negociar o desenvolvimento 
                de marcas próprias e importação como principais pilares do negócio, além 
                de impulsionar a promoção de vendas no varejo, assegurando a excelência 
                e o crescimento sustentável da empresa.
              </p>
              <p>
                A condução dos negócios nacionais e internacionais, desenvolvimento de 
                marca própria e gestão estratégica de produtos, me proporcionaram uma 
                visão global e competências profundas em negociações e parcerias comerciais.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-resume-primary mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-resume-accent" />
                Principais Conquistas
              </h4>
              <ul className="space-y-2 text-resume-text">
                <li className="flex items-start gap-2">
                  <span className="text-resume-accent mt-1.5">•</span>
                  <span>Dobrou volume de vendas na Barilla (7k para 13k tons)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-resume-accent mt-1.5">•</span>
                  <span>Conquistou 4% do marketshare brasileiro em um ano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-resume-accent mt-1.5">•</span>
                  <span>Ampliou carteira de 2.500 para 17.000 clientes</span>
                </li>
              </ul>
            </div>

            <div className="bg-resume-secondary p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-resume-primary mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-resume-accent" />
                Gestão de Equipes
              </h4>
              <ul className="space-y-2 text-resume-text">
                <li className="flex items-start gap-2">
                  <span className="text-resume-accent mt-1.5">•</span>
                  <span>Liderança de equipes com até 42 colaboradores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-resume-accent mt-1.5">•</span>
                  <span>Gestão de vendedores e promotores em múltiplos canais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-resume-accent mt-1.5">•</span>
                  <span>Desenvolvimento e treinamento de equipes comerciais</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <PrintableFooter pageNumber={1} />
      </section>

      {/* Página 2: Experiência */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
          <Building2 className="h-8 w-8 text-resume-accent" />
          Experiência Profissional
        </h2>

        <main className="flex-grow space-y-6">
          {[
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
          ].map((exp, index) => (
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
        </main>

        <PrintableFooter pageNumber={2} />
      </section>

      {/* Página 3: Competências e Idiomas */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg">
        <h2 className="text-3xl font-bold text-resume-primary mb-8">
          Competências e Idiomas
        </h2>

        <main className="flex-grow">
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-4">Gestão Comercial</h3>
              <ul className="space-y-2 text-resume-text">
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
            
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-4">Competências Técnicas</h3>
              <ul className="space-y-2 text-resume-text">
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
            
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-resume-text">
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
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-2">Português</h3>
              <p className="text-resume-text mb-4">Nativo</p>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-resume-accent h-2 rounded-full w-full"></div>
              </div>
            </div>
            
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-2">Inglês</h3>
              <p className="text-resume-text mb-4">Fluente</p>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-resume-accent h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-2">Espanhol</h3>
              <p className="text-resume-text mb-4">Intermediário</p>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-resume-accent h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>
        </main>

        <PrintableFooter pageNumber={3} />
      </section>
    </PrintableLayout>
  );
};

export default PrintableResume;