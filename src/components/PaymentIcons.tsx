const PaymentIcons = () => {
  return (
    <div className="flex items-center gap-1">
      {/* Pix */}
      <div className="bg-white rounded h-6 px-1.5 flex items-center justify-center gap-0.5">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
          <path d="M12.5 2.1l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0z" fill="#32BCAD"/>
          <path d="M12.5 12.1l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.4.4-1 .4-1.4 0l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0z" fill="#32BCAD"/>
        </svg>
        <span className="text-[#32BCAD] text-xs font-light">pix</span>
      </div>
    </div>
  );
};

export default PaymentIcons;
