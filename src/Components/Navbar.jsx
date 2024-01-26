/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { navLocation, logo } from "../assets/icons";

function Navbar({ selectedProducts }) {
  const navigate = useNavigate();
  return (
    <header className=" fixed bg-white w-full top-0 p-8 flex justify-center items-center">
      <div className="flex justify-between items-center mx-2 w-[80%]">
        <div className="logo  cursor-pointer">
          <img
            src={logo}
            alt=""
            className="max-w-[100px]"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="loc-card  w-max  flex justify-between gap-4">
          <div className="location location-color  px-2 text-sm flex justify-between items-center gap-1 rounded-[5px]">
            <img src={navLocation} alt="Location" />
            <span>Karachi,Pk</span>
          </div>
          <Cart selectedProducts={selectedProducts} />
        </div>
      </div>
    </header>
  );
}
export default Navbar;
