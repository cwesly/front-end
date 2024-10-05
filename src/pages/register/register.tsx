import Input from "../../components/input";
import Button from "../../components/button";
import useUser from "../../hooks/useUser";
import "./register.css";

const Register = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  } = useUser();

  return (
    <div className="registerForm">
      <h1>Register</h1>
      <Input placeholder="Name" type="text" setValue={setName} value={name} />
      <Input
        placeholder="Email"
        type="email"
        setValue={setEmail}
        value={email}
      />
      <Input
        type="password"
        placeholder="Senha"
        setValue={setPassword}
        value={password}
      />
      <Button title="Register" onClick={handleSubmit} />
    </div>
  );
};
export default Register;
