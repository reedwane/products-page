import Cart from "components/CartOverlay/Cart";
import Header from "components/Header/Header";
import ProductsList from "components/productsList/ProductsList";
import { ProductsProvider } from "context/ProductsContext";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Header />
        <div className="products-page">
          <ProductsList />
        </div>

        <Cart />
      </ProductsProvider>
    </div>
  );
}

export default App;
