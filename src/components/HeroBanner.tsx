import logoEconoflex from "@/assets/logo-econoflex.jpeg";

const HeroBanner = () => {
  return (
    <section className="w-full bg-econoflex-dark py-8 flex justify-center">
      <img 
        src={logoEconoflex} 
        alt="Econoflex Brasil - Redutor de Combustível" 
        className="h-32 w-auto object-contain"
      />
    </section>
  );
};

export default HeroBanner;
