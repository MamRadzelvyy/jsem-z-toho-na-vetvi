import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photos from "./photos";
import Danmáraka from "./Danmaraka";
import Product from "./Product";
import Piggas from "./Piggas";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/rip" element={<Danmáraka />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/piggas" element={<Piggas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
