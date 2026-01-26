const PaymentIcons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Visa */}
      <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
        <svg viewBox="0 0 48 32" className="h-full w-auto">
          <rect fill="#1A1F71" width="48" height="32" rx="4"/>
          <text x="24" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="Arial">VISA</text>
        </svg>
      </div>
      
      {/* Mastercard */}
      <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
        <svg viewBox="0 0 48 32" className="h-full w-auto">
          <rect fill="#000000" width="48" height="32" rx="4"/>
          <circle cx="18" cy="16" r="8" fill="#EB001B"/>
          <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
          <path fill="#FF5F00" d="M24 10c2 1.5 3 4 3 6s-1 4.5-3 6c-2-1.5-3-4-3-6s1-4.5 3-6z"/>
        </svg>
      </div>
      
      {/* American Express */}
      <div className="bg-[#006FCF] rounded p-2 h-10 w-14 flex items-center justify-center">
        <div className="text-white text-[5px] font-bold leading-tight text-center">
          <div>AMERICAN</div>
          <div>EXPRESS</div>
        </div>
      </div>
      
      {/* Diners Club */}
      <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center">
        <svg viewBox="0 0 48 32" className="h-full w-auto">
          <rect fill="#FFFFFF" width="48" height="32" rx="4" stroke="#004A97" strokeWidth="1"/>
          <circle cx="24" cy="16" r="10" fill="none" stroke="#004A97" strokeWidth="2"/>
          <text x="24" y="13" textAnchor="middle" fill="#004A97" fontSize="5" fontWeight="bold">Diners Club</text>
          <text x="24" y="19" textAnchor="middle" fill="#004A97" fontSize="4">INTERNATIONAL</text>
        </svg>
      </div>
      
      {/* Aura - with sunset/hat icon */}
      <div className="bg-[#003087] rounded p-2 h-10 w-14 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 12" className="w-8 h-4">
            <ellipse cx="12" cy="10" rx="10" ry="2" fill="#FFD700"/>
            <path d="M2 10 Q12 0 22 10" fill="#FF6B00"/>
          </svg>
          <span className="text-white text-[7px] font-bold mt-0.5">Aura</span>
        </div>
      </div>
      
      {/* Elo */}
      <div className="bg-black rounded p-2 h-10 w-14 flex items-center justify-center">
        <svg viewBox="0 0 40 20" className="w-10 h-5">
          <text x="2" y="15" fill="#FFCB05" fontSize="14" fontWeight="bold" fontStyle="italic">el</text>
          <circle cx="30" cy="10" r="6" fill="none" stroke="#FFCB05" strokeWidth="2"/>
          <circle cx="30" cy="10" r="3" fill="#EF4123"/>
        </svg>
      </div>
      
      {/* Discover */}
      <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center border">
        <svg viewBox="0 0 48 20" className="w-full h-auto">
          <text x="4" y="14" fill="#000000" fontSize="8" fontWeight="bold">DISCOVER</text>
          <circle cx="42" cy="10" r="6" fill="#F47920"/>
        </svg>
      </div>
      
      {/* Boleto Bancário */}
      <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center border">
        <div className="flex flex-col items-center">
          <div className="flex gap-[1px] mb-0.5">
            {[2, 1, 2, 1, 3, 1, 2, 1, 2].map((w, i) => (
              <div key={i} className="bg-black" style={{ width: `${w}px`, height: '12px' }} />
            ))}
          </div>
          <span className="text-black text-[5px] font-bold">BOLETO</span>
          <span className="text-black text-[4px]">BANCÁRIO</span>
        </div>
      </div>
      
      {/* Pix */}
      <div className="bg-white rounded p-2 h-10 w-14 flex items-center justify-center border">
        <svg viewBox="0 0 48 20" className="w-full h-auto">
          <path d="M8 10l4-4 4 4-4 4z" fill="#32BCAD"/>
          <path d="M16 10l4-4 4 4-4 4z" fill="#32BCAD"/>
          <text x="26" y="14" fill="#4BB8A9" fontSize="10" fontWeight="300" fontFamily="sans-serif">pix</text>
        </svg>
      </div>
    </div>
  );
};

export default PaymentIcons;
