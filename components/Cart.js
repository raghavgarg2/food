import React from "react";
import { useSelector } from "react-redux";
import ItemCards from "./ItemCards";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div>
        <h1 className=" m-2 p-2 font-extrabold text-3xl text-center line-height-4">
          Cart
        </h1>
      </div>
      <div className="m-12">
        <ItemCards cardInfo={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
