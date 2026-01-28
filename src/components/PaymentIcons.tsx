const PaymentIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* Visa */}
      <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
        <svg viewBox="0 0 60 20" className="h-5 w-auto">
          <text x="2" y="16" fill="#1A1F71" fontWeight="bold" fontSize="16" fontFamily="Arial, sans-serif">VISA</text>
        </svg>
      </div>
      
      {/* Mastercard */}
      <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
        <svg viewBox="0 0 40 24" className="h-5 w-auto">
          <circle cx="12" cy="12" r="10" fill="#EB001B"/>
          <circle cx="28" cy="12" r="10" fill="#F79E1B"/>
          <path d="M20 5.5a10 10 0 0 0 0 13" fill="#FF5F00"/>
        </svg>
      </div>
      
      {/* American Express */}
      <div className="bg-[#006FCF] rounded px-2 py-1 h-8 flex items-center justify-center">
        <span className="text-white text-[8px] font-bold leading-tight text-center">AMERICAN<br/>EXPRESS</span>
      </div>
      
      {/* Diners Club */}
      <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#004A97" strokeWidth="2"/>
            <path d="M8 7v10M16 7v10" stroke="#004A97" strokeWidth="2"/>
          </svg>
          <span className="text-[6px] text-[#004A97] font-bold leading-tight">Diners Club<br/>INTERNATIONAL</span>
        </div>
      </div>
      
      {/* Aura */}
      <div className="bg-[#0066B3] rounded px-2 py-1 h-8 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-6 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mb-0.5"></div>
          <span className="text-white text-[8px] font-bold">Aura</span>
        </div>
      </div>
      
      {/* Elo */}
      <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
        <span className="text-[#00A4E0] text-sm font-bold italic">elo</span>
      </div>
      
      {/* Discover */}
      <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
        <span className="text-[#FF6600] text-[10px] font-bold">DISCOVER</span>
      </div>
      
      {/* Boleto */}
      <div className="bg-white rounded px-2 py-1 h-8 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex gap-[1px]">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`w-[2px] h-3 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}></div>
            ))}
          </div>
          <span className="text-[6px] font-bold text-black">BOLETO<br/>BANCÁRIO</span>
        </div>
      </div>
      
      {/* Pix */}
      <div className="bg-transparent rounded px-2 py-1 h-8 flex items-center justify-center">
        <svg viewBox="0 0 60 24" className="h-5 w-auto">
          <path d="M15 4l6 6c0.5 0.5 0.5 1.3 0 1.8l-6 6c-0.5 0.5-1.3 0.5-1.8 0l-6-6c-0.5-0.5-0.5-1.3 0-1.8l6-6c0.5-0.5 1.3-0.5 1.8 0z" fill="#32BCAD"/>
          <path d="M21 10l6 6c0.5 0.5 0.5 1.3 0 1.8l-6 6c-0.5 0.5-1.3 0.5-1.8 0l-6-6c-0.5-0.5-0.5-1.3 0-1.8l6-6c0.5-0.5 1.3-0.5 1.8 0z" fill="#32BCAD"/>
          <text x="30" y="16" fill="#32BCAD" fontSize="12" fontFamily="Arial, sans-serif">pix</text>
        </svg>
      </div>
    </div>
  );
};

export default PaymentIcons;
