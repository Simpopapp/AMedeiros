import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Welcome toast
    toast({
      title: "Bem-vindo ao Currículo Digital",
      description: "Navegue pelo conteúdo usando o scroll ou o menu de navegação",
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Preparando impressão",
      description: "O currículo está sendo preparado para impressão",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Summary />
      <Experience />
      <Education />
      
      {/* Floating action buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 no-print z-50">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-resume-accent text-white hover:bg-resume-accent/90 transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <ArrowUpCircle className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          className="rounded-full bg-resume-primary text-white hover:bg-resume-primary/90 transition-all duration-300"
          onClick={handlePrint}
        >
          Imprimir CV
        </Button>
      </div>
    </div>
  );
};

export default Index;