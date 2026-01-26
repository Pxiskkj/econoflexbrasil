import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="w-full">
      <img 
        src={heroBanner} 
        alt="Econoflex - Economia de 40% até 80% de combustível" 
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default HeroBanner;
