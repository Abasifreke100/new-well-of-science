
const ShareButton = ({ backgroundColor, icon, label, onClick }) => {
  return (
    <div
      className={`w-[149px] h-[35.5px] text-[12px] mt-3 text-[#ffffff] rounded-[5px] gap-2 flex items-center justify-center shadow-xl cursor-pointer transition-transform hover:bg-opacity-90 hover:translate-y-[-5px] ease-in`}
      style={{
        backgroundColor,
        transitionDuration: '650ms',
      }}
      onClick={onClick}
    >
      {icon}
      <span className="hidden md:block">{label}</span>
    </div>
  );
};

export default ShareButton;
