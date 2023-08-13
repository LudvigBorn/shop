import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GoodsList } from "./components/goods-list";
import { goodsListDB } from "./db";
import { Popup } from "./components/popUp";

function App() {
  const [items, setItems] = useState([]);
  const [shopCartItemsId, setShopCartItemsId] = useState([]);
  const [cat, setCat] = useState("all");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [itemForModal, setItemForModal] = useState({
    id: 1,
    name: "Стулья",
    category: "stul",
    thambnail:
      "https://cdn.team7-home.com/fileadmin/_processed_/1/d/csm_naturalnoe-derevo-obedennyj-stul-flor-team7_3ea7ed5787.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 3.14,
  });

  useEffect(() => {
    setItems(goodsListDB);
  }, []);

  const onAddItemOnShopCart = (id) => {
    if (items.map((item) => item.id === id)) {
      if (shopCartItemsId.includes(id)) {
        return;
      } else {
        setShopCartItemsId((prev) => [...prev, id]);
      }
    } else {
      return;
    }
  };

  const onDeleteItemOnShopCart = (id) => {
    if (items.map((item) => item.id === id)) {
      setShopCartItemsId((prev) => prev.filter((item) => item !== id));
    }
  };

  const onFormOpen = (state, item = null) => {
    setModalIsOpen(state);
    setItemForModal(item);
  };
  const filterdItems =
    cat === "all" ? items : items.filter((item) => item.category === cat);

  const addedItems = items.filter((item) =>
    shopCartItemsId.some((cartId) => cartId === item.id)
  );
  return (
    <div className="wrapper">
      <Header
        items={addedItems}
        onDeleteItemOnShopCart={onDeleteItemOnShopCart}
      />
      <GoodsList
        onFormOpen={onFormOpen}
        cat={cat}
        setCat={setCat}
        items={filterdItems}
        onAddItemOnShopCart={onAddItemOnShopCart}
      />
      <Footer />
      {modalIsOpen && (
        <Popup itemForModal={itemForModal} onFormOpen={onFormOpen} />
      )}
    </div>
  );
}

export default App;
