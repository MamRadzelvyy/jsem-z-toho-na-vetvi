import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photos from "./photos";
import Contact from "./cont";
import Spajz from "./spajz";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/spajz" element={<Spajz />} />
          <Route path="/rip" element={<Danmáraka />} />
          <Route path="/product" element={<Product />} />
          <Route path="/piggas" element={<Piggas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
