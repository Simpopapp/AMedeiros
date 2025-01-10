import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ScrollToTop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Summary />
      <Experience />
      <Education />
      
      {/* Floating action buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 no-print">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-resume-accent text-white hover:bg-resume-accent/90 transition-all duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          onClick={scrollToTop}
        >
          <ScrollToTop className="h-5 w-5" />
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