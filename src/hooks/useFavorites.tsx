import axios from "axios";
import { BASE_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../context/userContext";
import FavoritesContext from "../context/favoritesContext";

const useFavorite = () => {
  const { user } = useContext(UserContext);
  const { setFavorites } = useContext(FavoritesContext);

  const config = {
    headers: { Authorization: `${user.token}` },
  };

  const addFavorite = async (id: number) => {
    const favoriteEndPoint = `${BASE_URL}/favorites/${id}`;
    try {
      await axios.post(favoriteEndPoint, {}, config);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFavorite = async (id: number) => {
    const favoriteEndPoint = `${BASE_URL}/favorites/${id}`;
    try {
      await axios.delete(favoriteEndPoint, config);
    } catch (error) {
      console.error(error);
    }
  };

  const getFavorites = async (token?: string) => {
    const getConfig = user.token
      ? config
      : {
          headers: { Authorization: `${token}` },
        };
    const favoriteEndPoint = `${BASE_URL}/favorites`;
    try {
      const response = await axios.get(favoriteEndPoint, getConfig);
      setFavorites(response.data.favorites);
    } catch (error) {
      console.error(error);
    }
  };

  return { addFavorite, removeFavorite, getFavorites };
};

export default useFavorite;
