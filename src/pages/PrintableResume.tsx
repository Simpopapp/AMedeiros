import { PrintableHeader } from "@/components/printable/PrintableHeader";
import { PrintableFooter } from "@/components/printable/PrintableFooter";
import { PrintableLayout } from "@/components/printable/PrintableLayout";

const PrintableResume = () => {
  return (
    <PrintableLayout>
      {/* Página 1: Cabeçalho e Resumo */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
        <PrintableHeader />
        
        <main className="flex-grow">
          <div className="bg-resume-secondary p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-resume-primary mb-4">
              Resumo Profissional
            </h3>
            <p className="text-resume-text mb-4">
              Com mais de duas décadas em gestão comercial, na Indústria e varejo, 
              dedico-me atualmente à expansão e fortalecimento das categorias de 
              produtos no Oba Hortifruti.
            </p>
            <p className="text-resume-text">
              A condução dos negócios nacionais e internacionais, desenvolvimento 
              de marca própria e gestão estratégica de produtos, me proporcionaram 
              uma visão global e competências profundas em negociações e parcerias comerciais.
            </p>
          </div>
        </main>

        <PrintableFooter pageNumber={1} />
      </section>

      {/* Página 2: Experiência */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-resume-primary mb-8">
          Experiência Profissional
        </h2>

        <main className="flex-grow">
          <div className="space-y-6">
            {/* Oba Hortifruti */}
            <div className="bg-resume-secondary p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-resume-primary">Oba Hortifruti</h3>
                  <p className="text-lg text-resume-text">Diretora comercial</p>
                </div>
                <div className="text-right">
                  <p className="text-resume-accent">2019 - Presente</p>
                  <p className="text-sm text-resume-text">Campinas e Região, Brasil</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-resume-text space-y-2 ml-4">
                <li>Responsável pela área comercial das categorias de mercearia, frios, auto serviço, adega, biscoiteria e padaria</li>
                <li>Planejamento, negociação e desenvolvimento de marca própria das categorias</li>
                <li>Negócios internacionais</li>
                <li>Promoção e coordenação a vendas no varejo</li>
              </ul>
            </div>

            {/* Borges International Group */}
            <div className="bg-resume-secondary p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-resume-primary">Borges International Group</h3>
                  <p className="text-lg text-resume-text">Diretora geral</p>
                </div>
                <div className="text-right">
                  <p className="text-resume-accent">2015 - 2018</p>
                  <p className="text-sm text-resume-text">São Paulo Area, Brazil</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-resume-text space-y-2 ml-4">
                <li>Responsável pela operação da Subsidiaria Borges no Brasil</li>
                <li>Reestruturação dos canais de vendas</li>
                <li>Estruturação de políticas comerciais</li>
                <li>Fortalecimento de parcerias existentes e prospecção de novos parceiros</li>
              </ul>
            </div>
          </div>
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