import { User, Mail, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

export const Hero = () => {
  const { scrollY } = useScroll();
  
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  
  const opacity = useSpring(
    useTransform(scrollY, [0, 300], [1, 0]),
    springConfig
  );
  
  const scale = useSpring(
    useTransform(scrollY, [0, 300], [1, 0.8]),
    springConfig
  );
  
  const y = useSpring(
    useTransform(scrollY, [0, 300], [0, 50]),
    springConfig
  );

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      style={{ opacity, scale, y }}
      className="min-h-[90vh] bg-gradient-modern flex flex-col justify-center items-center p-8 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwSDI0VjBoNnYzMHpNMjQgMzBoLTZWMGg2djMweiIvPjwvZz48L2c+PC9zdmc+')] opacity-10 transition-gpu"
      />
      
      <div className="relative z-10 max-w-4xl w-full">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12 backdrop-blur-sm bg-resume-primary/30 rounded-2xl p-8 shadow-modern-xl border border-white/5 hover:border-white/10 transition-all duration-500 transition-gpu"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            variants={scaleIn}
            className="relative group"
            whileHover={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-resume-accent to-resume-light rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500 transition-gpu"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-resume-accent/20 group-hover:scale-105 transition-transform duration-300 transition-gpu">
              <img
                src="/lovable-uploads/0f0bddb9-9136-4122-a863-4751fe7f38e9.png"
                alt="Alessandra Medeiros de Oliveira"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-resume-text mb-4 bg-clip-text"
            >
              Alessandra Medeiros de Oliveira
            </motion.h1>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-2 text-resume-light mb-6 justify-center md:justify-start"
            >
              <Briefcase className="w-5 h-5" />
              <h2 className="text-xl md:text-2xl font-medium">
                Diretora Comercial
              </h2>
            </motion.div>
            
            <motion.h3 
              variants={fadeInUp}
              className="text-lg md:text-xl text-resume-neutral mb-8"
            >
              Oba Hortifruti | Negociação, Desenvolvimento de Marca Própria e Negócios Internacionais
            </motion.h3>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center md:justify-start text-resume-text"
            >
              <motion.div 
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 bg-resume-primary/40 px-4 py-2 rounded-full shadow-modern hover:shadow-modern-lg transition-all duration-300 backdrop-blur-sm transition-gpu"
              >
                <MapPin className="w-5 h-5 text-resume-light" />
                <span>São Paulo, Brazil</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, scale: 1.05 }}
                className="flex items-center gap-2 bg-resume-primary/40 px-4 py-2 rounded-full shadow-modern hover:shadow-modern-lg transition-all duration-300 backdrop-blur-sm transition-gpu"
              >
                <Mail className="w-5 h-5 text-resume-light" />
                <span>contato@alessandra.com</span>
              </motion.div>
              <motion.a
                href="#experience"
                whileHover={{ x: 5, scale: 1.05 }}
                className="flex items-center gap-2 bg-resume-accent/80 px-6 py-2 rounded-full shadow-modern hover:shadow-modern-lg transition-all duration-300 text-white font-medium group transition-gpu"
              >
                Ver Experiência
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};