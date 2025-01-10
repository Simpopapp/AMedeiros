import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareOptions } from "./ShareOptions";
import { ScrollToTop } from "./ScrollToTop";

interface ActionButtonsProps {
  showScrollTop: boolean;
  onScrollTop: () => void;
  onLinkedInClick: () => void;
  onPrintableView: () => void;
  onPrint: () => void;
  onDownloadPDF: () => void;
  onShare: () => void;
}

export const ActionButtons = ({
  showScrollTop,
  onScrollTop,
  onLinkedInClick,
  onPrintableView,
  onPrint,
  onDownloadPDF,
  onShare,
}: ActionButtonsProps) => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      <Button
        onClick={onLinkedInClick}
        variant="outline"
        className="bg-[#0077B5] text-white hover:bg-[#0077B5]/80 shadow-lg transition-all duration-300 rounded-full flex items-center gap-2 px-6"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Button>

      <Button
        onClick={onPrintableView}
        variant="outline"
        className="bg-resume-primary text-white hover:bg-resume-primary/80 shadow-lg transition-all duration-300 rounded-full flex items-center gap-2 px-6"
      >
        Versão PDF <ArrowRight className="h-4 w-4" />
      </Button>

      <ScrollToTop showScrollTop={showScrollTop} onScrollTop={onScrollTop} />

      <ShareOptions
        onPrint={onPrint}
        onDownloadPDF={onDownloadPDF}
        onShare={onShare}
      />
    </div>
  );
};