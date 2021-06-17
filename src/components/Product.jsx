import React from "react";
import "./Product.css";
function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=""
      />
      <button>Add to cart</button>
    </div>
  );
}

export default Product;
