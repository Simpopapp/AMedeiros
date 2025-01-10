import { User, Mail, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] bg-resume-secondary flex flex-col justify-center items-center p-8 animate-fadeIn">
      <div className="w-32 h-32 rounded-full bg-resume-accent mb-8 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
          alt="Professional headshot"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-resume-primary mb-4 text-center">
        Alessandra Medeiros de Oliveira
      </h1>
      <h2 className="text-xl md:text-2xl text-resume-text mb-6 text-center max-w-2xl">
        Diretora comercial na Oba Hortifruti | Negociação, Desenvolvimento de
        Marca Própria e Negócios Internacionais
      </h2>
      <div className="flex flex-wrap gap-6 justify-center items-center text-resume-text">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <span>São Paulo, Brazil</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5" />
          <span>contato@alessandra.com</span>
        </div>
      </div>
    </section>
  );
};