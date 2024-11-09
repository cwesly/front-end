import { useContext, useEffect, useState } from "react";
import Input from "../../components/input";
import RecipeCard from "../../components/recipeCard";
import useRecipe from "../../hooks/useRecipes";
import useRecipeSearch from "../../hooks/useRecipeSearch";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

const HomePage = () => {
  const [searchRecipe, setSearchRecipe] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
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

  const { isLoading: isRecipesLoading, recipes } = useRecipe(currentPage);
  const {
    isLoading: isSearchLoading,
    recipes: searchResults,
    error: searchError,
  } = useRecipeSearch(searchRecipe, currentPage);

  if (isRecipesLoading && searchRecipe === "") {
    return null;
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const displayedRecipes = searchRecipe.length > 0 ? searchResults : recipes;

  return (
    <div className="container">
      <p className="welcome-text">{`Bem vindo, ${user.name}`}</p>
      <h1 className="header">Encontre as melhores receitas</h1>
      <a href="/favorites" className="favorite-link">
        Ver Favoritos
      </a>
      <Input
        setValue={setSearchRecipe}
        value={searchRecipe}
        type="text"
        placeholder="Search recipes"
        className="input-field"
      />
      {isSearchLoading && <p>Carregando...</p>}
      {searchError && <p>{searchError}</p>}
      <ul className="recipe-list">
        {displayedRecipes.map((recipe) => (
          <RecipeCard key={recipe.ID} recipe={recipe} />
        ))}
      </ul>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="pagination-text">Página {currentPage}</span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={displayedRecipes.length === 0}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default HomePage;
