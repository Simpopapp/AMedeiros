import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export const Languages = () => {
  const languages = [
    { name: "Português", level: "Nativo", proficiency: 100 },
    { name: "Inglês", level: "Fluente", proficiency: 90 },
    { name: "Espanhol", level: "Intermediário", proficiency: 75 }
  ];

  return (
    <section className="py-16 px-8 bg-resume-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <Globe2 className="h-8 w-8 text-resume-accent" />
          <h2 className="text-3xl font-bold text-resume-primary">
            Idiomas
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-resume-primary mb-2">
                {language.name}
              </h3>
              <p className="text-resume-text mb-4">{language.level}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-resume-accent h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${language.proficiency}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};