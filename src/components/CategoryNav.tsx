import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Category, categories } from "@/data/posts";
import { Layers, BookOpen, Camera, Code2 } from "lucide-react";

interface CategoryNavProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categoryIcons: Record<Category, React.ReactNode> = {
  "全部": <Layers className="w-4 h-4" />,
  "AI技術教學": <BookOpen className="w-4 h-4" />,
  "AI攝影作品": <Camera className="w-4 h-4" />,
  "Vibecoding作品": <Code2 className="w-4 h-4" />
};

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="sticky top-0 z-40 py-4 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "relative px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-medium transition-colors duration-300",
                "flex items-center gap-2",
                activeCategory === category
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {categoryIcons[category]}
                <span className="hidden md:inline">{category}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
