import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, Suspense } from "react";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Welcome toast with improved messaging
    toast({
      title: "Bem-vindo ao Currículo Digital",
      description: "Navegue pelo conteúdo usando o scroll ou o menu de navegação. Clique no botão de impressão para salvar em PDF.",
      duration: 5000,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    toast({
      title: "Preparando impressão",
      description: "O currículo está sendo preparado para impressão em PDF",
      duration: 3000,
    });
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-resume-accent">Carregando...</div>
        </div>
      }>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Summary />
            <Experience />
            <Education />
          </motion.div>
        </AnimatePresence>
      </Suspense>
      
      {/* Floating action buttons with improved animations */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 no-print z-50">
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-resume-accent text-white hover:bg-resume-accent/90 transition-all duration-300"
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
              >
                <ArrowUpCircle className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <Button
            variant="outline"
            className="rounded-full bg-resume-primary text-white hover:bg-resume-primary/90 transition-all duration-300"
            onClick={handlePrint}
          >
            Imprimir CV
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;