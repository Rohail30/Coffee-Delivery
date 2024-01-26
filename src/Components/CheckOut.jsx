/* eslint-disable react/prop-types */

import Navbar from "./Navbar";
import Form from "./Form";

const CheckOut = ({
  selectedProducts,
  handleSelectedProduct,
  setSelectedProducts,
  handleAddToCart,
  getProductCount,
}) => {
  return (
    <>
      <Navbar selectedProducts={selectedProducts} />
      <div className="flex flex-col w-full ">
        <Form
          selectedProducts={selectedProducts}
          handleSelectedProduct={handleSelectedProduct}
          setSelectedProducts={setSelectedProducts}
          handleAddToCart={handleAddToCart}
          getProductCount={getProductCount}
        />
      </div>
    </>
  );
};

export default CheckOut;
