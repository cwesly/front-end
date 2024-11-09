import { useParams } from "react-router-dom";
import useRecipeDetails from "../../hooks/useRecipeDetails";
import { BASE_IMAGE_URL } from "../../constants";
import "./recipeDetailsPage.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipe } = useRecipeDetails(id ? parseInt(id, 10) : 0);
  const { title, image, ingredients, instructions } = recipe;

  return (
    <div className="container">
      <h1 className="header">{title}</h1>
      <img
        className="recipe-image"
        src={`${BASE_IMAGE_URL}${image}.jpg`}
        alt="recipe image"
      />
      <h2 className="subheader">Ingredients</h2>
      <div className="ingredients-list">
        {ingredients.map((ingredient) => (
          <ul key={ingredient.ID}>
            <li>{`=> ${ingredient.name}`}</li>
          </ul>
        ))}
      </div>
      <h2 className="subheader">Instructions</h2>
      <p className="instructions">{instructions}</p>
    </div>
  );
};

export default RecipeDetails;
