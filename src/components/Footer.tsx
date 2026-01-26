import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PaymentIcons from "./PaymentIcons";

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate: _onNavigate }: FooterProps) => {
  return (
    <footer className="section-dark py-8">
      <div className="container space-y-6">
        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <div className="flex border border-white/30 rounded-lg overflow-hidden">
            <Input 
              placeholder="E-mail" 
              className="flex-1 border-0 bg-transparent text-white placeholder:text-white/50 focus-visible:ring-0 rounded-none text-sm"
            />
            <Button className="rounded-none border-l border-white/30 bg-transparent hover:bg-white/10 text-white px-6">
              Enviar
            </Button>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-medium text-lg mb-4">Meios de pagamento</h3>
          <PaymentIcons />
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
