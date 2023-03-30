import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { Context } from "../Context";

let itemPrice = 5.99;

function CartItem({ item }) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        ref={ref}
        className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} width="130px" />
      <p>
        {itemPrice.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
        })}
      </p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
