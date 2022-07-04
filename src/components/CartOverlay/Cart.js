import { useProductsContext } from "context/ProductsContext";
import { StyledCart } from "./StyledCart";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import CartItem from "components/CartItem/CartItem";

const Cart = () => {
  const {
    openCart,
    setOpenCart,
    cartItems,
    totalCartPrice,
    setCartItems,
    setCartTotalItems,
    setTotalCartPrice,
  } = useProductsContext();

  const modalRef = useRef(null);

  const handleClickOutside = () => {
    setOpenCart(false);
  };

  useOnClickOutside(modalRef, handleClickOutside);

  const handleResetCart = () => {
    setCartItems([]);
    setCartTotalItems(0);
    setTotalCartPrice(0);
  };

  return (
    <StyledCart show={openCart}>
      <div className="cart" ref={modalRef}>
        <h2>Cart</h2>

        <ul className="cart__products">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => <CartItem item={item} key={item.name} />)
          ) : (
            <div className="empty-cart">
              <p>Your Cart is empty, select a product to buy</p>
            </div>
          )}
        </ul>

        <h3>Total: &#8358;{totalCartPrice}.00</h3>
        <p className="clear" onClick={() => handleResetCart()}>
          Clear Cart
        </p>
      </div>
    </StyledCart>
  );
};

export default Cart;
