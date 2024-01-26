import { cart } from "../assets/icons";
const CartButton = ({ getProductCount, handleAddToCart, coffee }) => {
  return (
    <button
      className="add-cart flex items-center justify-center w-[32px] h-[32px] cardColor border-none rounded-[6px] cursor-pointer "
      onClick={() => {
        {
          getProductCount(coffee.id) > 0
            ? (() => {
                handleAddToCart(coffee.id);
              })()
            : alert("Please add at least one item");
        }
      }}
    >
      <img src={cart} alt="add to cart" />
    </button>
  );
};

export default CartButton;
