import { useContext, createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

export const ProductsContext = createContext();

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [data, updateData] = useLocalStorage("products-data", null);
  const [cartItems, updateCartItems] = useLocalStorage("cartItems", []);
  const [cartTotalItems, updateCartTotalItems] = useLocalStorage(
    "cartTotalItems",
    0
  );
  const [openCart, updateOpenCart] = useLocalStorage("openCart", false);
  const [totalCartPrice, updateTotalPrice] = useLocalStorage(
    "totalCartPrice",
    0
  );

  const setData = (data) => {
    updateData(data);
  };

  const setOpenCart = (data) => {
    updateOpenCart(data);
  };

  const setCartItems = (data) => {
    updateCartItems(data);
  };

  const setCartTotalItems = (count) => {
    updateCartTotalItems(count);
  };

  const setTotalCartPrice = (amount) => {
    updateTotalPrice(amount);
  };

  const contexts = {
    data,
    setData,
    cartItems,
    setCartItems,
    cartTotalItems,
    setCartTotalItems,
    openCart,
    setOpenCart,
    totalCartPrice,
    setTotalCartPrice,
  };

  return (
    <ProductsContext.Provider value={contexts}>
      {children}
    </ProductsContext.Provider>
  );
};
