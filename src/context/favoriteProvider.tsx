import { useState } from "react";
import { IRecipe } from "../types/types";
import FavoritesContext from "./favoritesContext";

type FavoriteProviderProps = {
  children: React.ReactNode;
};

const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<IRecipe[]>([]);
  const initialState = { favorites, setFavorites };

  return (
    <FavoritesContext.Provider value={initialState}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoriteProvider;
