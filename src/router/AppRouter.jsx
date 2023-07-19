import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import { useState } from "react";
import Details from "../pages/Details";

const AppRouter = () => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login user={user} setUser={setUser} />} />
        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home user={user} />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
