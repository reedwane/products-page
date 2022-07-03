import { useProductsContext } from "context/ProductsContext";
import { StyledCart } from "./StyledCart";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";

const Cart = () => {
  const { openCart, setOpenCart, cartItems } = useProductsContext();

  const modalRef = useRef(null);

  const handleClickOutside = () => {
    setOpenCart(false);
  };

  useOnClickOutside(modalRef, handleClickOutside);

  return (
    <StyledCart show={openCart}>
      <div className="cart" ref={modalRef}>
        <h2>Cart</h2>

        <ul className="cart__products">
          {cartItems?.map((item) => (
            <li className="product" key={item.name}>
              <img src={item.image} alt={item.name} />
              <h3 className="name">{item.name}</h3>
              <div className="controls">
                <span>+</span>
                <span>{item.count}</span>
                <span>-</span>
              </div>
            </li>
          ))}
        </ul>

        <h3>Total: </h3>
        <p>Clear Cart</p>
      </div>
    </StyledCart>
  );
};

export default Cart;
