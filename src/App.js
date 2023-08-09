import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GoodsList } from "./components/goods-list";
import { goodsListDB } from "./db";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(goodsListDB);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <GoodsList items={items} />
      <Footer />
    </div>
  );
}

export default App;
