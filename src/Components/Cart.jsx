import { useNavigate } from "react-router-dom";
import { finalizedObjectsCount } from "./helperFunction";
import { navCart } from "../assets/icons";
const Cart = ({ selectedProducts }) => {
  const navigate = useNavigate();

  let itemLength = finalizedObjectsCount(selectedProducts);

  return (
    <button
      className="bg-lightBrown relative inline-flex p-2 cursor-pointer rounded-[5px]"
      onClick={() => itemLength > 0 && navigate("/checkout")}
    >
      <img src={navCart} alt="" />
      {itemLength > 0 && (
        <div className="notification absolute inline-flex w-[20px] h-[20px] items-center justify-center   text-xs font-bold text-white    rounded-full -top-2 -end-2 dark:border-gray-900">
          {itemLength}
        </div>
      )}
    </button>
  );
};

export default Cart;
