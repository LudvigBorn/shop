import clsx from "clsx";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
export function Header() {
  const [cartOpen, setCartOpen] = useState(false);

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
        {cartOpen && <div className="shop-cart-block"></div>}
      </div>

      <div className="presentation"></div>
    </header>
  );
}
