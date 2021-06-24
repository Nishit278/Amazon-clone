import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/GGD/June/Teaser/Amazon--10thGen--Gaming3--1500x300_2.jpg"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping cart is empty</h2>
            <p>
              You current have no items in your cart, to buy one or more items,
              click the add to cart button next to any item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
