import { useProductsContext } from "context/ProductsContext";

const { useEffectOnce } = require("usehooks-ts");

export const useFetch = () => {
  const { setData } = useProductsContext();

  useEffectOnce(() => {
    (async () => {
      try {
        const data = await fetch("data.json");
        const response = await data.json();

        setData(response);
      } catch (error) {
        console.log(error);
      }
    })();
  });
};
