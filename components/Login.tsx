import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../api/firebaseConfig";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const token = await user.getIdToken();

      console.log("ID Token:", token);

      toast.success("Login successful!");
      localStorage.setItem("acces", "true");
      window.location.reload();
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <>
      <form
        className="mt-10 justify-center items-center flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-sm text-white text-center mb-4">
          We love having you back
        </p>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
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
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-3 w-full mt-6 justify-center flex">
          <button
            type="submit"
            className="mb-1.5 w-[200px] text-center text-white bg-[#f0b908] px-2 py-1.5 rounded-md"
          >
            Continue
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
