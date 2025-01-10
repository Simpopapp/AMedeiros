import { PrintableHeader } from "@/components/printable/PrintableHeader";
import { PrintableFooter } from "@/components/printable/PrintableFooter";
import { PrintableLayout } from "@/components/printable/PrintableLayout";
import { ExperienceSection } from "@/components/printable/ExperienceSection";
import { SkillsSection } from "@/components/printable/SkillsSection";
import { EducationSection } from "@/components/printable/EducationSection";
import { Globe2 } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

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
          <div className="flex-grow">
            <SkillsSection />
          </div>
          <PrintableFooter pageNumber={1} />
        </section>

        {/* Página 2: Experiência Parte 1 */}
        <section className="w-[210mm] h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0 page-break-before">
          <h2 className="text-3xl font-bold text-resume-primary mb-8">
            Experiência Profissional
          </h2>
          <Separator className="mb-8 bg-resume-primary/10" />
          <div className="flex-grow">
            <ExperienceSection page={1} />
          </div>
          <Separator className="my-6 bg-resume-primary/10" />
          <PrintableFooter pageNumber={2} />
        </section>

        {/* Página 3: Experiência Parte 2 */}
        <section className="w-[210mm] h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0 page-break-before">
          <div className="flex-grow">
            <ExperienceSection page={2} />
          </div>
          <Separator className="my-6 bg-resume-primary/10" />
          <PrintableFooter pageNumber={3} />
        </section>

        {/* Página 4: Educação e Idiomas */}
        <section className="w-[210mm] h-[297mm] mx-auto p-12 flex flex-col bg-white print:shadow-none shadow-lg page-break-before">
          <div className="flex-grow space-y-12">
            <div>
              <EducationSection />
              <Separator className="my-12 bg-resume-primary/10" />
            </div>
            
            {/* Seção de Idiomas */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Globe2 className="h-8 w-8 text-resume-accent" />
                <h2 className="text-3xl font-bold text-resume-primary">
                  Idiomas
                </h2>
              </div>
              
              <div className="flex gap-8 justify-between">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex-1 bg-resume-secondary/50 px-6 py-5 rounded-lg border border-resume-primary/5"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-resume-primary">
                        {language.name}
                      </h3>
                      <span className="text-base text-resume-text">
                        {language.level}
                      </span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-2">
                      <div
                        className="bg-resume-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${language.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-resume-primary/10" />
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
