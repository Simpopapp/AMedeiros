import { Award, Target, Users, TrendingUp, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  return (
    <main className="flex-grow space-y-6">
      <div className="bg-resume-secondary p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-resume-primary mb-4 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-resume-accent" />
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
            Esses desafios enriqueceram minha habilidade de construir relacionamentos 
            sólidos com fornecedores e clientes, consolidando marcas no mercado nacional 
            e contribuindo para a expansão de negócios no varejo.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-resume-secondary p-6 rounded-lg"
        >
          <h4 className="text-xl font-semibold text-resume-primary mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-resume-accent" />
            Principais Resultados
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
            <li className="flex items-start gap-2">
              <span className="text-resume-accent mt-1.5">•</span>
              <span>72% de incremento em vendas no projeto Wal Mart</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-resume-secondary p-6 rounded-lg"
        >
          <h4 className="text-xl font-semibold text-resume-primary mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-resume-accent" />
            Gestão de Equipes
          </h4>
          <ul className="space-y-2 text-resume-text">
            <li className="flex items-start gap-2">
              <span className="text-resume-accent mt-1.5">•</span>
              <span>Liderança de equipes com até 42 colaboradores diretos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-resume-accent mt-1.5">•</span>
              <span>Gestão de equipes comerciais e de promotores</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-resume-accent mt-1.5">•</span>
              <span>Desenvolvimento e treinamento de equipes comerciais</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-resume-accent mt-1.5">•</span>
              <span>Coordenação de equipes multidisciplinares</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};