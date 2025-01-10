import { ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollToTopProps {
  showScrollTop: boolean;
  onScrollTop: () => void;
}

export const ScrollToTop = ({ showScrollTop, onScrollTop }: ScrollToTopProps) => {
  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="bg-resume-accent text-white hover:bg-resume-accent/80 shadow-lg transition-all duration-300 rounded-full"
            onClick={onScrollTop}
            aria-label="Voltar ao topo"
          >
            <ArrowUpCircle className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};