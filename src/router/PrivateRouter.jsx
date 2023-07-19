import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../context/Context";

const PrivateRouter = () => {
  const { user } = useContext(Context);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
