import { useContext, createContext, useState } from "react";

export const ProductsContext = createContext();

export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  return context;
};

export const ProductsProvider = ({ children }) => {
  const [data, updateData] = useState();
  const [cartItems, updateCartItems] = useState([]);
  const cartTotalItems = 0;
  const [openCart, updateOpenCart] = useState(false);

  const setData = (data) => {
    updateData(data);
  };

  const setOpenCart = (data) => {
    updateOpenCart(data);
  };

  const setCartItems = (data) => {
    updateCartItems(data);
  };

  const contexts = {
    data,
    setData,
    cartItems,
    setCartItems,
    cartTotalItems,
    openCart,
    setOpenCart,
  };

  return (
    <ProductsContext.Provider value={contexts}>
      {children}
    </ProductsContext.Provider>
  );
};
