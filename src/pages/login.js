import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import {
  Main,
  FormContainer,
  Form,
  Input,
  Button,
  Head,
  Para,
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

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("https://reqres.in/api/login", {
        // email: data.email,
        // password: data.password,
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then(function (response) {
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const onSubmit = (data) => console.log(data);
  return (
    <Main>
      <FormContainer>
        <Head>Login your account</Head>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" {...register("email")} placeholder="Email" />
          <Para>{errors.email?.message}</Para>
          <Input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          <Para>{errors.password?.message}</Para>
          <Button type="submit">Login</Button>
        </Form>
      </FormContainer>
    </Main>
  );
};

export default Login;
