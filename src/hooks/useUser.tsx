import { useContext, useState } from "react";
import { BASE_URL } from "../constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import { User } from "../types/types";

const useUser = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const data = { email, password };
    const loginUrl = `${BASE_URL}/login`;
    try {
      const response = await axios.post(loginUrl, data);
      setUser(response.data as User);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const data = { name, email, password };
    const baseRoute = `${BASE_URL}/register`;
    try {
      await axios.post(baseRoute, data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    handleLogin,
    handleSubmit,
  };
};

export default useUser;
