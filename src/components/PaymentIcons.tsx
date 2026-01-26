const PaymentIcons = () => {
  return (
    <div className="space-y-1.5">
      {/* First row - all cards in one line */}
      <div className="flex gap-0.5">
        {/* Visa */}
        <div className="bg-white rounded h-6 w-9 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 48 16" className="h-full w-auto">
            <text x="4" y="12" fill="#1A1F71" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">VISA</text>
          </svg>
        </div>
        
        {/* Mastercard */}
        <div className="bg-white rounded h-6 w-9 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 32 20" className="h-full w-auto">
            <circle cx="11" cy="10" r="7" fill="#EB001B"/>
            <circle cx="21" cy="10" r="7" fill="#F79E1B"/>
            <path fill="#FF5F00" d="M16 5c1.8 1.3 3 3.4 3 5.5s-1.2 4.2-3 5.5c-1.8-1.3-3-3.4-3-5.5s1.2-4.2 3-5.5z"/>
          </svg>
        </div>
        
        {/* American Express */}
        <div className="bg-[#016FD0] rounded h-6 w-9 flex items-center justify-center p-0.5">
          <div className="text-white text-[3px] font-bold leading-tight text-center">
            <div>AMERICAN</div>
            <div>EXPRESS</div>
          </div>
        </div>
        
        {/* Diners Club */}
        <div className="bg-white rounded h-6 w-9 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 40 24" className="h-full w-auto">
            <circle cx="20" cy="12" r="9" fill="none" stroke="#004A97" strokeWidth="1.5"/>
          </svg>
        </div>
        
        {/* Aura */}
        <div className="bg-[#003087] rounded h-6 w-9 flex items-center justify-center">
          <span className="text-white text-[4px] font-bold">Aura</span>
        </div>
        
        {/* Elo */}
        <div className="bg-black rounded h-6 w-9 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 36 16" className="w-6 h-3">
            <text x="1" y="12" fill="#FFCB05" fontSize="10" fontWeight="bold" fontStyle="italic">elo</text>
          </svg>
        </div>
        
        {/* Discover */}
        <div className="bg-white rounded h-6 w-9 flex items-center justify-center p-0.5">
          <svg viewBox="0 0 44 16" className="w-full h-auto">
            <text x="2" y="10" fill="#000000" fontSize="5" fontWeight="bold">DISCOVER</text>
          </svg>
        </div>
        
        {/* Boleto */}
        <div className="bg-white rounded h-6 w-9 flex items-center justify-center p-0.5">
          <div className="flex flex-col items-center">
            <div className="flex gap-[0.3px]">
              {[1, 0.5, 1, 0.5, 1.5, 0.5, 1].map((w, i) => (
                <div key={i} className="bg-black" style={{ width: `${w}px`, height: '5px' }} />
              ))}
            </div>
            <span className="text-black text-[3px] font-bold">BOLETO</span>
          </div>
        </div>
      </div>
      
      {/* Second row - Pix only */}
      <div className="flex">
        <div className="bg-white rounded h-6 px-1.5 flex items-center justify-center gap-0.5">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
            <path d="M12.5 2.1l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0z" fill="#32BCAD"/>
            <path d="M12.5 12.1l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0z" fill="#32BCAD"/>
          </svg>
          <span className="text-[#32BCAD] text-xs font-light">pix</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentIcons;
