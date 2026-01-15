import { motion, AnimatePresence } from "framer-motion";
import { Post } from "@/data/posts";
import { X, Calendar, Tag, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  "AI技術教學": "bg-primary/20 text-primary border-primary/30",
  "AI攝影作品": "bg-accent/20 text-accent border-accent/30",
  "Vibecoding作品": "bg-chart-3/20 text-chart-3 border-chart-3/30"
};

const PostModal = ({ post, onClose }: PostModalProps) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  if (!post) return null;

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % post.media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + post.media.length) % post.media.length);
  };

  const currentMedia = post.media[currentMediaIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl border border-border shadow-2xl"
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Media gallery */}
          <div className="relative aspect-video bg-muted overflow-hidden rounded-t-2xl">
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.url}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-card">
                <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
                  <Play className="w-16 h-16" />
                  <span className="text-sm">Video Player</span>
                </div>
              </div>
            )}

            {/* Gallery navigation */}
            {post.media.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {post.media.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentMediaIndex
                          ? "bg-primary w-6"
                          : "bg-foreground/30 hover:bg-foreground/50"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-4">
              <Badge
                variant="outline"
                className={cn("text-xs font-medium border", categoryColors[post.category])}
              >
                {post.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {post.title}
            </h2>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              <Tag className="w-4 h-4 text-muted-foreground" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-sm md:prose-base max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PostModal;
