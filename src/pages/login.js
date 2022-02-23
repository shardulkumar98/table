import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";

import * as yup from "yup";
import {
  Main,
  FormContainer,
  Form,
  Input,
  Button,
  Head,
} from "../styles/pages/login";

const schema = yup
  .object({
    email: yup
      .string()
      .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "enter valid email")
      .required("Email is mandatory"),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Uppercase, Lowecase, Special Character, Numeric"
      )
      .required("Password is mandatory"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let navigate = useNavigate();
  navigate("/dashboard");

  const onSubmit = (data) => console.log(data);
  return (
    <Main>
      <FormContainer>
        <Head>Login your account</Head>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" {...register("email")} placeholder="Email" />
          <p>{errors.email?.message}</p>
          <Input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
    </Main>
  );
};

export default Login;
