import React from "react";
import { FaTrash } from "react-icons/fa";
export function ShopCartItem({ item, onDeleteItemOnShopCart }) {
  return (
    <div className="shop-cart-block__item">
      <div className="shop-cart-block__wrap-img">
        <img className="shop-cart-block__img" src={item.thambnail} alt="" />
      </div>

      <div className="shop-cart-block__info">
        <div className="shop-cart-block__name">{item.name}</div>
        <div className="shop-cart-block__price">{item.price}</div>
      </div>
      <div
        className="shop-cart-block__wrap-trashIcon"
        onClick={() => {
          onDeleteItemOnShopCart(item.id);
        }}
      >
        <FaTrash className="shop-cart-block__trashIcon" />
      </div>
    </div>
  );
}
