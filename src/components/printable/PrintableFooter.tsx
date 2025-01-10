import { motion } from "framer-motion";

export const PrintableFooter = ({ pageNumber }: { pageNumber: number }) => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-auto pt-8 text-center text-resume-text border-t border-resume-accent/20"
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm">Página {pageNumber} de 3</span>
        <span className="text-resume-accent">•</span>
        <span className="text-sm">Currículo Digital</span>
      </div>
    </motion.footer>
  );
};