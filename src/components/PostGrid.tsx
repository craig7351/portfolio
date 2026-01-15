import { motion, AnimatePresence } from "framer-motion";
import { Post } from "@/data/posts";
import PostCard from "./PostCard";

interface PostGridProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const PostGrid = ({ posts, onPostClick }: PostGridProps) => {
  return (
    <section className="container mx-auto px-6 py-12">
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {posts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              index={index}
              onClick={() => onPostClick(post)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-muted-foreground text-lg">目前沒有文章</p>
        </motion.div>
      )}
    </section>
  );
};

export default PostGrid;
