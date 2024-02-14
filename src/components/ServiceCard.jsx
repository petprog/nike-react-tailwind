const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="px-10 py-16 flex flex-1 flex-col sm:w-[350px] sm:min-w-[350px] w-full justify-center items-start shadow-3xl rounded-3xl">
      <div className=" w-11 h-11 flex justify-center items-center p-2 rounded-full bg-coral-red">
        <img src={imgURL} alt="" width={24} height={24} />
      </div>

      <h3 className="font-palanquin mt-5 font-bold text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words info-text  ">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
