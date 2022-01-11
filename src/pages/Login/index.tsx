import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../providers/Auth";

import { Layout } from "../../styles/layout";
import Input from "../../components/Input";
import Container from "./styles";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { signIn } = useAuth();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("o email é obrigatório")
      .email("insira um email válido"),

    password: yup.string().required("a senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: UserData) => {
    signIn(data);
  };

  return (
    <Layout>
      <Container>
        <h1>Sign In 🦣</h1>
        <p>the winter is comming...</p>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="email"
            label="Email"
            placeholder="jhonsnow@mail.com"
            error={errors.email?.message}
            register={register}
          />
          <Input
            name="password"
            type={"password"}
            label="Senha"
            placeholder="******"
            error={errors.password?.message}
            register={register}
          />
          <button type="submit">login</button>
        </form>
      </Container>
    </Layout>
  );
};

export default Login;
