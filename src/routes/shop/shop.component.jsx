import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
  return SHOP_DATA.map(({ id, name }) => <h1 key={id}>{name}</h1>);
};

export default Shop;
