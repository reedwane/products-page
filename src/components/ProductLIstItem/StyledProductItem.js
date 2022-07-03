import {
  primaryColor,
  secondaryColor,
  textWhite,
} from "helpers/styleVariables";
import styled from "styled-components";

export const StyledProductItem = styled.li`
  padding: 1em;
  display: grid;
  grid-template-columns: 10em auto auto;
  grid-template-rows: 3em auto auto;
  column-gap: 0.5em;
  border-bottom: 1px solid ${secondaryColor};
  margin: 1em 0 1em;

  img {
    width: 100%;
    grid-row: 1 / span 2;
    border: 1px solid ${primaryColor};
  }

  .name {
    text-align: left;
  }
  .sku {
    text-align: left;
  }

  .price {
    text-align: right;
  }

  .add {
    grid-column: 3 / span 1;
    background-color: ${primaryColor};
    color: ${textWhite};
    justify-self: self-end;
    padding: 0.3em;
    height: 2em;
    width: fit-content;
  }

  .description {
    grid-row: 3 / span 1;
    grid-column: 1 / span 3;
    text-align: justify;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-in;

    .description__text {
      width: 100%;
      padding-right: 1rem;
      height: ${(props) => (props.expand ? "fit-content" : "2ch")};
      overflow: hidden;
      white-space: ${(props) => (props.expand ? "wrap" : "nowrap")};
      text-overflow: ellipsis;
      transition: height 3s ease-in;
    }

    .expand {
      position: absolute;
      right: 0;
      top: 0;
      color: ${primaryColor};
      transition: all 2s ease-in;
    }
  }
`;
