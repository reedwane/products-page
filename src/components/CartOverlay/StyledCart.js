import {
  primaryColor,
  secondaryColor,
  textWhite,
} from "helpers/styleVariables";
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
    position: relative;
    overflow: auto;
    background-color: white;
    height: 80%;
    max-height: fit-content;
    max-width: 600px;
    margin: 0 auto;
    padding-bottom: 2em;
  }

  .cart__products {
    min-height: 80%;
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
    position: relative;
    align-items: center;

    h4 {
      position: absolute;
      top: -2em;
    }

    span {
      cursor: pointer;
    }
  }

  .empty-cart {
    position: relative;
    top: 10em;
    font-weight: bold;
  }

  .clear {
    background-color: ${primaryColor};
    display: inline-block;
    color: ${textWhite};
    font-weight: 500;
    padding: 0.3em;
    margin-top: 0.5em;
    cursor: pointer;
  }
`;
