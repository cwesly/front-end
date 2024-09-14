interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ value, setValue, ...props }: InputProps) => {
  return (
    <input
      {...props}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};

export default Input;
