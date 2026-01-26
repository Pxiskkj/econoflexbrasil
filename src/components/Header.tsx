import { useState } from "react";
import { Menu, User, ShoppingCart, Search, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import logoEconoflex from "@/assets/logo-econoflex.jpeg";

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-econoflex-dark border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        {/* Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => onNavigate("inicio")}
        >
          <img 
            src={logoEconoflex} 
            alt="Econoflex Brasil" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => onNavigate("login")}
          >
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container pb-3">
        <div className="relative">
          <Input 
            placeholder="O que você está buscando?" 
            className="pr-14 bg-white text-foreground text-sm"
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

      {/* Mobile Menu - Full Screen */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-4">
            <button 
              onClick={() => { onNavigate("inicio"); setMenuOpen(false); }}
              className="block w-full text-left py-4 text-base font-medium border-b hover:text-econoflex-orange transition-colors"
            >
              INÍCIO
            </button>
            <button 
              onClick={() => { onNavigate("produtos"); setMenuOpen(false); }}
              className="flex w-full items-center justify-between py-4 text-base font-medium border-b hover:text-econoflex-orange transition-colors"
            >
              PRODUTOS
              <ChevronRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => { onNavigate("contato"); setMenuOpen(false); }}
              className="block w-full text-left py-4 text-base font-medium border-b hover:text-econoflex-orange transition-colors"
            >
              CONTATO
            </button>
          </nav>

          {/* Bottom - Minha Conta */}
          <div className="border-t p-4">
            <button 
              onClick={() => { onNavigate("login"); setMenuOpen(false); }}
              className="flex items-center gap-3 text-base"
            >
              <User className="h-5 w-5" />
              Minha conta
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
