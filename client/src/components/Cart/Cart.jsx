import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";

import { makePaymentRequest } from "../../utils/api";

import { loadStripe } from "@stripe/stripe-js";
const Cart = ({ setShowCart }) => {
  const { cartSubTotal, cartItems } = useContext(Context);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest?.post("/api/orders", {
        products: cartItems,
      });

      await stripe.redirectToCheckout({
        sessionId: res?.data?.stripeSession?.id
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-panel">
      <div className="opacity-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {/* Empty Cart Section */}
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in the Cart.</span>
            <button className="return-cta-btn">RETURN TO SHOP</button>
          </div>
        )}
        {/* Added Products Cart Section */}

        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <div className="text">Subtotal: </div>
                <div className="text total">&#8377;{cartSubTotal}</div>
              </div>
              <div className="button">
                <button className="checkout-cta-btn" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
