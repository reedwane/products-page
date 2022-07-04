import { useProductsContext } from "context/ProductsContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useLocalStorage } from "usehooks-ts";

const CartstoredItem = ({ item }) => {
  const {
    cartTotalItems,
    cartItems,
    setCartItems,
    setCartTotalItems,
    setTotalCartPrice,
    totalCartPrice,
  } = useProductsContext();

  const [storedItem, setstoredItem] = useLocalStorage(`${item.name}-cart`, {
    ...item,
  });
  const [priceTotal, setPriceTotal] = useLocalStorage(
    `${item.name}-cart-priceTotal`,
    storedItem.price
  );
  const [count, setCount] = useLocalStorage(
    `${item.name}-cart-count`,
    storedItem.count
  );

  const handleIncrease = () => {
    setCount((storedItem.count += 1));
    setstoredItem(storedItem);
    setPriceTotal(storedItem.count * storedItem.price);

    setCartTotalItems(cartTotalItems + 1);
    setTotalCartPrice(totalCartPrice + storedItem.price);

    // setstoredItem(storedItem);
    console.log(storedItem.count);
  };

  const handleDecrease = () => {
    if (storedItem.count === 1) {
      setCartTotalItems(cartTotalItems - 1);
      setTotalCartPrice(totalCartPrice - storedItem.price);
      setCartItems(cartItems.filter((item) => item.name !== storedItem.name));

      return;
    }
    setCount((storedItem.count -= 1));
    setstoredItem(storedItem);
    setPriceTotal(storedItem.count * storedItem.price);

    setCartTotalItems(cartTotalItems - 1);
    setTotalCartPrice(totalCartPrice - storedItem.price);
    // setstoredItem(storedItem);
  };

  return (
    <li className="product">
      <img src={storedItem.image} alt={storedItem.name} />
      <h3 className="name">{storedItem.name}</h3>
      <div className="controls">
        <h4>&#8358;{priceTotal}</h4>
        <span onClick={() => handleIncrease()}>
          <AiOutlinePlus />
        </span>
        <span>{count}</span>
        <span onClick={() => handleDecrease()}>
          <AiOutlineMinus />
        </span>
      </div>
    </li>
  );
};

export default CartstoredItem;
