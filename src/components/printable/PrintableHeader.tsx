import { User, Mail, MapPin, Briefcase } from "lucide-react";

export const PrintableHeader = () => {
  return (
    <header className="flex items-center gap-8 mb-8">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-resume-accent">
        <img
          src="/lovable-uploads/0f0bddb9-9136-4122-a863-4751fe7f38e9.png"
          alt="Alessandra Medeiros de Oliveira"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-resume-primary mb-4">
          Alessandra Medeiros de Oliveira
        </h1>
        <div className="flex items-center gap-2 text-resume-accent mb-4">
          <Briefcase className="w-5 h-5" />
          <h2 className="text-xl">Diretora Comercial</h2>
        </div>
        <div className="flex flex-col gap-2 text-resume-text">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>São Paulo, Brazil</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>contato@alessandra.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};