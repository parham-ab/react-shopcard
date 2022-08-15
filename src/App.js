import ScrollToTop from "react-scroll-to-top";
// components
import ProductsList from "./components/ProductsList";
// context
import ProductContextProvider from "./contexts/providers/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <ProductsList />
      <ScrollToTop smooth top={200} color="#111" />
    </ProductContextProvider>
  );
};

export default App;