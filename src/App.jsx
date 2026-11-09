
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

import { StoreProvider } from "./context/StoreContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(function () {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function StoreApp() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <StoreApp />
    </StoreProvider>
  );
}
