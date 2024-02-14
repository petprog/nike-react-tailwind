const OutlineButton = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none border-2 rounded-full hover:bg-gray-100 text-slate-gray ">
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

export default OutlineButton;
