import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import product1 from "@/assets/product-1.jpeg";

interface CheckoutPageProps {
  onBack: () => void;
  onContinue: (data: CustomerData) => void;
  shippingOption: string;
  shippingPrice: number;
}

export interface CustomerData {
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  email: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

const CheckoutPage = ({ onBack, onContinue, shippingOption, shippingPrice }: CheckoutPageProps) => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState<CustomerData>({
    nome: "",
    sobrenome: "",
    cpf: "",
    telefone: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);
  const total = subtotal + shippingPrice;

  const handleChange = (field: keyof CustomerData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatCPF = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 9) {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
    } else if (digits.length > 6) {
      return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    } else if (digits.length > 3) {
      return `${digits.slice(0, 3)}.${digits.slice(3)}`;
    }
    return digits;
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 2) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    return digits;
  };

  const formatCEP = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length > 5) {
      return `${digits.slice(0, 5)}-${digits.slice(5)}`;
    }
    return digits;
  };

  const isFormValid = () => {
    return formData.nome && formData.sobrenome && formData.cpf.length >= 14 && 
           formData.telefone.length >= 14 && formData.email && formData.cep.length >= 9 &&
           formData.endereco && formData.numero && formData.bairro && formData.cidade && formData.estado;
  };

  return (
    <div className="min-h-screen bg-background overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b z-10">
        <div className="container flex items-center gap-3 py-3">
          <button onClick={onBack}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="font-semibold text-sm">Dados de entrega</h1>
        </div>
      </div>

      <div className="container py-4 pb-24 space-y-4">
        {/* Order Summary */}
        <div className="border rounded-lg p-3">
          <h2 className="font-medium text-sm mb-3">Resumo do pedido</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-3 mb-2">
              <img src={product1} alt={item.name} className="w-12 h-12 object-contain bg-muted rounded" />
              <div className="flex-1">
                <p className="text-xs font-medium">{item.name}</p>
                <p className="text-[10px] text-muted-foreground">{item.brand} - {item.year}</p>
                <p className="text-xs">Qtd: {item.quantity}</p>
              </div>
              <span className="text-xs font-medium">R${(item.currentPrice * item.quantity).toFixed(2).replace('.', ',')}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2 space-y-1">
            <div className="flex justify-between text-xs">
              <span>Subtotal</span>
              <span>R${subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span>Frete ({shippingOption})</span>
              <span>R${shippingPrice.toFixed(2).replace('.', ',')}</span>
            </div>
            <div className="flex justify-between text-sm font-medium pt-1">
              <span>Total</span>
              <span>R${total.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        </div>

        {/* Personal Data Form */}
        <div className="space-y-3">
          <h2 className="font-medium text-sm">Dados pessoais</h2>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs">Nome *</Label>
              <Input 
                value={formData.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                className="h-9 text-sm"
                placeholder="Nome"
              />
            </div>
            <div>
              <Label className="text-xs">Sobrenome *</Label>
              <Input 
                value={formData.sobrenome}
                onChange={(e) => handleChange("sobrenome", e.target.value)}
                className="h-9 text-sm"
                placeholder="Sobrenome"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs">CPF *</Label>
            <Input 
              value={formData.cpf}
              onChange={(e) => handleChange("cpf", formatCPF(e.target.value))}
              className="h-9 text-sm"
              placeholder="000.000.000-00"
              maxLength={14}
            />
          </div>

          <div>
            <Label className="text-xs">Telefone *</Label>
            <Input 
              value={formData.telefone}
              onChange={(e) => handleChange("telefone", formatPhone(e.target.value))}
              className="h-9 text-sm"
              placeholder="(00) 00000-0000"
              maxLength={15}
            />
          </div>

          <div>
            <Label className="text-xs">E-mail *</Label>
            <Input 
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-9 text-sm"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        {/* Address Form */}
        <div className="space-y-3">
          <h2 className="font-medium text-sm">Endereço de entrega</h2>

          <div>
            <Label className="text-xs">CEP *</Label>
            <Input 
              value={formData.cep}
              onChange={(e) => handleChange("cep", formatCEP(e.target.value))}
              className="h-9 text-sm"
              placeholder="00000-000"
              maxLength={9}
            />
          </div>

          <div>
            <Label className="text-xs">Endereço *</Label>
            <Input 
              value={formData.endereco}
              onChange={(e) => handleChange("endereco", e.target.value)}
              className="h-9 text-sm"
              placeholder="Rua, Avenida..."
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div>
              <Label className="text-xs">Número *</Label>
              <Input 
                value={formData.numero}
                onChange={(e) => handleChange("numero", e.target.value)}
                className="h-9 text-sm"
                placeholder="Nº"
              />
            </div>
            <div className="col-span-2">
              <Label className="text-xs">Complemento</Label>
              <Input 
                value={formData.complemento}
                onChange={(e) => handleChange("complemento", e.target.value)}
                className="h-9 text-sm"
                placeholder="Apto, Bloco..."
              />
            </div>
          </div>

          <div>
            <Label className="text-xs">Bairro *</Label>
            <Input 
              value={formData.bairro}
              onChange={(e) => handleChange("bairro", e.target.value)}
              className="h-9 text-sm"
              placeholder="Bairro"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2">
              <Label className="text-xs">Cidade *</Label>
              <Input 
                value={formData.cidade}
                onChange={(e) => handleChange("cidade", e.target.value)}
                className="h-9 text-sm"
                placeholder="Cidade"
              />
            </div>
            <div>
              <Label className="text-xs">Estado *</Label>
              <Input 
                value={formData.estado}
                onChange={(e) => handleChange("estado", e.target.value.toUpperCase().slice(0, 2))}
                className="h-9 text-sm"
                placeholder="UF"
                maxLength={2}
              />
            </div>
          </div>
        </div>

        <Button 
          onClick={() => onContinue(formData)}
          disabled={!isFormValid()}
          className="w-full bg-econoflex-dark hover:bg-econoflex-dark/90"
        >
          Continuar para pagamento
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
