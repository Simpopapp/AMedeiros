import { User, Mail, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

export const Hero = () => {
  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      className="min-h-[80vh] bg-resume-secondary flex flex-col justify-center items-center p-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-resume-accent rotate-45 transform scale-150"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        <motion.div 
          variants={scaleIn}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-resume-accent mb-8 overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/lovable-uploads/0f0bddb9-9136-4122-a863-4751fe7f38e9.png"
            alt="Alessandra Medeiros de Oliveira"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-resume-primary mb-4 text-center"
        >
          Alessandra Medeiros de Oliveira
        </motion.h1>
        
        <motion.div 
          variants={fadeInUp}
          className="flex items-center gap-2 text-resume-accent mb-6"
        >
          <Briefcase className="w-5 h-5" />
          <h2 className="text-xl md:text-2xl font-medium">
            Diretora Comercial
          </h2>
        </motion.div>
        
        <motion.h3 
          variants={fadeInUp}
          className="text-lg md:text-xl text-resume-text mb-8 text-center max-w-2xl"
        >
          Oba Hortifruti | Negociação, Desenvolvimento de Marca Própria e Negócios Internacionais
        </motion.h3>
        
        <motion.div 
          variants={fadeInUp}
          className="flex flex-wrap gap-6 justify-center items-center text-resume-text"
        >
          <motion.div 
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <MapPin className="w-5 h-5 text-resume-accent" />
            <span>São Paulo, Brazil</span>
          </motion.div>
          <motion.div 
            whileHover={{ y: -3 }}
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-resume-accent" />
            <span>contato@alessandra.com</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};