import clsx from "clsx";
import { GoodItem } from "./good-item";
import { createPortal } from "react-dom";
import { PopUp } from "./popUp";
export function GoodsList({
  items,
  onAddItemOnShopCart,
  cat,
  setCat,
  onFormOpen,
}) {
  const filtersBtns = [
    { title: "Все", cat: "all" },
    { title: "Стулья", cat: "stul" },
    { title: "Столы", cat: "stol" },
    { title: "Шторы", cat: "shtori" },
    { title: "Ковры", cat: "cover" },
    { title: "Шторы", cat: "divan" },
  ];
  return (
    <>
      <div className="filter-block">
        {filtersBtns.map((btn) => (
          <button
            onClick={() => {
              setCat(btn.cat);
            }}
            className={clsx("filter-block__btn", btn.cat === cat && "active")}
          >
            {btn.title}
          </button>
        ))}
      </div>
      <main className="goods">
        {items.map((good) => (
          <GoodItem
            onFormOpen={onFormOpen}
            key={good.id}
            good={good}
            onAddItemOnShopCart={onAddItemOnShopCart}
          />
        ))}
      </main>
    </>
  );
}
