import { add } from "../assets/icons";
const AddButton = ({ handleSelectedProduct, id }) => {
  return (
    <button
      className="add border border-transparent  cursor-pointer"
      onClick={() => {
        handleSelectedProduct(id, true);
      }}
    >
      <img src={add} alt="addition" />
    </button>
  );
};

export default AddButton;

{
  /* <button
  className="add border border-transparent btn-color cursor-pointer"
  onClick={() => handleSelectedProduct(coffee.id, true)}
>
  <img src={add} alt="Addition" />
</button>; */
}
