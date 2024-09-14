import { IRecipe } from "../types/types";

type RecipeCardProp = {
  recipe: IRecipe;
};

const BASE_IMAGE_URL = "http://localhost:3001/images/";

const RecipeCard = ({ recipe }: RecipeCardProp) => {
  return (
    <div>
      <img src={`${BASE_IMAGE_URL}${recipe.image}.jpg`} alt="recipe"></img>
      <p>{recipe.title}</p>
    </div>
  );
};

export default RecipeCard;
