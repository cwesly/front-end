import { useParams } from "react-router-dom";
import useRecipeDetails from "../../hooks/useRecipeDetails";
import { BASE_IMAGE_URL } from "../../constants";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipe } = useRecipeDetails(id ? parseInt(id, 10) : 0);
  const { title, image, ingredients, instructions } = recipe;

  return (
    <div>
      <h1>{title}</h1>
      <img src={`${BASE_IMAGE_URL}${image}.jpg`} alt="recipe image" />
      <h2>Ingredients</h2>
      {ingredients.map((ingredient) => {
        return (
          <ul key={ingredient.ID}>
            <li>{`=> ${ingredient.name.replace("", "")}`}</li>
          </ul>
        );
      })}
      <h2>Instructions</h2>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipeDetails;
