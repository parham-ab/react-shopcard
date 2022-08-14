// components
import ProductsList from "./components/ProductsList";
// context
import ProductContextProvider from "./contexts/providers/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <ProductsList />
    </ProductContextProvider>
  );
};

export default App;
