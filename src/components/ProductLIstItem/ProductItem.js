import { StyledProductItem } from "./StyledProductItem";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { useProductsContext } from "context/ProductsContext";

const ProductItem = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const {
    cartItems,
    setCartItems,
    setOpenCart,
    cartTotalItems,
    setCartTotalItems,
    totalCartPrice,
    setTotalCartPrice,
  } = useProductsContext();

  const handleAdd = (item) => {
    let obj = {
      ...item,
      count: 1,
    };

    if (cartItems.length === 0) {
      setCartItems([{ ...obj }]);
      setOpenCart(true);
      setCartTotalItems(cartTotalItems + 1);
      setTotalCartPrice(totalCartPrice + obj.price);
    } else {
      if (!cartItems?.find((product) => product.name === item.name)) {
        setCartItems([
          ...cartItems,
          {
            ...obj,
          },
        ]);

        setCartTotalItems(cartTotalItems + 1);
        setTotalCartPrice(totalCartPrice + obj.price);
      }

      setOpenCart(true);
    }
  };

  return (
    <StyledProductItem expand={expand}>
      <img src={data.image} alt={data.name} />
      <div className="name">
        <h3>{data.name}</h3>
        <span>SKU: {data.sku}</span>
      </div>
      <p className="price">&#8358;{data.price}</p>
      <div className="add" onClick={() => handleAdd(data)}>
        Add item
      </div>
      <div className="description">
        <p className="description__text">{data.description}</p>
        <span className="expand" onClick={() => setExpand(!expand)}>
          {expand ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
    </StyledProductItem>
  );
};

export default ProductItem;
