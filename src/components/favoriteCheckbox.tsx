interface FavoriteCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FavoriteCheckbox = ({
  checked,
  setChecked,
  ...props
}: FavoriteCheckboxProps) => {
  return (
    <input
      {...props}
      type="checkbox"
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
      }}
    />
  );
};

export default FavoriteCheckbox;
