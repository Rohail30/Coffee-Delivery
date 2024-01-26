import { finalisedItemsTotalPrice, totalAmount } from "./helperFunction";
import Coffees from "../DB/Db";
const Calculations = ({ selectedProducts }) => {
  const deliveryCharges = 3.5;
  const total = finalisedItemsTotalPrice(selectedProducts, Coffees);

  return (
    <>
      <div className="total-items flex gap-1 flex-col ">
        <div className="seperator itmVal-Delivery">
          <p className="">Total items</p>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <div className="seperator itmVal-Delivery">
          <p>Delivery </p>
          <span>R$ {deliveryCharges.toFixed(2)}</span>
        </div>
        <div className="seperator amount">
          <p>Total items </p>
          <span>R$ {totalAmount(total, deliveryCharges)}</span>
        </div>
      </div>
      <button className="confirm-btn">Confirm Order</button>
    </>
  );
};

export default Calculations;
