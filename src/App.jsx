import Products from "./component/Products/Products";
import Tod from "./component/Home/Home";
import ProductsItems from "./component/Products/ProductsItems";

import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./component/nav-footer/NavBar";
import Home from "./component/Home/Home";
import Login from "./component/Login-Registration/Login";
import Registration from "./component/Login-Registration/Registration";
import Footer from "./component/nav-footer/Footer";
import Cart from "./component/cart/cart";
import Prd from "./component/Products/Prd";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products type='all'/>} />
          <Route path="/products/men" element={<Products type="men's clothing" />} />
          <Route path="/products/women" element={<Products type="women's clothing"/>} />
          <Route path="/products/jewelery" element={<Products type="jewelery" />} />
          <Route path="/products/electronics" element={<Products type='electronics' />} />
        </Route>
        <Route path="/products/:id" element={<ProductsItems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/shopingcart" element={<Cart />} />
        <Route path="/prd" element={<Prd />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
