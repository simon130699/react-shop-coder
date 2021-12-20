
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { ItemDetailCointainer } from "./components/ItemDetailCointainer";
import { ItemListContainer } from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartContextProvider } from "./context/CartContext";
import {} from "./styles/App.css";

function App() {
  return (
    <CartContextProvider>

      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categorias/:idCategorias"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:id" element={<ItemDetailCointainer />} />
          <Route path="/Carrito" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
