import { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, ShieldCheck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import ShippingCalculator from "./ShippingCalculator";

import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const carBrands = [
  "Chevrolet (GM)",
  "Citroën",
  "Fiat",
  "Honda",
  "Ford",
  "Hyundai",
  "Volkswagen",
  "Toyota",
  "Renault",
  "Peugeot",
  "Nissan",
  "Jeep",
  "Kia",
  "Mitsubishi",
  "GWM",
  "Lifan",
  "Jac",
  "BMW",
  "Caoa Chery"
];

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState("chevrolet-gm");
  const [selectedYear, setSelectedYear] = useState("1995");
  const { addToCart } = useCart();

  const images = [product1, product2, product3, product4];

  const originalPrice = 498;
  const currentPrice = 127.42;
  const pixPrice = 114.68;
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  const installments = (currentPrice / 6).toFixed(2);

  const whatsappNumber = "559295266850";
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse no Econoflex Brasil.");

  const handleBuy = () => {
    addToCart(quantity);
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Generate years from 1995 to 2026
  const years = Array.from({ length: 32 }, (_, i) => 1995 + i);

  return (
    <section className="container py-4">
      {/* Image Gallery */}
      <div className="relative mb-4">
        <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
          <img 
            src={images[currentImage]} 
            alt={`Econoflex Brasil - Imagem ${currentImage + 1}`}
            className="w-full h-full object-contain"
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1.5 shadow-md hover:bg-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-1.5 shadow-md hover:bg-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          
          {/* Counter */}
          <span className="absolute top-3 right-3 bg-background/80 px-2 py-1 rounded text-xs">
            {currentImage + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-14 h-14 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                currentImage === index ? "border-primary" : "border-transparent"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <p className="text-xs text-muted-foreground mb-1">
        Início {">"} automóvel {">"} Econoflex Brasil
      </p>

      {/* Sales Count */}
      <p className="text-xs text-muted-foreground mb-1">+2060 vendidos</p>

      {/* Title */}
      <h1 className="text-xl font-bold mb-3">Econoflex Brasil</h1>

      {/* Pricing */}
      <p className="price-old text-xs">R${originalPrice.toFixed(2).replace('.', ',')}</p>
      
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-bold">R${currentPrice.toFixed(2).replace('.', ',')}</span>
        <span className="price-discount text-sm">{discount}% OFF</span>
      </div>

      <p className="price-pix text-base mb-1">
        R${pixPrice.toFixed(2).replace('.', ',')} com Pix
      </p>

      <p className="text-xs text-muted-foreground mb-1">
        6 x de R${installments.replace('.', ',')} sem juros
      </p>

      <p className="text-xs mb-3">
        <span className="price-discount">10% de desconto</span> pagando com Pix
      </p>

      <button className="text-xs underline mb-4 text-muted-foreground">
        Ver mais detalhes
      </button>

      {/* Selects */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="text-xs font-medium mb-1.5 block">Marca</label>
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="bg-popover max-h-60">
              {carBrands.map((brand) => (
                <SelectItem 
                  key={brand} 
                  value={brand.toLowerCase().replace(/[()]/g, "").replace(" ", "-")}
                  className="text-sm"
                >
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-xs font-medium mb-1.5 block">Ano</label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="bg-popover max-h-60">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()} className="text-sm">
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quantity & Buy */}
      <div className="flex gap-3 mb-4">
        <div className="flex items-center border rounded-lg">
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-10 text-center text-sm">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-9 w-9"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <Button 
          onClick={handleBuy}
          className="flex-1 bg-econoflex-dark hover:bg-econoflex-dark/90 text-sm"
        >
          Comprar
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="space-y-3 mb-6 border-t pt-4">
        <div className="flex gap-3 items-start">
          <ShieldCheck className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Compra protegida</p>
            <p className="text-xs text-muted-foreground">
              Seus dados cuidados durante toda a compra.
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <RotateCcw className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium text-sm">Trocas e devoluções</p>
            <p className="text-xs text-muted-foreground">
              Se não gostar, você pode trocar ou devolver.
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Calculator */}
      <ShippingCalculator />

      {/* Description */}
      <div className="space-y-4">
        <div>
          <h2 className="font-medium mb-3 text-sm">Descrição</h2>
          <h3 className="text-lg font-bold text-destructive mb-3">
            INFORME O MODELO NO CHECKOUT {"--->"} 
          </h3>
          
          <h2 className="text-lg font-bold mb-3">
            🔧 Econoflex – Economia de Combustível Inteligente para o Seu Carro
          </h2>
          
          <p className="text-sm mb-3">
            <strong>Economize até 80% de combustível com uma instalação simples e eficaz!</strong>
          </p>
          
          <p className="text-muted-foreground text-xs mb-3">
            O <strong className="text-foreground">Econoflex</strong> é um dispositivo inovador que se conecta à mangueira de gasolina e <strong className="text-foreground">ajusta a pressão do combustível</strong>, otimizando a queima e reduzindo o consumo em até <strong className="text-foreground">40% a 80%</strong>. Ele atua como um <strong className="text-foreground">pulverizador de combustível</strong>, melhorando o desempenho do motor e antecipando o trabalho dos bicos injetores, eliminando desperdícios e maximizando a eficiência da combustão.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="text-base font-bold mb-3">✅ Benefícios do Econoflex:</h3>
          
          <ul className="space-y-2 text-xs">
            <li>
              <span className="mr-2">🚗</span>
              <strong>Economia real:</strong> reduza o consumo de combustível em até <strong>80%</strong>
            </li>
            <li>
              <span className="mr-2">🔧</span>
              <strong>Instalação rápida e simples</strong> – sem modificações no motor
            </li>
            <li>
              <span className="mr-2">🔥</span>
              <strong>Combustão otimizada</strong> com pulverização eficiente do combustível
            </li>
            <li>
              <span className="mr-2">🌿</span>
              <strong>Menos poluição:</strong> contribua com o meio ambiente com menor emissão de gases
            </li>
            <li>
              <span className="mr-2">💰</span>
              <strong>Economia a longo prazo:</strong> retorno do investimento logo nos primeiros abastecimentos
            </li>
            <li>
              <span className="mr-2">🛠️</span>
              <strong>Compatível com a maioria dos veículos a gasolina</strong>
            </li>
          </ul>
        </div>

        {/* How it works */}
        <div>
          <h3 className="text-base font-bold mb-3">💡 Como funciona?</h3>
          
          <p className="text-muted-foreground text-xs">
            O Econoflex <strong className="text-foreground">pulveriza o combustível antes da injeção</strong>, fazendo com que o motor aproveite melhor cada gota. Dessa forma, você <strong className="text-foreground">aumenta a eficiência</strong> e <strong className="text-foreground">reduz o consumo</strong>, sem comprometer o desempenho do seu veículo.
          </p>
        </div>

        <div className="border-t pt-4">
          <p className="font-bold text-sm mb-2">Transforme seu carro em um aliado da economia.</p>
          <p className="font-bold text-sm">Adquira o seu Econoflex agora e comece a economizar!</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
