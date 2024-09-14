import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/login";
import App from "../App";
import Register from "../pages/register/register";
import HomePage from "../pages/homePage/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
