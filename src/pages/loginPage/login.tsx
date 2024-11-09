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
        className="input-field"
      />
      <Input
        type="password"
        placeholder="Senha"
        setValue={setPassword}
        value={password}
        className="input-field"
      />
      <a href="/register">Do Register</a>
      <Button title="Login" onClick={handleLogin} className="button" />
    </div>
  );
};

export default LoginPage;
