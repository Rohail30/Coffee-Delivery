import { subtract } from "../assets/icons";
const SubButton = ({ handleSelectedProduct, id }) => {
  return (
    <button
      type="button"
      className="sub border border-transparent  cursor-pointer"
      onClick={() => handleSelectedProduct(id, false)}
    >
      <img src={subtract} alt="Subtraction" />
    </button>
  );
};

export default SubButton;
