import { User, Mail, MapPin, Briefcase, Globe2, Brain, Code, Lightbulb, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PrintableResume = () => {
  const handleDownloadPDF = () => {
    toast.success("Preparando PDF para download...");
    window.print();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Download Button - Only visible on screen */}
      <div className="fixed top-4 right-4 no-print">
        <Button
          onClick={handleDownloadPDF}
          className="bg-resume-accent hover:bg-resume-accent/90 text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Baixar PDF
        </Button>
      </div>

      {/* Page 1: Header and Summary */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
        <div className="flex items-center gap-8 mb-12">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/0f0bddb9-9136-4122-a863-4751fe7f38e9.png"
              alt="Alessandra Medeiros de Oliveira"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-resume-primary mb-4">
              Alessandra Medeiros de Oliveira
            </h1>
            <div className="flex items-center gap-2 text-resume-accent mb-4">
              <Briefcase className="w-5 h-5" />
              <h2 className="text-xl">Diretora Comercial</h2>
            </div>
            <div className="flex flex-col gap-2 text-resume-text">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@alessandra.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-resume-secondary p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-resume-primary mb-4">Resumo Profissional</h3>
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

        <div className="page-break-after"></div>
      </section>

      {/* Page 2: Experience */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-resume-accent" />
          Experiência Profissional
        </h2>

        <div className="space-y-6">
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

        <div className="page-break-after"></div>
      </section>

      {/* Page 3: Skills and Languages */}
      <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
            <Brain className="h-8 w-8 text-resume-accent" />
            Competências
          </h2>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-4">Gestão Comercial</h3>
              <ul className="space-y-2 text-resume-text">
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Negociação
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Desenvolvimento de Marca
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Gestão de Equipes
                </li>
              </ul>
            </div>
            
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-4">Competências Técnicas</h3>
              <ul className="space-y-2 text-resume-text">
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Análise de Mercado
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  KPIs Comerciais
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Gestão de Projetos
                </li>
              </ul>
            </div>
            
            <div className="bg-resume-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-resume-primary mb-4">Soft Skills</h3>
              <ul className="space-y-2 text-resume-text">
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Liderança
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Comunicação
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-resume-accent">•</span>
                  Resolução de Problemas
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
            <Globe2 className="h-8 w-8 text-resume-accent" />
            Idiomas
          </h2>
          
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
        </div>
      </section>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
          }

          .page-break-after {
            page-break-after: always;
            break-after: page;
          }

          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintableResume;