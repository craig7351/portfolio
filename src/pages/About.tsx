import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award,
  Sparkles,
  Camera,
  Code2,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const About = () => {
  const skills = [
    { name: "AI 繪圖", level: 95 },
    { name: "Prompt Engineering", level: 90 },
    { name: "Stable Diffusion", level: 85 },
    { name: "Midjourney", level: 88 },
    { name: "ComfyUI", level: 80 },
    { name: "React / Vibecoding", level: 75 },
  ];

  const experiences = [
    {
      title: "AI 創意總監",
      company: "自由工作者",
      period: "2022 - 現在",
      description: "專注於 AI 藝術創作與教學，累積超過 1000+ 作品",
    },
    {
      title: "攝影師 / 視覺設計師",
      company: "Creative Studio",
      period: "2018 - 2022",
      description: "負責品牌視覺設計與商業攝影專案",
    },
    {
      title: "數位行銷專員",
      company: "Tech Company",
      period: "2015 - 2018",
      description: "社群媒體經營與內容行銷策略規劃",
    },
  ];

  const achievements = [
    "AI 繪圖教學累積觀看次數 100,000+",
    "社群粉絲總數 50,000+",
    "完成 200+ 件 AI 藝術委託案",
    "舉辦 10+ 場線上工作坊",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            AI Creative
          </NavLink>
          <div className="flex items-center gap-6">
            <NavLink 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              作品集
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-foreground font-medium"
            >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
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
                  <span>台北, 台灣</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>your@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>開放合作機會</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-primary" />
              關於我
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg">
                你好！我是一位熱衷於探索 AI 技術與藝術創作交匯點的創作者。自從接觸 AI 繪圖以來，
                我便深深著迷於這項技術能夠將想像力具象化的魔力。
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                我的使命是透過分享教學內容，幫助更多人掌握 AI 創作工具，並激發他們的創意潛能。
                無論是 Stable Diffusion、Midjourney 還是 ComfyUI，我都樂於探索並分享各種技巧與心得。
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                除了 AI 繪圖，我也熱愛 Vibecoding —— 一種透過與 AI 協作來快速開發產品的新方式。
                這個網站就是我使用 Vibecoding 製作的成果之一！
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              技能專長
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-4 border border-border"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              工作經歷
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              成就亮點
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">想要合作或聯繫我？</h2>
            <p className="text-muted-foreground mb-8">
              歡迎透過以下方式與我聯繫，討論專案合作或任何問題！
            </p>
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              寄送郵件
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 AI Creative · 探索 AI 與創意的邊界
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
