import productImage from "@/assets/product-1.jpeg";

interface ProductCardProps {
  onClick: () => void;
}

const ProductCard = ({ onClick }: ProductCardProps) => {
  const originalPrice = 498;
  const currentPrice = 127.42;
  const pixPrice = 114.68; // 10% desconto no Pix
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  const installments = (currentPrice / 6).toFixed(2);

  return (
    <section className="container py-8">
      <h2 className="text-3xl font-bold mb-6">Destaques</h2>
      
      <div 
        onClick={onClick}
        className="flex flex-col sm:flex-row gap-6 bg-card rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow border"
      >
        <div className="w-full sm:w-64 h-64 bg-muted flex items-center justify-center p-4">
          <img 
            src={productImage} 
            alt="Econoflex Brasil" 
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="p-4 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2">Econoflex Brasil</h3>
          
          <p className="price-old text-sm">R${originalPrice.toFixed(2).replace('.', ',')}</p>
          
          <div className="flex items-baseline gap-2 mb-1">
            <span className="price-new">R${currentPrice.toFixed(2).replace('.', ',')}</span>
            <span className="price-discount">{discount}% OFF</span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            6 x de R${installments.replace('.', ',')} sem juros
          </p>
          
          <p className="price-pix">
            R${pixPrice.toFixed(2).replace('.', ',')} com Pix
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
