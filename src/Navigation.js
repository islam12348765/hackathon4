import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SearchBlock from "./components/SearchBlock";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Edit from "./pages/Edit";
import Rolls from "./pages/Rolls";
import MainPage from "./pages/MainPage";
import ProductDetails from "./pages/ProductDetails";
import Registration from "./pages/Registration";
import HotRolls from "./pages/HotRolls";
import AboutUs from "./pages/AboutUs";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SearchBlock />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="details/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="reg" element={<Registration />} />
        <Route path="/admin-panel/edit/:id" element={<Edit />} />
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="admin-panel/add" element={<Add />} />
        <Route path="/rolls" element={<Rolls />} />
        <Route path="/hotRolls" element={<HotRolls />} />
        <Route path="o-nas" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
