import { AddButton, SubButton } from "../Buttons/index";

const Options = ({ handleSelectedProduct, getProductCount, coffee }) => {
  return (
    <div
      className={`add-sub flex items-center justify-center rounded-[6px]  p-[7px]`}
    >
      <SubButton handleSelectedProduct={handleSelectedProduct} id={coffee.id} />

      <p className="w-[32px] flex items-center justify-center outline-none bg-transparent border-transparent text-center">
        {getProductCount(coffee.id)}
      </p>
      <AddButton handleSelectedProduct={handleSelectedProduct} id={coffee.id} />
    </div>
  );
};

export default Options;
