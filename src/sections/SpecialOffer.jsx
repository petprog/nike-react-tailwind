import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import OutlineButton from "../components/OutlineButton";

const SpecialOffer = () => {
  return (
    <section className="padding flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Offer Image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex-1">
        <h2 className="mt-5 font-palanquin text-4xl  capitalize font-bold">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          Offer
        </h2>
        <p className="mt-6 w-full info-text break-words">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 w-full info-text break-words">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-6 ">
          <Button label="Shop now" iconUrl={arrowRight} />
          <OutlineButton label="Learn more" />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
