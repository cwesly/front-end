import { useContext, useEffect, useState } from "react";
import Input from "../../components/input";
import RecipeCard from "../../components/recipeCard";
import useRecipe from "../../hooks/useRecipes";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageUser =
      JSON.parse(localStorage.getItem("user") as string) || {};

    if (!user.token && !localStorageUser.token) {
      navigate("/");
    }
    setUser(localStorageUser);
  }, []);

  const { isLoading, recipes } = useRecipe();
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
        <RecipeCard key={recipe.ID} recipe={recipe} />
      ))}
    </div>
  );
};

export default HomePage;
