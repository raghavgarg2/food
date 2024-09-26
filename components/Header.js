import React from "react";
import { APP_LOGO, CART_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between m-4">
      <img src={APP_LOGO} />

      <Link to="/cart">
        <button className=" bg-black w-auto px-4 py-4 rounded-xl text-stone-50 flex justify-between">
          <img className="w-6 p-1" src={CART_LOGO} />
          <span>cart</span>({cartItems.length})
        </button>
      </Link>
    </div>
  );
};

export default Header;
