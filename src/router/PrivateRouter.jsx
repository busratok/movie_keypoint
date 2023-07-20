import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../context/Context";

const PrivateRouter = () => {
  // Use the 'useContext' hook to access the 'user' value from the 'Context'
  const { user } = useContext(Context);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
