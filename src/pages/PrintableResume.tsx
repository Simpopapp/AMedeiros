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
        <section className="w-[210mm] min-h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0">
          <PrintableHeader />
          <div className="flex-grow">
            <SkillsSection />
          </div>
          <PrintableFooter pageNumber={1} />
        </section>

        <section className="w-[210mm] min-h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0">
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

        <section className="w-[210mm] min-h-[297mm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0">
          <div className="flex-grow">
            <ExperienceSection page={2} />
          </div>
          <Separator className="my-6 bg-resume-primary/10" />
          <PrintableFooter pageNumber={3} />
        </section>

        <section className="w-[210mm] min-h-[297mm] mx-auto p-12 flex flex-col bg-white print:shadow-none shadow-lg">
          <div className="flex-grow space-y-12">
            <div>
              <EducationSection />
              <Separator className="my-12 bg-resume-primary/10" />
            </div>
            
            <div className="pb-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe2 className="h-6 w-6 text-resume-accent stroke-[1.5]" />
                <h2 className="text-2xl font-bold text-resume-primary">
                  Idiomas
                </h2>
              </div>
              
              <div className="flex gap-6 justify-between max-w-3xl mx-auto">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex-1 bg-resume-secondary/20 px-6 py-4 rounded-lg border border-resume-primary/10 hover:border-resume-accent/30 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-resume-primary">
                        {language.name}
                      </h3>
                      <span className="text-sm text-resume-text font-medium">
                        {language.level}
                      </span>
                    </div>
                    <div className="w-full bg-white/70 rounded-full h-1.5">
                      <div
                        className="bg-resume-accent h-1.5 rounded-full transition-all duration-500"
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
    </PrintableLayout>
  );
};

export default PrintableResume;