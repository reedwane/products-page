import Loading from "components/Loading/Loading";
import ProductItem from "components/ProductLIstItem/ProductItem";
import { useProductsContext } from "context/ProductsContext";
import { useFetch } from "Fetch/useFetch";
import StyledProductList from "./StyledProductList";

const ProductsList = () => {
  useFetch();

  const { data } = useProductsContext();

  return (
    <StyledProductList>
      <h2>Products List</h2>
      {!data ? (
        <Loading />
      ) : (
        <div className="item">
          <ul>
            {data.map((item) => (
              <ProductItem data={item} key={item.name} />
            ))}
          </ul>
        </div>
      )}
    </StyledProductList>
  );
};

export default ProductsList;
