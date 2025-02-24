import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Danmáraka from "./Danmaraka";
import Product from "./Product";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rip" element={<Danmáraka />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
