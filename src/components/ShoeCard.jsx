const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl) {
      changeBigShoeImage(imgUrl);
    }
  };
  return (
    <div
      className={` rounded-xl border-2  ${
        bigShoeImage === imgUrl ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain
relative z-10"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
