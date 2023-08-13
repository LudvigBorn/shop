import clsx from "clsx";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShopCartItem } from "./ShopCartItem";

const ShowOrders = ({ items, onDeleteItemOnShopCart }) => {
  return (
    <>
      {items.map((item) => (
        <ShopCartItem
          key={item.id}
          item={item}
          onDeleteItemOnShopCart={onDeleteItemOnShopCart}
        />
      ))}
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontWeight: "600",
          fontSize: "20px",
          margin: "10px 0",
        }}
      >
        <div>Сумма: </div>
        <div>{items.reduce((acc, curr) => acc + curr.price, 0)}$</div>
      </div>
    </>
  );
};

export function Header({ items, onDeleteItemOnShopCart }) {
  const [cartOpen, setCartOpen] = useState(false);
  console.log(items);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>

        <ul className="nav">
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li>
            <a href="#">Кабинет</a>
          </li>
        </ul>
        <FaShoppingCart
          onClick={() => {
            setCartOpen((prev) => !prev);
          }}
          className={clsx("shop-cart-btn", cartOpen && "active")}
        />
        {cartOpen && (
          <div className="shop-cart-block">
            {items.length === 0 ? (
              <div>Еще нет товаров</div>
            ) : (
              <ShowOrders
                onDeleteItemOnShopCart={onDeleteItemOnShopCart}
                items={items}
              />
            )}
          </div>
        )}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
