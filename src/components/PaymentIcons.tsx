const PaymentIcons = () => {
  return (
    <div className="space-y-2">
      {/* First row - all cards */}
      <div className="flex flex-wrap gap-1">
        {/* Visa */}
        <div className="bg-white rounded h-7 w-10 flex items-center justify-center p-1">
          <svg viewBox="0 0 48 16" className="h-full w-auto">
            <text x="4" y="12" fill="#1A1F71" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">VISA</text>
          </svg>
        </div>
        
        {/* Mastercard */}
        <div className="bg-white rounded h-7 w-10 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 32 20" className="h-full w-auto">
            <circle cx="11" cy="10" r="7" fill="#EB001B"/>
            <circle cx="21" cy="10" r="7" fill="#F79E1B"/>
            <path fill="#FF5F00" d="M16 5c1.8 1.3 3 3.4 3 5.5s-1.2 4.2-3 5.5c-1.8-1.3-3-3.4-3-5.5s1.2-4.2 3-5.5z"/>
            <text x="6" y="19" fill="#000" fontSize="3" fontFamily="Arial">mastercard</text>
          </svg>
        </div>
        
        {/* American Express */}
        <div className="bg-[#016FD0] rounded h-7 w-10 flex items-center justify-center p-0.5">
          <div className="text-white text-[4px] font-bold leading-tight text-center">
            <div>AMERICAN</div>
            <div>EXPRESS</div>
          </div>
        </div>
        
        {/* Diners Club */}
        <div className="bg-white rounded h-7 w-10 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 40 24" className="h-full w-auto">
            <circle cx="20" cy="12" r="9" fill="none" stroke="#004A97" strokeWidth="1.5"/>
            <text x="20" y="10" textAnchor="middle" fill="#004A97" fontSize="4" fontWeight="bold">Diners Club</text>
            <text x="20" y="15" textAnchor="middle" fill="#004A97" fontSize="3">INTERNATIONAL</text>
          </svg>
        </div>
        
        {/* Aura */}
        <div className="bg-[#003087] rounded h-7 w-10 flex items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 24 10" className="w-6 h-3">
              <ellipse cx="12" cy="8" rx="10" ry="2" fill="#FFD700"/>
              <path d="M2 8 Q12 0 22 8" fill="#FF6B00"/>
            </svg>
            <span className="text-white text-[5px] font-bold">Aura</span>
          </div>
        </div>
        
        {/* Elo */}
        <div className="bg-black rounded h-7 w-10 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 36 16" className="w-7 h-4">
            <text x="1" y="12" fill="#FFCB05" fontSize="10" fontWeight="bold" fontStyle="italic">el</text>
            <circle cx="26" cy="8" r="5" fill="none" stroke="#FFCB05" strokeWidth="1.5"/>
            <circle cx="26" cy="8" r="2.5" fill="#EF4123"/>
          </svg>
        </div>
        
        {/* Discover */}
        <div className="bg-white rounded h-7 w-10 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 44 16" className="w-full h-auto">
            <text x="2" y="11" fill="#000000" fontSize="6" fontWeight="bold">DISCOVER</text>
            <circle cx="38" cy="8" r="5" fill="#F47920"/>
          </svg>
        </div>
        
        {/* Boleto Bancário */}
        <div className="bg-white rounded h-7 w-10 flex items-center justify-center p-0.5">
          <div className="flex flex-col items-center">
            <div className="flex gap-[0.5px] mb-0.5">
              {[1.5, 0.5, 1.5, 0.5, 2, 0.5, 1.5, 0.5, 1.5].map((w, i) => (
                <div key={i} className="bg-black" style={{ width: `${w}px`, height: '8px' }} />
              ))}
            </div>
            <span className="text-black text-[4px] font-bold leading-none">BOLETO</span>
            <span className="text-black text-[3px] leading-none">BANCÁRIO</span>
          </div>
        </div>
      </div>
      
      {/* Second row - Pix */}
      <div className="flex">
        <div className="bg-white rounded h-7 px-2 flex items-center justify-center gap-1">
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
