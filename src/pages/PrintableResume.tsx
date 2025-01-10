import { PrintableHeader } from "@/components/printable/PrintableHeader";
import { PrintableFooter } from "@/components/printable/PrintableFooter";
import { PrintableLayout } from "@/components/printable/PrintableLayout";
import { ExperienceSection } from "@/components/printable/ExperienceSection";
import { SkillsSection } from "@/components/printable/SkillsSection";
import { EducationSection } from "@/components/printable/EducationSection";
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const PrintableResume = () => {
  const languages = [
    { name: "Português", level: "Nativo", proficiency: 100 },
    { name: "Inglês", level: "Fluente", proficiency: 90 },
    { name: "Espanhol", level: "Intermediário", proficiency: 75 }
  ];

  return (
    <PrintableLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="print:m-0"
      >
        {/* Página 1: Cabeçalho e Resumo */}
        <section className="w-[210mm] h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0">
          <PrintableHeader />
          <div className="flex-grow overflow-auto">
            <SkillsSection />
          </div>
          <PrintableFooter pageNumber={1} />
        </section>

        {/* Página 2: Experiência Parte 1 */}
        <section className="w-[210mm] h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0 page-break-before">
          <h2 className="text-3xl font-bold text-resume-primary mb-8">
            Experiência Profissional
          </h2>
          <div className="flex-grow overflow-auto">
            <ExperienceSection page={1} />
          </div>
          <PrintableFooter pageNumber={2} />
        </section>

        {/* Página 3: Experiência Parte 2 */}
        <section className="w-[210mm] h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0 page-break-before">
          <div className="flex-grow overflow-auto">
            <ExperienceSection page={2} />
          </div>
          <PrintableFooter pageNumber={3} />
        </section>

        {/* Página 4: Educação, Competências e Idiomas */}
        <section className="w-[210mm] h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg page-break-before">
          <div className="flex-grow overflow-auto space-y-12">
            <EducationSection />
            
            {/* Seção de Idiomas */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <Globe2 className="h-8 w-8 text-resume-accent" />
                <h2 className="text-3xl font-bold text-resume-primary">
                  Idiomas
                </h2>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="bg-resume-secondary p-6 rounded-lg"
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
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PrintableFooter pageNumber={4} />
        </section>
      </motion.div>

      <style>
        {`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            
            body {
              margin: 0;
              padding: 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            .page-break-before {
              page-break-before: always;
            }

            .no-print {
              display: none !important;
            }

            section {
              break-inside: avoid;
              height: 297mm;
              width: 210mm;
              page-break-after: always;
            }

            section:last-child {
              page-break-after: auto;
            }
          }
        `}
      </style>
    </PrintableLayout>
  );
};

export default PrintableResume;