import { motion } from "framer-motion";
import { Post } from "@/data/posts";
import { Calendar, Play, Image as ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  onClick: () => void;
  index: number;
}

const categoryColors: Record<string, string> = {
  "AI技術教學": "bg-primary/20 text-primary border-primary/30",
  "AI攝影作品": "bg-accent/20 text-accent border-accent/30",
  "Vibecoding作品": "bg-chart-3/20 text-chart-3 border-chart-3/30"
};

const PostCard = ({ post, onClick, index }: PostCardProps) => {
  const hasVideo = post.media.some(m => m.type === "video");
  const imageCount = post.media.filter(m => m.type === "image").length;
  
  // Fixed card height for uniform layout
  const cardHeight = "h-80";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className={cn(
        "relative overflow-hidden rounded-xl bg-card border border-border",
        "hover:border-primary/30 transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/10",
        cardHeight
      )}>
        {/* Cover Image */}
        <div className="absolute inset-0">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        
        {/* Media indicators */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {hasVideo && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-foreground">
              <Play className="w-3 h-3" />
              <span>Video</span>
            </div>
          )}
          {imageCount > 1 && (
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-foreground">
              <ImageIcon className="w-3 h-3" />
              <span>{imageCount}</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          {/* Category badge */}
          <Badge 
            variant="outline" 
            className={cn(
              "mb-3 text-xs font-medium border",
              categoryColors[post.category]
            )}
          >
            {post.category}
          </Badge>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>
          
          {/* Summary */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {post.summary}
          </p>
          
          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </div>
    </motion.article>
  );
};

export default PostCard;
