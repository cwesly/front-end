import { BASE_IMAGE_URL } from "../constants";
import { IRecipe } from "../types/types";

type RecipeCardProp = {
  recipe: IRecipe;
};

const RecipeCard = ({ recipe }: RecipeCardProp) => {
  return (
    <div>
      <img src={`${BASE_IMAGE_URL}${recipe.image}.jpg`} alt="recipe"></img>
      <p>{recipe.title}</p>
    </div>
  );
};

export default RecipeCard;
