import { RouterProvider } from "react-router-dom";
import UserContext from "./context/userContext";
import router from "./routes/routes";
import { useState } from "react";
import { User } from "./types/types";

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
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
