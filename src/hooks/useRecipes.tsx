import { useEffect, useState } from "react";
import { IRecipe } from "../types/types";
import { BASE_URL } from "../constants";
import axios from "axios";

const useRecipe = (page: number) => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipe = async () => {
      const baseGetUrl = `${BASE_URL}/recipes/page/${page}`;
      setIsLoading(true);
      try {
        const response = await axios.get(baseGetUrl);
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes", error);
      }
      setIsLoading(false);
    };
    getRecipe();
  }, [page]);

  return { recipes, isLoading };
};

export default useRecipe;
