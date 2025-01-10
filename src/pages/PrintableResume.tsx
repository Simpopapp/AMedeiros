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
        <section className="w-[210mm] min-h-[297mm] mx-auto p-[20mm] flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0">
          <div className="flex-1 flex flex-col h-full">
            <PrintableHeader />
            <div className="flex-1 py-8">
              <SkillsSection />
            </div>
            <PrintableFooter pageNumber={1} />
          </div>
        </section>

        {/* Página 2: Experiência */}
        <section className="w-[210mm] min-h-[297mm] mx-auto p-[20mm] flex flex-col bg-white print:shadow-none shadow-lg mb-8 print:mb-0 page-break-before">
          <div className="flex-1 flex flex-col h-full">
            <ExperienceSection />
            <PrintableFooter pageNumber={2} />
          </div>
        </section>

        {/* Página 3: Educação e Competências */}
        <section className="w-[210mm] min-h-[297mm] mx-auto p-[20mm] flex flex-col bg-white print:shadow-none shadow-lg page-break-before">
          <div className="flex-1 flex flex-col h-full">
            <EducationSection />
            <PrintableFooter pageNumber={3} />
          </div>
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
              break-after: page;
            }

            section {
              break-inside: avoid;
              height: 297mm;
              width: 210mm;
              position: relative;
              overflow: hidden;
            }

            .no-print {
              display: none !important;
            }
          }

          /* Ensure consistent sizing even in preview */
          section {
            box-sizing: border-box;
            min-height: 297mm;
            width: 210mm;
            position: relative;
            overflow: hidden;
          }

          /* Flex container for content */
          .flex-1 {
            flex: 1 1 auto;
          }
        `}
      </style>
    </PrintableLayout>
  );
};

export default PrintableResume;