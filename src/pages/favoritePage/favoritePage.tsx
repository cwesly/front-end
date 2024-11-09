import { useContext, useEffect } from "react";
import FavoritesContext from "../../context/favoritesContext";
import useFavorite from "../../hooks/useFavorites";
import RecipeCard from "../../components/recipeCard";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./favoritePage.css";

const FavoritePage = () => {
  const { favorites } = useContext(FavoritesContext);
  const { getFavorites } = useFavorite();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const hasFavorite = favorites.length;

  useEffect(() => {
    const localStorageUser =
      JSON.parse(localStorage.getItem("user") as string) || {};

    if (!user.token && !localStorageUser.token) {
      navigate("/");
    }
    setUser(localStorageUser);
    getFavorites(localStorageUser.token);
  }, []);

  return (
    <div className="container">
      <h1 className="header">Receitas Favoritas</h1>
      <ul className="recipe-list">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </ul>
      {!hasFavorite && <p>Você não possui receitas favoritas.</p>}
      <a className="back-link" href="/home">
        Voltar à página principal
      </a>
    </div>
  );
};

export default FavoritePage;
