import StyledHeader from "./StyledHeader";
import logo from "assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useProductsContext } from "context/ProductsContext";

const Header = () => {
  const { setOpenCart, cartTotalItems } = useProductsContext();

  return (
    <StyledHeader>
      <img src={logo} alt="logo" className="logo" />
      <h3>Shopping Page</h3>
      <div className="cart-logo" onClick={() => setOpenCart(true)}>
        <AiOutlineShoppingCart className="cart-icon" />
        <span className="item-number">{cartTotalItems}</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
