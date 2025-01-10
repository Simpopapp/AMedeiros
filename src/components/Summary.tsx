import { Award, Briefcase, Globe } from "lucide-react";

export const Summary = () => {
  return (
    <section className="py-16 px-8 bg-resume-secondary animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
          <Award className="h-8 w-8 text-resume-accent" />
          Resumo Profissional
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6 text-resume-accent mt-1" />
              <p className="text-resume-text">
                Com mais de duas décadas em gestão comercial, na Indústria e
                varejo, dedico-me atualmente à expansão e fortalecimento das
                categorias de produtos no Oba Hortifruti.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-resume-accent mt-1" />
              <p className="text-resume-text">
                A condução dos negócios nacionais e internacionais,
                desenvolvimento de marca própria e gestão estratégica de
                produtos, me proporcionaram uma visão global e competências
                profundas em negociações e parcerias comerciais.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
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
  );
};