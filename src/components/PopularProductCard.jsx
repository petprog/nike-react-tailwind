import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full justify-center items-start">
      <img src={imgURL} alt="name" className="object-contain" />
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>

      <div className="mt-1 flex gap-6 justify-start items-center">
        <p className="font-semibold font-montserrat text-coral-red text-xl leading-normal">
          {price}
        </p>
        <div className="flex gap-2 items-center">
          <img src={star} alt="rating" width={20} height={20} />
          <p className="font-montserrat text-lg leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
