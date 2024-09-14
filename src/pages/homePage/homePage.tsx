import { useContext, useState } from "react";
import Input from "../../components/input";
import RecipeCard from "../../components/recipeCard";
import useRecipe from "../../hooks/useRecipes";
import UserContext from "../../context/userContext";

const HomePage = () => {
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const { isLoading, recipes } = useRecipe();
  const { user } = useContext(UserContext);
  if (isLoading) {
    return null;
  }

  return (
    <div>
      <p>{`Bem vindo, ${user.name}`}</p>
      <h1>Encontre as melhores receitas</h1>
      <Input
        setValue={setSearchRecipe}
        value={searchRecipe}
        type="text"
        placeholder="Search recipes"
      />
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
    </div>
  );
};

export default HomePage;
