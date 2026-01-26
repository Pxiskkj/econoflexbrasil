import { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Plus, ShieldCheck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState("");

  const images = [product1, product2, product3, product4];

  const originalPrice = 498;
  const currentPrice = 127.42;
  const pixPrice = 114.68;
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  const installments = (currentPrice / 6).toFixed(2);

  const whatsappNumber = "5592952668503";
  const whatsappMessage = encodeURIComponent("Olá! Tenho interesse no Econoflex Brasil.");

  const handleBuy = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="container py-6">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-md hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 rounded-full p-2 shadow-md hover:bg-background"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Counter */}
          <span className="absolute top-4 right-4 bg-background/80 px-2 py-1 rounded text-sm">
            {currentImage + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-colors ${
                currentImage === index ? "border-primary" : "border-transparent"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <p className="text-sm text-muted-foreground mb-2">
        Início {">"} automóvel {">"} Econoflex Brasil
      </p>

      {/* Sales Count */}
      <p className="text-sm text-muted-foreground mb-2">+2060 vendidos</p>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">Econoflex Brasil</h1>

      {/* Pricing */}
      <p className="price-old text-sm">R${originalPrice.toFixed(2).replace('.', ',')}</p>
      
      <div className="flex items-baseline gap-3 mb-1">
        <span className="text-3xl font-bold">R${currentPrice.toFixed(2).replace('.', ',')}</span>
        <span className="price-discount text-lg">{discount}% OFF</span>
      </div>

      <p className="price-pix text-lg mb-2">
        R${pixPrice.toFixed(2).replace('.', ',')} com Pix
      </p>

      <p className="text-sm text-muted-foreground mb-1">
        6 x de R${installments.replace('.', ',')} sem juros
      </p>

      <p className="text-sm mb-4">
        <span className="price-discount">10% de desconto</span> pagando com Pix
      </p>

      <button className="text-sm underline mb-6 text-muted-foreground">
        Ver mais detalhes
      </button>

      {/* Selects */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Marca</label>
          <Select defaultValue="chevrolet">
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="chevrolet">Chevrolet (GM)</SelectItem>
              <SelectItem value="fiat">Fiat</SelectItem>
              <SelectItem value="volkswagen">Volkswagen</SelectItem>
              <SelectItem value="ford">Ford</SelectItem>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="honda">Honda</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Ano</label>
          <Select defaultValue="1995">
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 35 }, (_, i) => 1990 + i).map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quantity & Buy */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center border rounded-lg">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Button 
          onClick={handleBuy}
          className="flex-1 bg-primary hover:bg-primary/90"
        >
          Comprar
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="space-y-4 mb-8 border-t pt-6">
        <div className="flex gap-3 items-start">
          <ShieldCheck className="h-6 w-6 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium">Compra protegida</p>
            <p className="text-sm text-muted-foreground">
              Seus dados cuidados durante toda a compra.
            </p>
          </div>
        </div>
        
        <div className="flex gap-3 items-start">
          <RotateCcw className="h-6 w-6 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium">Trocas e devoluções</p>
            <p className="text-sm text-muted-foreground">
              Se não gostar, você pode trocar ou devolver.
            </p>
          </div>
        </div>
      </div>

      {/* Shipping */}
      <div className="mb-8">
        <p className="font-medium mb-2">Meios de envio</p>
        <div className="flex gap-2">
          <Input 
            placeholder="Seu CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline">Calcular</Button>
        </div>
        <button className="text-sm underline text-muted-foreground mt-2">
          Não sei meu CEP
        </button>
      </div>

      {/* Description */}
      <div className="space-y-6">
        <div>
          <h2 className="font-medium mb-4">Descrição</h2>
          <h3 className="text-2xl font-bold text-destructive mb-4">
            INFORME O MODELO NO CHECKOUT {"--->"} 
          </h3>
          
          <h2 className="text-2xl font-bold mb-4">
            🔧 Econoflex – Economia de Combustível Inteligente para o Seu Carro
          </h2>
          
          <p className="mb-4">
            <strong>Economize até 80% de combustível com uma instalação simples e eficaz!</strong>
          </p>
          
          <p className="text-muted-foreground mb-4">
            O <strong className="text-foreground">Econoflex</strong> é um dispositivo inovador que se conecta à mangueira de gasolina e <strong className="text-foreground">ajusta a pressão do combustível</strong>, otimizando a queima e reduzindo o consumo em até <strong className="text-foreground">40% a 80%</strong>. Ele atua como um <strong className="text-foreground">pulverizador de combustível</strong>, melhorando o desempenho do motor e antecipando o trabalho dos bicos injetores, eliminando desperdícios e maximizando a eficiência da combustão.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">✅ Benefícios do Econoflex:</h3>
          
          <ul className="space-y-3">
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
          <h3 className="text-2xl font-bold mb-4">💡 Como funciona?</h3>
          
          <p className="text-muted-foreground">
            O Econoflex <strong className="text-foreground">pulveriza o combustível antes da injeção</strong>, fazendo com que o motor aproveite melhor cada gota. Dessa forma, você <strong className="text-foreground">aumenta a eficiência</strong> e <strong className="text-foreground">reduz o consumo</strong>, sem comprometer o desempenho do seu veículo.
          </p>
        </div>

        <div className="border-t pt-6">
          <p className="font-bold mb-2">Transforme seu carro em um aliado da economia.</p>
          <p className="font-bold">Adquira o seu Econoflex agora e comece a economizar!</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
