import { useNavigate } from "react-router-dom";
import { BASE_IMAGE_URL } from "../constants";
import { IRecipe } from "../types/types";

type RecipeCardProp = {
  recipe: IRecipe;
};

const RecipeCard = ({ recipe }: RecipeCardProp) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipe/${recipe.ID}`);
  };

  return (
    <div>
      <img src={`${BASE_IMAGE_URL}${recipe.image}.jpg`} alt="recipe"></img>
      <p>{recipe.title}</p>
      <button onClick={handleClick}>Details</button>
    </div>
  );
};

export default RecipeCard;
