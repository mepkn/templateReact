import { Container } from "@/components/Container";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Post } from "@/pages/Post";
import { Posts } from "@/pages/Posts";
import { Register } from "@/pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<Post />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};