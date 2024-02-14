import CostumerReviewCard from "../components/CostumerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="padding bg-pale-blue max-container">
      <h2 className="mt-5 font-palanquin text-4xl  capitalize font-bold text-center">
        What Our{" "}
        <span className="text-coral-red inline-block mt-3">Customers</span> Say?
      </h2>
      <p className="mt-4 max-w-lg info-text break-words text-center mx-auto">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <CostumerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
