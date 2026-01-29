const PaymentIcons = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      {/* First row - All card brands + Boleto */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {/* Visa */}
        <div className="bg-[#1A1F71] rounded px-2 py-1 h-7 flex items-center justify-center">
          <span className="text-white text-xs font-bold tracking-wide">VISA</span>
        </div>
        
        {/* Mastercard */}
        <div className="bg-[#1A1F71] rounded px-1.5 py-1 h-7 flex items-center justify-center">
          <svg viewBox="0 0 40 24" className="h-5 w-auto">
            <circle cx="14" cy="12" r="10" fill="#EB001B"/>
            <circle cx="26" cy="12" r="10" fill="#F79E1B"/>
            <path d="M20 5.3a10 10 0 0 0 0 13.4 10 10 0 0 0 0-13.4" fill="#FF5F00"/>
          </svg>
        </div>
        
        {/* American Express */}
        <div className="bg-[#006FCF] rounded px-1.5 py-1 h-7 flex items-center justify-center">
          <span className="text-white text-[7px] font-bold leading-tight text-center">AMERICAN<br/>EXPRESS</span>
        </div>
        
        {/* Diners Club */}
        <div className="bg-white rounded px-1.5 py-1 h-7 flex items-center justify-center gap-0.5">
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#004A97" strokeWidth="2"/>
            <path d="M8 7v10M16 7v10" stroke="#004A97" strokeWidth="2"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-[6px] text-[#004A97] font-bold leading-none">Diners Club</span>
            <span className="text-[5px] text-[#004A97] leading-none">INTERNATIONAL</span>
          </div>
        </div>
        
        {/* Aura */}
        <div className="bg-[#0066B3] rounded px-2 py-1 h-7 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex h-2 w-6 rounded-sm overflow-hidden">
              <div className="flex-1 bg-[#FFCC00]"></div>
              <div className="flex-1 bg-[#003087]"></div>
              <div className="flex-1 bg-[#E31837]"></div>
            </div>
            <span className="text-white text-[8px] font-bold">Aura</span>
          </div>
        </div>
        
        {/* Elo */}
        <div className="bg-white rounded px-2 py-1 h-7 flex items-center justify-center">
          <span className="text-[#231F20] text-sm font-bold italic">el<span className="text-[#FDB913]">o</span></span>
        </div>
        
        {/* Discover */}
        <div className="bg-white rounded px-2 py-1 h-7 flex items-center justify-center">
          <span className="text-[#FF6600] text-[10px] font-bold">DISCOVER</span>
        </div>
        
        {/* Boleto */}
        <div className="bg-white rounded px-2 py-1 h-7 flex items-center justify-center gap-1">
          <div className="flex gap-[1px]">
            {[2, 1, 3, 1, 2, 1, 3, 2].map((w, i) => (
              <div key={i} className="bg-black h-4" style={{ width: `${w}px` }}></div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-[6px] font-bold text-black leading-none">BOLETO</span>
            <span className="text-[5px] text-black leading-none">BANCÁRIO</span>
          </div>
        </div>
      </div>
      
      {/* Second row - Pix */}
      <div className="flex items-center">
        <div className="bg-white rounded px-2 py-1 h-7 flex items-center justify-center gap-1">
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <path d="M12.5 2.1l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0z" fill="#32BCAD"/>
            <path d="M12.5 12.1l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0z" fill="#32BCAD"/>
          </svg>
          <span className="text-[#32BCAD] text-sm font-light">pix</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentIcons;
