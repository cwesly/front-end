import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/loginPage/login";
import Register from "../pages/register/register";
import HomePage from "../pages/homePage/homePage";
import RecipeDetails from "../pages/recipeDetailsPage/recipeDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/recipe/:id",
    element: <RecipeDetails />,
  },
]);

export default router;
