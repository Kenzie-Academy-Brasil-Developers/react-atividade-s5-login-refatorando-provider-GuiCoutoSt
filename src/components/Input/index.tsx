import Container from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  placeholder: string;
  register: any;
}

const Input = ({
  name,
  label,
  error,
  placeholder,
  register,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <label>
        {label} {<span className="input__error">{error}</span>}
      </label>{" "}
      <input placeholder={placeholder} {...rest} {...register(name)} />
    </Container>
  );
};

export default Input;
