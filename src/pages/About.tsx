import { motion } from "framer-motion";
import { User, Mail, MapPin, Briefcase, GraduationCap, Award, Sparkles, Camera, Code2, Facebook, ExternalLink, Github } from "lucide-react";
import { NavLink } from "@/components/NavLink";
const About = () => {
  const skills = [{
    name: "AI 繪圖",
    level: 95
  }, {
    name: "Prompt Engineering",
    level: 90
  }, {
    name: "Stable Diffusion",
    level: 85
  }, {
    name: "Midjourney",
    level: 88
  }, {
    name: "ComfyUI",
    level: 80
  }, {
    name: "React / Vibecoding",
    level: 75
  }];
  const experiences = [{
    title: "AI 創意總監",
    company: "自由工作者",
    period: "2022 - 現在",
    description: "專注於 AI 藝術創作與教學，累積超過 1000+ 作品"
  }, {
    title: "攝影師 / 視覺設計師",
    company: "Creative Studio",
    period: "2018 - 2022",
    description: "負責品牌視覺設計與商業攝影專案"
  }, {
    title: "數位行銷專員",
    company: "Tech Company",
    period: "2015 - 2018",
    description: "社群媒體經營與內容行銷策略規劃"
  }];
  const achievements = ["AI 繪圖教學累積觀看次數 100,000+", "社群粉絲總數 50,000+", "完成 200+ 件 AI 藝術委託案", "舉辦 10+ 場線上工作坊"];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            Book-Ai Creative
          </NavLink>
          <div className="flex items-center gap-6">
            <NavLink to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              作品集
            </NavLink>
            <NavLink to="/about" className="text-foreground font-medium">
              關於我
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex flex-col md:flex-row items-center gap-12">
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-chart-2 p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <User className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 p-3 bg-primary rounded-full">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
                  你的名字
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                AI 藝術家 / 創意工作者 / Vibecoding 愛好者
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>桃園, 台灣</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>craig7351@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>開放合作機會</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-primary" />
              關於我
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">你好！我是一位熱衷於探索 AI 技術與藝術創作交匯點的創作者。自從接觸 AI 以來， 我便深深著迷於這項技術能夠將想像力具象化的魔力。</p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">我的使命是透過分享教學內容，幫助更多人掌握 AI 創作工具，並激發他們的創意潛能。 無論是圖片/影片處理用的 Gemini Nano Banana, Grok, ComfyUI，或是文件處理的Notebooklm，VibeCoding用的Cursor, Antigravity, Google ai studio, Lovable，我都樂於探索並分享各種技巧與心得。</p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      

      {/* Experience Section */}
      

      {/* Achievements Section */}
      

      {/* CTA Section */}
      

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Book-Ai Creative · 探索 AI 與創意的邊界</p>
        </div>
      </footer>
    </div>;
};
export default About;