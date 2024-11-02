import { createContext } from "react";
import { IRecipe } from "../types/types";

type FavoritesContextType = {
  favorites: IRecipe[];
  setFavorites: React.Dispatch<React.SetStateAction<IRecipe[]>>;
};

const FavoritesContext = createContext({} as FavoritesContextType);

export default FavoritesContext;
