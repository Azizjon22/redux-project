import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context and reducer/StoreContext";

const Navbar = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="flex flex-row justify-evenly mt-2 pt-4 text-lg font-medium">
      <Link to="/">Home</Link>
      <Link to="/basket">
        Basket
        <span className="text-xs aling-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {products.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
