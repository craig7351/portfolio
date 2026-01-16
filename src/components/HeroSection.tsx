import { motion } from "framer-motion";
import { Sparkles, Code2, Camera } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Neon glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
              Book-Ai Creative
            </span>
          </motion.h1>
          
          {/* Slogan */}
          <motion.p 
            className="text-2xl md:text-4xl font-light text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            探索 AI 與創意的邊界
          </motion.p>
          
          {/* About intro */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            熱衷於探索 AI 技術與藝術創作的交匯點，分享 AI 繪圖教學、
            攝影作品與 Vibecoding 開發心得
          </motion.p>
          
          {/* Feature icons */}
          <motion.div 
            className="flex items-center justify-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-2 group">
              <div className="p-4 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">AI 技術</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="p-4 rounded-xl bg-card border border-border group-hover:border-accent/50 transition-colors duration-300">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">AI 攝影</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="p-4 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-colors duration-300">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Vibecoding</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
