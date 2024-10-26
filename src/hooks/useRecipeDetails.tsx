import { useEffect, useState } from "react";
import { IRecipe } from "../types/types";
import axios from "axios";
import { BASE_URL } from "../constants";

const useRecipeDetails = (id: number) => {
  const initialRecipe: IRecipe = {
    ID: 0,
    title: "",
    instructions: "",
    ingredients: [],
    image: "",
  };

  const [recipe, setRecipe] = useState<IRecipe>(initialRecipe);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await axios.get(`${BASE_URL}/recipes/${id}`);
      setRecipe(response.data.recipe);
      setIsLoading(false);
    };
    getRecipeDetails();
  }, [id]);
  return { recipe, isLoading };
};

export default useRecipeDetails;
