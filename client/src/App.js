import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

function App() {
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <div className="App">
      <div className="app-container">
        <Routes>
          <Route path="*" element={user ? <NotFound /> : <Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          <Route path="/register" element={!user ? <Register /> : <Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
