import Button from "../../components/button";
import Input from "../../components/input";
import useUser from "../../hooks/useUser";
import "./login.css";

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useUser();
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <Input
        type="email"
        placeholder="Email"
        setValue={setEmail}
        value={email}
      />
      <Input
        type="password"
        placeholder="Senha"
        setValue={setPassword}
        value={password}
      />
      <a href="/register">Registre-se</a>
      <Button title="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginPage;
