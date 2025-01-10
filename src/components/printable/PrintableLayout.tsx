import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface PrintableLayoutProps {
  children: React.ReactNode;
}

export const PrintableLayout = ({ children }: PrintableLayoutProps) => {
  const handleDownloadPDF = () => {
    toast.success("Preparando PDF para download...");
    window.print();
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-4 right-4 no-print">
        <Button
          onClick={handleDownloadPDF}
          className="bg-resume-accent hover:bg-resume-accent/90 text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Baixar PDF
        </Button>
      </div>
      
      {children}

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
            }

            .page-break-after {
              page-break-after: always;
              break-after: page;
            }

            .no-print {
              display: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};