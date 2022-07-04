import styled from "styled-components";
import { primaryColor } from "helpers/styleVariables";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  gap: 3em;
  max-width: 600px;
  margin: 0 auto 2em;
  border: 1px solid ${primaryColor};

  .logo {
    width: 1.5em;
  }

  .cart-icon {
    color: ${primaryColor};
    font-size: 1.5rem;
  }

  .item-number {
    color: ${primaryColor};
    font-size: 0.8rem;
    position: relative;
    top: -1rem;
    font-weight: bold;
  }
`;

export default StyledHeader;
