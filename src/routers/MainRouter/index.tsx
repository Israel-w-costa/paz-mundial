import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../../pages/Home";
import { NotFound } from "../../pages/NotFound";
import { Sign } from "../../pages/Sign";
import { Signatures } from "../../pages/Signatures";
import { AboutPeace } from "../../pages/AboutPeace";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/signatures" element={<Signatures />} />
        <Route path="/AboutPeace" element={<AboutPeace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
