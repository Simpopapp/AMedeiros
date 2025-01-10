import { Share2, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface ShareOptionsProps {
  onPrint: () => void;
  onDownloadPDF: () => void;
  onShare: () => void;
}

export const ShareOptions = ({ onPrint, onDownloadPDF, onShare }: ShareOptionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-resume-primary text-white hover:bg-resume-primary/80 shadow-lg transition-all duration-300 rounded-full flex items-center gap-2 px-6"
        >
          Opções <Share2 className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 mt-2">
        <DropdownMenuItem onClick={onPrint} className="cursor-pointer">
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDownloadPDF} className="cursor-pointer">
          <Download className="mr-2 h-4 w-4" />
          Baixar PDF
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onShare} className="cursor-pointer">
          <Share2 className="mr-2 h-4 w-4" />
          Compartilhar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};