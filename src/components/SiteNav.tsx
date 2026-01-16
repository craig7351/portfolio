import { NavLink } from "@/components/NavLink";

const SiteNav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          AI Creative
        </NavLink>
        <div className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            作品集
          </NavLink>
          <NavLink 
            to="/about" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            activeClassName="text-foreground font-medium"
          >
            關於我
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
