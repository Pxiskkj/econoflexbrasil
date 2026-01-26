import { useState } from "react";
import { Menu, User, ShoppingCart, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background border-b">
      <div className="container flex items-center justify-between py-3">
        {/* Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => onNavigate("inicio")}
        >
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-econoflex-orange flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg">ECONOFLEX</span>
              <span className="text-xs block text-muted-foreground">BRASIL</span>
            </div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container pb-3">
        <div className="relative">
          <Input 
            placeholder="O que você está buscando?" 
            className="pr-14"
          />
          <Button 
            size="icon" 
            className="absolute right-0 top-0 h-full rounded-l-none bg-destructive hover:bg-destructive/90"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Category Bar */}
      <div className="bg-secondary py-2">
        <div className="container">
          <span className="text-sm font-medium">automóvel</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg z-50">
          <nav className="container py-4 space-y-4">
            <button 
              onClick={() => { onNavigate("inicio"); setMenuOpen(false); }}
              className="block w-full text-left py-2 font-medium hover:text-econoflex-orange transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => { onNavigate("produtos"); setMenuOpen(false); }}
              className="block w-full text-left py-2 font-medium hover:text-econoflex-orange transition-colors"
            >
              Produtos
            </button>
            <button 
              onClick={() => { onNavigate("contato"); setMenuOpen(false); }}
              className="block w-full text-left py-2 font-medium hover:text-econoflex-orange transition-colors"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
