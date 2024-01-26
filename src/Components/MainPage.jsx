import CoffeeBanner from "./CoffeeBanner";

const MainPage = ({
  handleSelectedProduct,
  getProductCount,
  handleAddToCart,
}) => {
  return (
    <>
      <CoffeeBanner
        handleSelectedProduct={handleSelectedProduct}
        getProductCount={getProductCount}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default MainPage;
