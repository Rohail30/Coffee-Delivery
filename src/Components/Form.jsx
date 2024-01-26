import SelectedCoffee from "./SelectedCoffee";
import FormDetails from "./FormDetails";
import PayMethod from "./PayMethod";

const Form = ({
  selectedProducts,
  handleSelectedProduct,
  setSelectedProducts,
  handleAddToCart,
  getProductCount,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="mt-[105px] px-2 sm:gap-4 justify-between sm:px-10 sm:w-full md:px-28 lg:px-32 sm:flex-col md:py-4 md:min-w-[700px]  md:flex-col lg:flex lg:flex-row  lg:items-start lg:min-w-[1130px]  2xl:justify-center"
      onSubmit={handleSubmit}
    >
      <div className=" w-full flex items-start sm:justify-between sm:flex-row gap-2  md:flex-col  md:gap-4 lg:min-w-[540px] lg:max-w-[655px] ">
        <div className="w-full sm:min-w-[70%] md:w-full ">
          <FormDetails />
        </div>
        <div className="w-[150px] sm:min-w-[30%] mt-[36px]  md:mt-0  sm:w-full ">
          <PayMethod />
        </div>
      </div>
      <div className="">
        <SelectedCoffee
          selectedProducts={selectedProducts}
          handleSelectedProduct={handleSelectedProduct}
          setSelectedProducts={setSelectedProducts}
          handleAddToCart={handleAddToCart}
          getProductCount={getProductCount}
        />
      </div>
    </form>
  );
};

export default Form;
