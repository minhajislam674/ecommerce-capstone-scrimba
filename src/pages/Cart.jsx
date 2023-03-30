import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [orderBtnText, setOrderBtnText] = useState("Place Order");
  const { cartItems, setCartItems } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function totalCost() {
    let total = 0;
    cartItems.forEach((item) => {
      total += 5.99;
    });
    return total.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  }

  const handlePlaceOrder = () => {
    setOrderBtnText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setOrderBtnText("Place Order");
      setCartItems([]);
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <h2 className="total-cost">Total: {totalCost()} </h2>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={handlePlaceOrder}>{orderBtnText}</button>
        </div>
      ) : (
        <h2>You have no items in your cart.</h2>
      )}
    </main>
  );
}

export default Cart;
