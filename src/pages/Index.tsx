import { useState, useMemo, useCallback } from "react";
import { posts, Category } from "@/data/posts";
import HeroSection from "@/components/HeroSection";
import CategoryNav from "@/components/CategoryNav";
import PostGrid from "@/components/PostGrid";
import PostModal from "@/components/PostModal";
import SiteNav from "@/components/SiteNav";
import { Post } from "@/data/posts";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("全部");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "全部") {
      return posts;
    }
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const handlePostClick = useCallback((post: Post) => {
    setSelectedPost(post);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPost(null);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <PostGrid posts={filteredPosts} onPostClick={handlePostClick} />
      <PostModal post={selectedPost} onClose={handleCloseModal} />
      
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

export default Index;
