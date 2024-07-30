"use client";

import React from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { InputField } from "../input";
import { ButtonForm } from "../button";

interface FormValues {
  email: string;
  password: string;
}

export const FormAuth: React.FC = () => {
  const methods = useForm<FormValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Mock do usuário
    const mockUser = {
      email: "teste@gmail.com",
      password: "123456",
    };

    if (data.email === mockUser.email && data.password === mockUser.password) {
      router.push("/");
    } else {
      console.error("Invalid credentials");
    }
  };

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="seuemail@email.com"
            validation={{
              required: "Email é obrigatório",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email inválido",
              },
            }}
          />
          <InputField
            name="password"
            label="Senha"
            type="password"
            placeholder="sua senha"
            validation={{ required: "Senha é obrigatória" }}
          />
          <a
            href="#"
            className="text-[--app-gray-900] underline text-[16px] w-full text-end"
          >
            Esqueceu a senha?
          </a>
          <ButtonForm />
        </form>
      </FormProvider>
    </div>
  );
};
