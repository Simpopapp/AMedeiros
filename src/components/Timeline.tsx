import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: '2023',
    title: 'Diretora Comercial',
    company: 'Oba Hortifruti',
    description: 'Liderança em negociações e desenvolvimento de marca própria'
  },
  {
    year: '2020',
    title: 'Gerente Comercial',
    company: 'Empresa Anterior',
    description: 'Gestão de equipe e desenvolvimento de negócios'
  },
  // Adicione mais itens conforme necessário
];

export const Timeline = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-resume-accent/30" />
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } mb-8`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-resume-accent font-bold">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.company}</p>
                  <p className="mt-2 text-gray-500">{item.description}</p>
                </div>
              </div>
              
              {/* Círculo central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-resume-accent rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};