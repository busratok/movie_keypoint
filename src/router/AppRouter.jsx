import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import Details from "../pages/Details";

const AppRouter = () => {
  // Use BrowserRouter to enable client-side routing
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
        {/* Define the private router element for authenticated routes */}
        <Route element={<PrivateRouter />}>
          <Route path="/home" element={<Home />} />
          {/* Define the details route with dynamic segments for media type and ID */}
          <Route path="/details/:media_type/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
