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
        className="print:m-0"
      >
        {/* Página 1: Cabeçalho e Resumo */}
        <section className="w-[210mm] h-[297mm] mx-auto p-[20mm] flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0">
          <PrintableHeader />
          <SkillsSection />
          <PrintableFooter pageNumber={1} />
        </section>

        {/* Página 2: Experiência */}
        <section className="w-[210mm] h-[297mm] mx-auto p-[20mm] flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0 page-break-before">
          <ExperienceSection />
          <PrintableFooter pageNumber={2} />
        </section>

        {/* Página 3: Educação e Competências */}
        <section className="w-[210mm] h-[297mm] mx-auto p-[20mm] flex flex-col bg-white print:shadow-none shadow-lg page-break-before">
          <EducationSection />
          <PrintableFooter pageNumber={3} />
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
              margin: 0;
              padding: 20mm;
              box-sizing: border-box;
            }
          }
        `}
      </style>
    </PrintableLayout>
  );
};

export default PrintableResume;