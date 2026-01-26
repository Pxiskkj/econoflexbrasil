const PaymentIcons = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Visa */}
      <div className="bg-white rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <path fill="#1565C0" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"/>
        </svg>
      </div>
      
      {/* Mastercard */}
      <div className="bg-white rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <circle cx="17" cy="24" r="9" fill="#EB001B"/>
          <circle cx="31" cy="24" r="9" fill="#F79E1B"/>
          <path fill="#FF5F00" d="M24 17.5c2.5 2 4 5 4 6.5s-1.5 4.5-4 6.5c-2.5-2-4-5-4-6.5S21.5 19.5 24 17.5z"/>
        </svg>
      </div>
      
      {/* American Express */}
      <div className="bg-[#006FCF] rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <span className="text-white text-[6px] font-bold leading-tight text-center">AMERICAN<br/>EXPRESS</span>
      </div>
      
      {/* Diners Club */}
      <div className="bg-white rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <circle cx="24" cy="24" r="10" fill="none" stroke="#004A97" strokeWidth="2"/>
          <text x="24" y="26" textAnchor="middle" fill="#004A97" fontSize="6" fontWeight="bold">DC</text>
        </svg>
      </div>
      
      {/* Aura */}
      <div className="bg-[#ED1C24] rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <span className="text-white text-[8px] font-bold">Aura</span>
      </div>
      
      {/* Elo */}
      <div className="bg-black rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <span className="text-yellow-400 text-[10px] font-bold">elo</span>
      </div>
      
      {/* Discover */}
      <div className="bg-white rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <span className="text-orange-500 text-[7px] font-bold">DISCOVER</span>
      </div>
      
      {/* Boleto */}
      <div className="bg-white rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-black text-[5px] font-bold">BOLETO</span>
          <div className="flex gap-[1px]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[2px] h-3 bg-black" style={{ height: i % 2 === 0 ? '10px' : '6px' }} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Pix */}
      <div className="bg-white rounded p-1.5 h-8 w-12 flex items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <path fill="#32BCAD" d="M30.5 24l-6.5 6.5-6.5-6.5 6.5-6.5z"/>
          <path fill="#32BCAD" d="M24 17.5l6.5 6.5-6.5 6.5-6.5-6.5z" transform="rotate(45 24 24)"/>
        </svg>
      </div>
    </div>
  );
};

export default PaymentIcons;
