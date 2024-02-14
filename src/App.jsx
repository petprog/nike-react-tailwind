import {
  Hero,
  Services,
  PopularProducts,
  Subscribe,
  SpecialOffer,
  Footer,
  SuperQuality,
  CustomerReviews,
} from "./sections";

import { Nav } from "./components";

const App = () => {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <PopularProducts />
        <SuperQuality />
        <Services />
        <SpecialOffer />
        <CustomerReviews />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default App;
