import { Container } from "@/components/Container";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Route, Routes } from "react-router-dom";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
