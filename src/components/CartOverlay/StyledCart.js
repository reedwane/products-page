import { secondaryColor } from "helpers/styleVariables";
import styled from "styled-components";

export const StyledCart = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 5% 5%;
  background: rgba(0, 0, 0, 0.383);
  box-shadow: 0px 0px 10px black;

  .cart {
    background-color: white;
    min-height: 15em;
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 2em;
  }

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${secondaryColor};

    img {
      width: 10rem;
    }
  }

  .controls {
    display: flex;
    gap: 0.5rem;

    span {
      cursor: pointer;
    }
  }
`;
