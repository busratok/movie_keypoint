import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
