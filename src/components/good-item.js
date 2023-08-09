export const GoodItem = ({ good }) => {
  return (
    <div className="goods__card">
      <div className="goods__wrap-img">
        <img className="goods__img" src={good.thambnail} alt={good.name} />
      </div>
      <div className="goods__lower">
        <div className="goods__name">{good.name}</div>
        <div className="goods__descr">{good.description}</div>
        <div className="goods__price">{good.price}$</div>
      </div>
      <div className="goods__add-btn"></div>
    </div>
  );
};
