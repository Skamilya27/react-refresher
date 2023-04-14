import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

export const Form = () => {
  
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is required!"),
    email: yup.string().email().required("Please enter your email"),
    age: yup.number().positive().integer().min(18).required("Enter a number"),
    password: yup.string().min(5).max(16).required("Enter your password here..."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Dont Match")
      .required(),
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        margin: "50px",
        gap: "3px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="email" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
