import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photos from "./photos";
import Contact from "./cont";
import Spajz from "./spajz";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spajz" element={<Spajz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
