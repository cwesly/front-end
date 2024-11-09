import { useState, useEffect } from "react";
import axios from "axios";
import { IRecipe } from "../types/types";
import { BASE_URL } from "../constants";

const useRecipeSearch = (query: string, page: number) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      const fetchRecipes = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/recipes/search?query=${query}&page=${page}`
          );
          setRecipes(response.data.recipes);
        } catch (err) {
          setError("Erro ao buscar receitas");
          console.error("Error fetching recipes", err);
        }
        setIsLoading(false);
      };

      fetchRecipes();
    } else {
      setRecipes([]);
      setError(null);
    }
  }, [query, page]);

  return { recipes, isLoading, error };
};

export default useRecipeSearch;
