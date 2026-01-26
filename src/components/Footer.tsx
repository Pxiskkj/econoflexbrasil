import { Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="section-dark py-10">
      <div className="container space-y-8">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-econoflex-orange transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-econoflex-orange transition-colors"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <p>+55 92 9526-6850</p>
          <p>Econoflexbrasil@outlook.com</p>
          <p>Avenida José Aírton Gondim Lamenha 341</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <button 
            onClick={() => onNavigate("inicio")}
            className="block hover:text-econoflex-orange transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => onNavigate("produtos")}
            className="block hover:text-econoflex-orange transition-colors"
          >
            Produtos
          </button>
          <button 
            onClick={() => onNavigate("contato")}
            className="block hover:text-econoflex-orange transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <div className="flex">
            <Input 
              placeholder="E-mail" 
              className="rounded-r-none bg-transparent border-white/20 focus:border-white"
            />
            <Button className="rounded-l-none bg-white text-black hover:bg-white/90">
              Enviar
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-4">Meios de pagamento</h3>
          <div className="flex flex-wrap gap-2">
            {["Visa", "Mastercard", "Amex", "Diners", "Aura", "Elo", "Discover", "Boleto"].map((method) => (
              <div 
                key={method}
                className="bg-white text-black text-xs px-3 py-2 rounded font-medium"
              >
                {method}
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="bg-white text-black text-xs px-3 py-2 rounded font-medium flex items-center gap-1">
              <span className="text-econoflex-green font-bold">PIX</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-sm text-white/60">
          <p>Copyright Econoflex Brasil - 2026. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
