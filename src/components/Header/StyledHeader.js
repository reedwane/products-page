import styled from "styled-components";
import { primaryColor, textWhite } from "helpers/styleVariables";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  gap: 3em;
  margin-bottom: 2em;
  border: 1px solid ${primaryColor};

  .logo {
    width: 1em;
  }

  .cart-icon {
    color: ${primaryColor};
  }

  .item-number {
    color: ${primaryColor};
    font-size: 0.8rem;
    position: relative;
    top: -0.5rem;
  }
`;

export default StyledHeader;