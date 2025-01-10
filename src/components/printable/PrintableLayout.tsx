import { Download, Printer, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PrintableLayoutProps {
  children: React.ReactNode;
}

export const PrintableLayout = ({ children }: PrintableLayoutProps) => {
  const navigate = useNavigate();
  
  const handleDownloadPDF = () => {
    toast.success("Preparando PDF para download...");
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Currículo - Alessandra Medeiros",
        url: window.location.href,
      }).then(() => {
        toast.success("Link compartilhado com sucesso!");
      }).catch(() => {
        toast.error("Erro ao compartilhar");
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 z-50 no-print flex gap-2"
      >
        <Button
          variant="outline"
          onClick={() => navigate('/')}
          className="bg-white hover:bg-gray-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <Button
          variant="outline"
          onClick={handleShare}
          className="bg-white hover:bg-gray-100"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Compartilhar
        </Button>
        
        <Button
          onClick={() => window.print()}
          variant="outline"
          className="bg-white hover:bg-gray-100"
        >
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
        
        <Button
          onClick={handleDownloadPDF}
          className="bg-resume-accent hover:bg-resume-accent/90 text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          PDF
        </Button>
      </motion.div>
      
      {children}
    </div>
  );
};