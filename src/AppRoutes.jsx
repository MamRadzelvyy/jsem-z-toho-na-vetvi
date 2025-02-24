import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photos from "./photos";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
