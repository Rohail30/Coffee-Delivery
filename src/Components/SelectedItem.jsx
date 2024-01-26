/* eslint-disable react/prop-types */
import Coffees from "../DB/Db";
import { finalisedItems, removeItem } from "./helperFunction";
import Options from "./Options";
import { RemoveButton } from "../Buttons";

const SelectedItem = ({
  selectedProducts,
  handleSelectedProduct,
  setSelectedProducts,
  handleAddToCart,
  getProductCount,
}) => {
  const selectedCoffees = finalisedItems(selectedProducts);

  return (
    <div>
      {selectedCoffees.map((product) => {
        const coffee = Coffees.find((coffee) => coffee.id === product.pId);

        if (coffee) {
          return (
            <div
              className="curr-item flex justify-between sm:justify-between sm:py-2 md:py-4 items-center  md:gap-2 lg:gap-4  "
              key={coffee.id}
            >
              <div className="coffee-img">
                <img src={coffee.img} alt="" width={64} height={64} />
              </div>
              <div className="coffee-options mb-4 md:mb-0 flex gap-8">
                <div className="flex flex-col lg:ml-0 ">
                  <h2 className="coffee-name text-[0.875rem]">{coffee.name}</h2>
                  <div className="flex gap-[8px] items-center ">
                    <Options
                      coffee={coffee}
                      handleSelectedProduct={handleSelectedProduct}
                      handleAddToCart={handleAddToCart}
                      getProductCount={getProductCount}
                    />
                    <RemoveButton
                      removeItem={removeItem}
                      selectedProducts={selectedProducts}
                      id={coffee.id}
                      setSelectedProducts={setSelectedProducts}
                    />
                  </div>
                </div>
              </div>
              <div className="amount  py-2 w-[70px] h-[30px] flex justify-center items-center">
                R$ {coffee.amount}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SelectedItem;
