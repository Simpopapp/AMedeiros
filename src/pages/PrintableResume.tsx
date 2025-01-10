import { PrintableHeader } from "@/components/printable/PrintableHeader";
import { PrintableFooter } from "@/components/printable/PrintableFooter";
import { PrintableLayout } from "@/components/printable/PrintableLayout";
import { ExperienceSection } from "@/components/printable/ExperienceSection";
import { SkillsSection } from "@/components/printable/SkillsSection";
import { EducationSection } from "@/components/printable/EducationSection";
import { motion } from "framer-motion";

const PrintableResume = () => {
  return (
    <PrintableLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Página 1: Cabeçalho e Resumo */}
        <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
          <PrintableHeader />
          <SkillsSection />
          <PrintableFooter pageNumber={1} />
        </section>

        {/* Página 2: Experiência */}
        <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg mb-8">
          <ExperienceSection />
          <PrintableFooter pageNumber={2} />
        </section>

        {/* Página 3: Educação e Competências */}
        <section className="w-[21cm] min-h-[29.7cm] mx-auto p-8 flex flex-col bg-white print:shadow-none shadow-lg">
          <EducationSection />
          <PrintableFooter pageNumber={3} />
        </section>
      </motion.div>
    </PrintableLayout>
  );
};

export default PrintableResume;