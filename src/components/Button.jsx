const Button = ({ label, iconUrl, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-nowrap text-white hover:bg-[#f85442] ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
