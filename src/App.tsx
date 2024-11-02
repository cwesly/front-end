import { RouterProvider } from "react-router-dom";
import UserContext from "./context/userContext";
import router from "./routes/routes";
import { useState } from "react";
import { User } from "./types/types";
import FavoriteProvider from "./context/favoriteProvider";

function App() {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    token: "",
  });
  const initialState = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={initialState}>
      <FavoriteProvider>
        <RouterProvider router={router} />
      </FavoriteProvider>
    </UserContext.Provider>
  );
}

export default App;
