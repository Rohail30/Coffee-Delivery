import { remove } from "../assets/icons";

const RemoveButton = ({
  removeItem,
  selectedProducts,
  id,
  setSelectedProducts,
}) => {
  return (
    <button
      className="remove-btn flex items-center justify-center p-[10px] text-[0.65rem] uppercase cursor-pointer gap-[5px]"
      onClick={() => removeItem(selectedProducts, id, setSelectedProducts)}
    >
      <img src={remove} alt="remove" />
      remove
    </button>
  );
};

export default RemoveButton;
