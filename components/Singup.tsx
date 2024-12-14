import client from "@/api/request";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  email: string;
  password: string;
}

export default function Singup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.password) {
      if (data.password.length < 6) {
        toast.error("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
    }
    try {
      const response = await client.post(`usuarios/crear`, data);
      if (response.status === 200) {
        toast.success("Usuario creado correctamente 🎉");
        reset();
      }
    } catch (error) {
      toast.error("Error al enviar los datos del formulario 😢");
      console.error("Error al enviar los datos del formulario:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 justify-center items-center flex flex-col"
      >
        <p className="text-sm text-white text-center mb-4">
          Please register by filling in all the fields
        </p>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-3 w-full mt-6 justify-center flex">
          <button className="mb-1.5 w-[200px] text-center text-white bg-[#f0b908] px-2 py-1.5 rounded-md">
            Register
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
