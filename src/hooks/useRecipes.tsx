import { useEffect, useState } from "react";
import { IRecipe } from "../types/types";
import { BASE_URL } from "../constants";
import axios from "axios";

const useRecipe = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const getRecipe = async () => {
      const baseGetUrl = `${BASE_URL}/recipes/page/1`;
      setIsLoading(true);
      const response = await axios.get(baseGetUrl);
      setRecipes(response.data.recipes);
      setIsLoading(false);
    };
    getRecipe();
  }, []);
  return { recipes, isLoading };
};
export default useRecipe;
