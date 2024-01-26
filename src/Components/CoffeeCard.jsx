import Coffees from "../DB/Db";
import Options from "./Options";
import CoffeeTags from "./CoffeeTags";
import { CartButton } from "../Buttons";

const CoffeeCard = ({
  handleSelectedProduct,
  getProductCount,
  handleAddToCart,
}) => {
  return (
    <>
      <section className="coffee-card-container flex flex-col">
        <h1 className="mb-12 font-bold">Our Cafes</h1>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 justify-start items-start gap-y-12 gap-x-8">
          {Coffees.map((coffee) => (
            <div
              key={coffee.name}
              className="coffee-card  flex flex-col items-center justify-between gap-4 w-full h-full"
            >
              {
                <img
                  src={coffee.img}
                  alt="myimage"
                  className="w-[7.5rem] h-[7.5rem] mt-[-27px]"
                />
              }
              <CoffeeTags coffee={coffee} />

              <div className="about flex flex-col items-center justify-center gap-[8px] px-4">
                <strong className="name">{coffee.name}</strong>
                <p className="note text-center">{coffee.note}</p>
              </div>

              <div className="w-full flex justify-between items-center px-4 pb-4">
                <div className="package-color text-[1.5rem] px-[8px] flex items-center justify-center gap-2">
                  <span className="text-[0.875rem] font-normal">R$</span>
                  <p className="font-bold">{coffee.amount}</p>
                </div>

                <Options
                  coffee={coffee}
                  handleSelectedProduct={handleSelectedProduct}
                  handleAddToCart={handleAddToCart}
                  getProductCount={getProductCount}
                />

                <CartButton
                  getProductCount={getProductCount}
                  handleAddToCart={handleAddToCart}
                  coffee={coffee}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default CoffeeCard;
