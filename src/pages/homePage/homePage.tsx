import { useEffect, useState } from "react";
import Input from "../../components/input";
import axios from "axios";
import { IRecipe } from "../../types/types";
import RecipeCard from "../../components/recipeCard";

const HomePage = () => {
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getRecipe = async () => {
      const baseGetUrl = "http://localhost:3001/recipes/page/1";
      setIsLoading(true);
      const response = await axios.get(baseGetUrl);
      setRecipes(response.data.recipes);
      setIsLoading(false);
    };
    getRecipe();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
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
