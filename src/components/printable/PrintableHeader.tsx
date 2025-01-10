import { User, Mail, MapPin, Briefcase, Globe, Phone, Link } from "lucide-react";
import { motion } from "framer-motion";

export const PrintableHeader = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-8 mb-8 p-6 bg-resume-secondary rounded-lg shadow-lg print:shadow-none"
    >
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-resume-accent shadow-xl">
        <img
          src="/lovable-uploads/0f0bddb9-9136-4122-a863-4751fe7f38e9.png"
          alt="Alessandra Medeiros de Oliveira"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-4 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-resume-primary"
        >
          Alessandra Medeiros de Oliveira
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center md:justify-start gap-2 text-resume-accent"
        >
          <Briefcase className="w-5 h-5" />
          <h2 className="text-xl">Diretora Comercial</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 text-resume-text"
        >
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-4 h-4 text-resume-accent" />
            <span>São Paulo, Brazil</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="w-4 h-4 text-resume-accent" />
            <span>contato@alessandra.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="w-4 h-4 text-resume-accent" />
            <span>+55 (11) 99999-9999</span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};