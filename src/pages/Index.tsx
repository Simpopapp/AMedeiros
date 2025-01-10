import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Languages } from "@/components/Languages";
import { useState, useEffect, Suspense } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ActionButtons } from "@/components/layout/ActionButtons";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    
    toast({
      title: "Bem-vindo ao Currículo Digital",
      description: "Navegue pelo conteúdo usando o scroll ou o menu de navegação. Use as opções de compartilhamento para exportar ou enviar o currículo.",
      duration: 5000,
      className: "absolute left-48 top-48"
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    toast({
      title: "Preparando versão para impressão",
      description: "Redirecionando para a versão otimizada para PDF...",
      duration: 3000,
    });
    window.open('/printable', '_blank');
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

  const handlePrintableView = () => {
    navigate('/printable');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/alessandra-medeiros-de-oliveira-698a6a15/', '_blank');
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
            <Skills />
            <Languages />

            <ActionButtons
              showScrollTop={showScrollTop}
              onScrollTop={scrollToTop}
              onLinkedInClick={handleLinkedInClick}
              onPrintableView={handlePrintableView}
              onPrint={handlePrint}
              onDownloadPDF={handleDownloadPDF}
              onShare={handleShare}
            />
          </motion.div>
        </AnimatePresence>
      </Suspense>
    </div>
  );
};

export default Index;