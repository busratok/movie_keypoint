import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import { useState } from "react";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:media_type/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
