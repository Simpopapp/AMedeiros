import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ArrowUpCircle, Share2, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, Suspense } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    
    toast({
      title: "Bem-vindo ao Currículo Digital",
      description: "Navegue pelo conteúdo usando o scroll ou o menu de navegação. Use as opções de compartilhamento para exportar ou enviar o currículo.",
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

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Currículo - Alessandra Medeiros de Oliveira',
          text: 'Confira meu currículo digital profissional',
          url: window.location.href,
        });
        toast({
          title: "Compartilhado com sucesso",
          description: "O link do currículo foi compartilhado",
          duration: 3000,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link copiado",
          description: "O link do currículo foi copiado para sua área de transferência",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao compartilhar",
        description: "Não foi possível compartilhar o currículo",
        duration: 3000,
        variant: "destructive",
      });
    }
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Download iniciado",
      description: "Seu PDF está sendo gerado e será baixado automaticamente",
      duration: 3000,
    });
    window.print();
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
      
      {/* Enhanced floating action buttons */}
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
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full bg-resume-primary text-white hover:bg-resume-primary/90 transition-all duration-300"
            >
              Opções <Share2 className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={handlePrint}>
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDownloadPDF}>
              <Download className="mr-2 h-4 w-4" />
              Baixar PDF
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleShare}>
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Index;