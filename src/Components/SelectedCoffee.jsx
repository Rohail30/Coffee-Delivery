/* eslint-disable react/prop-types */
import SelectedItem from "./SelectedItem";
import Calculations from "./Calculations";

const SelectedCoffee = ({
  selectedProducts,
  handleSelectedProduct,
  setSelectedProducts,
  handleAddToCart,
  getProductCount,
}) => {
  return (
    <div className=" container-coffee ">
      <h1 className="heading mt-4  mb-4  sm:mt-0">Selected-Coffee</h1>
      <div className=" items coffee-details gap-4 flex flex-col  lg:w-[420px]  p-[2.5rem]  border-style w-full">
        <SelectedItem
          selectedProducts={selectedProducts}
          handleSelectedProduct={handleSelectedProduct}
          setSelectedProducts={setSelectedProducts}
          handleAddToCart={handleAddToCart}
          getProductCount={getProductCount}
        />
        <Calculations selectedProducts={selectedProducts} />
      </div>
    </div>
  );
};

export default SelectedCoffee;
