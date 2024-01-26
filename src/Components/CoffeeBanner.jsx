/* eslint-disable react/prop-types */
import BannerSection from "./BannerSection";
import CoffeeCard from "./CoffeeCard";

const CoffeeBanner = ({
  handleSelectedProduct,
  getProductCount,
  handleAddToCart,
}) => {
  return (
    <main className="mt-40 flex justify-center items-start ">
      <div className="main-container max-w-[1140px] w-full m-auto p-8">
        <BannerSection />
        <CoffeeCard
          handleSelectedProduct={handleSelectedProduct}
          getProductCount={getProductCount}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </main>
  );
};
export default CoffeeBanner;
