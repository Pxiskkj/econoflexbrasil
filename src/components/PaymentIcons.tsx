const PaymentIcons = () => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      {/* First row - Card brands and Boleto */}
      <div className="flex items-center justify-center gap-1">
        {/* Visa */}
        <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <svg viewBox="0 0 50 16" className="h-3.5 w-auto">
            <text x="0" y="13" fill="#1A1F71" fontWeight="bold" fontSize="14" fontFamily="Arial, sans-serif">VISA</text>
          </svg>
        </div>
        
        {/* Mastercard */}
        <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <svg viewBox="0 0 32 20" className="h-4 w-auto">
            <circle cx="10" cy="10" r="8" fill="#EB001B"/>
            <circle cx="22" cy="10" r="8" fill="#F79E1B"/>
            <path d="M16 4a8 8 0 0 0 0 12 8 8 0 0 0 0-12" fill="#FF5F00"/>
          </svg>
        </div>
        
        {/* American Express */}
        <div className="bg-[#006FCF] rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <span className="text-white text-[6px] font-bold leading-tight text-center">AMERICAN<br/>EXPRESS</span>
        </div>
        
        {/* Diners Club */}
        <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <svg viewBox="0 0 20 20" className="h-3 w-3">
              <circle cx="10" cy="10" r="8" fill="none" stroke="#004A97" strokeWidth="1.5"/>
              <path d="M7 6v8M13 6v8" stroke="#004A97" strokeWidth="1.5"/>
            </svg>
            <span className="text-[5px] text-[#004A97] font-bold leading-tight">Diners Club<br/>INTERNATIONAL</span>
          </div>
        </div>
        
        {/* Aura */}
        <div className="bg-[#0066B3] rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-4 h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mb-0.5"></div>
            <span className="text-white text-[6px] font-bold">Aura</span>
          </div>
        </div>
        
        {/* Elo */}
        <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <span className="text-[#00A4E0] text-xs font-bold italic">elo</span>
        </div>
        
        {/* Discover */}
        <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <span className="text-[#FF6600] text-[8px] font-bold">DISCOVER</span>
        </div>
        
        {/* Boleto */}
        <div className="bg-white rounded px-1.5 py-0.5 h-6 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex gap-[0.5px]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-[1.5px] h-2 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}></div>
              ))}
            </div>
            <span className="text-[4px] font-bold text-black leading-tight">BOLETO<br/>BANCÁRIO</span>
          </div>
        </div>
      </div>
      
      {/* Second row - Pix */}
      <div className="flex items-center justify-center">
        <div className="bg-white rounded px-2 py-0.5 h-6 flex items-center justify-center gap-1">
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
