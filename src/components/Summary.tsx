import { Award, Briefcase, Globe, TrendingUp, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export const Summary = () => {
  return (
    <section className="py-16 px-8 bg-resume-secondary animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-resume-primary mb-8 flex items-center gap-2">
          <Award className="h-8 w-8 text-resume-accent" />
          Resumo Profissional
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Briefcase className="h-6 w-6 text-resume-accent mt-1 flex-shrink-0" />
              <p className="text-resume-text">
                Com mais de duas décadas em gestão comercial, na Indústria e
                varejo, dedico-me atualmente à expansão e fortalecimento das
                categorias de produtos no Oba Hortifruti, incluindo mercearia, frios,
                auto serviço, adega, biscoiteria e padaria.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-resume-accent mt-1 flex-shrink-0" />
              <p className="text-resume-text">
                Nossa equipe tem se concentrado em planejar e negociar o desenvolvimento 
                de marcas próprias e importação como principais pilares do negócio, 
                além de impulsionar a promoção de vendas no varejo, assegurando a 
                excelência e o crescimento sustentável da empresa.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Target className="h-6 w-6 text-resume-accent mt-1 flex-shrink-0" />
              <p className="text-resume-text">
                A condução dos negócios nacionais e internacionais me proporcionou 
                uma visão global e competências profundas em negociações e parcerias 
                comerciais, consolidando marcas no mercado nacional e contribuindo 
                para a expansão de negócios no varejo.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-resume-primary mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-resume-accent" />
                Principais Conquistas
              </h3>
              <ul className="space-y-3 text-resume-text">
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Dobrou volume de vendas na Barilla (7k para 13k tons)
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Conquistou 4% do marketshare brasileiro em um ano
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Ampliou carteira de 2.500 para 17.000 clientes
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  72% de incremento em vendas no projeto Wal Mart
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-resume-primary mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-resume-accent" />
                Competências Chave
              </h3>
              <ul className="space-y-3 text-resume-text">
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Gestão de negócios internacionais
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Desenvolvimento de marca própria
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Negociação com stakeholders
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Gestão estratégica de produtos
                </li>
                <li className="flex items-center gap-2 before:content-['•'] before:text-resume-accent before:font-bold">
                  Liderança de equipes comerciais
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};