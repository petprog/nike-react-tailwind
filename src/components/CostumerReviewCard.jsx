import { star } from "../assets/icons";

const CostumerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt=""
        className="rounded-full object-cover w-[120px] h-[120px]"
      />

      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

      <div className="flex gap-2 items-center mt-4">
        <img src={star} alt="rating" width={20} height={20} />
        <p className="font-montserrat text-lg leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>

      <h3 className="font-palanquin font-bold text-3xl mt-3 leading-normal">
        {customerName}
      </h3>
    </div>
  );
};

export default CostumerReviewCard;
