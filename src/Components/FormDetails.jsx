import { gridLayout } from "./gridLayOut";
import { location } from "../assets/icons";
const FormDetails = () => {
  return (
    <>
      <h1 className="heading mb-4">Complete your order</h1>
      <div className=" p-1 sm:p-2 md:p-[2.5rem] bg-color rounded-[6px] flex flex-col gap-4 items-start ">
        <div className="upper flex items-center gap-[12px]">
          <div className="img-container">
            <img src={location} className="" width={22} height={22} />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[1rem]">Delivery address</h1>
            <p className="text-[0.875rem]">
              Enter the address where you would like to receive your order
            </p>
          </div>
        </div>
        <div className="lower text-[0.875rem] grid grid-cols-3  md:grid-container my-4  gap-[0.5rem] ">
          {gridLayout.map((gridItem) => (
            <div
              key={gridItem.name}
              className={` ${gridItem.span}  ${gridItem.mdSpan}`}
            >
              <input
                type="text"
                placeholder={gridItem.p_holder}
                className="input-style w-full p-[0.7rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormDetails;
