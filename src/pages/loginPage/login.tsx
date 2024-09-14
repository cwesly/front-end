import Button from "../../components/button";
import Input from "../../components/input";
import useUser from "../../hooks/useUser";

const LoginPage = () => {
  const { email, setEmail, password, setPassword, handleLogin } = useUser();
  return (
    <div>
      <h2>Login</h2>
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
      <Button title="Login" onClick={handleLogin} />
    </div>
  );
};

export default LoginPage;
