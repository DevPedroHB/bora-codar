import loginLogoImg from "@/assets/images/login-logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DontHaveAccount,
  FormButton,
  FormContainer,
  FormGroup,
  LoginForm,
  LoginTitle,
} from "./styles";

const LoginFormSchema = z.object({
  email: z.string().email("Por favor, forneça um email válido."),
  password: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres.")
    .regex(/^[^\s]+$/, "A senha não pode conter espaços em branco.")
    .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "A senha deve conter pelo menos um caractere especial."
    )
    .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
    .regex(/[0-9]/, "A senha deve conter pelo menos um número."),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

export function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  function handleLogin(data: LoginFormData) {
    alert(`E-mail: ${data.email}\nSenha: ${data.password}`);

    reset();
  }

  return (
    <FormContainer>
      <Image src={loginLogoImg} alt="Logotipo vertigo" />
      <LoginTitle>
        <h2>Acesse a plataforma</h2>
        <p>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>
      </LoginTitle>
      <LoginForm onSubmit={handleSubmit(handleLogin)}>
        <FormGroup error={errors.email ? true : false}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </FormGroup>
        <FormGroup password error={errors.password ? true : false}>
          <label htmlFor="password">
            Senha
            <Link href="/challenge-11">Esqueceu a senha?</Link>
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            {...register("password")}
          />
          {showPassword ? (
            <Eye
              size={20}
              color="#94A3B8"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <EyeSlash
              size={20}
              color="#94A3B8"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
          {errors.password && <small>{errors.password.message}</small>}
        </FormGroup>
        <FormButton disabled={isSubmitting}>Entrar</FormButton>
      </LoginForm>
      <DontHaveAccount>
        Ainda não tem uma conta? <Link href="/challenge-11">Inscreva-se</Link>
      </DontHaveAccount>
    </FormContainer>
  );
}
