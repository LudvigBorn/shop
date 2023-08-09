import { GoodItem } from "./good-item";

export function GoodsList({ items }) {
  return (
    <main className="goods">
      {items.map((good) => (
        <GoodItem key={good.id} good={good} />
      ))}
    </main>
  );
}
