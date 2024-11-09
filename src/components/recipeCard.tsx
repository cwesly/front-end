import { useNavigate } from "react-router-dom";
import { BASE_IMAGE_URL } from "../constants";
import { IRecipe } from "../types/types";
import FavoriteCheckbox from "./favoriteCheckbox";
import { useContext, useEffect, useState } from "react";
import useFavorite from "../hooks/useFavorites";
import FavoritesContext from "../context/favoritesContext";
import "./RecipeCard.css";

type RecipeCardProp = {
  recipe: IRecipe;
};

const RecipeCard = ({ recipe }: RecipeCardProp) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { addFavorite, removeFavorite, getFavorites } = useFavorite();
  const navigate = useNavigate();
  const { favorites } = useContext(FavoritesContext);

  const handleClick = () => {
    navigate(`/recipe/${recipe.ID}`);
  };

  const handleFavorite = () => {
    if (!isFavorite) {
      addFavorite(recipe.ID);
      setIsFavorite(true);
    } else {
      removeFavorite(recipe.ID);
      setIsFavorite(false);
    }
    getFavorites();
  };

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite.ID === recipe.ID));
  }, [favorites]);

  return (
    <div className="recipe-card">
      <img src={`${BASE_IMAGE_URL}${recipe.image}.jpg`} alt="recipe" />
      <p>{recipe.title}</p>
      <FavoriteCheckbox
        checked={isFavorite}
        setChecked={handleFavorite}
        className="favorite-checkbox"
      />
      <button onClick={handleClick}>Details</button>
    </div>
  );
};

export default RecipeCard;
