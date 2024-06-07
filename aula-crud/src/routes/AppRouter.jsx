import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Post from "../pages/Posts";
import Update from "../pages/Update";
import More from "../pages/More";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Feed />}></Route>
      <Route path="/posts" element={<Post />}></Route>
      <Route path="/update" element={<Update />}></Route>
      <Route path="/more" element={<More />}></Route>
    </Routes>
  );
}

export default AppRouter;
