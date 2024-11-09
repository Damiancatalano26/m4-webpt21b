"use client";
import { AuthContext } from "@/contexts/authContext";
import { validateEmail, validatePassword } from "@/helpers/validation";
import { login } from "@/service/auth";
import { useRouter } from "next/navigation";
import {Toaster, toast} from "sonner"
import { ChangeEvent, useContext, useEffect, useState } from "react";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);
  

  const router = useRouter();
  const initialData = { email: "", password: "" };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(data);
    if (res.statusCode) {
      toast.error(res.message);
    } else {
      toast.success("Inicio de sesión exitoso");
      setUser(res)
      router.push("/");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const canSubmit = () => {
    return !validateEmail(data.email) && !validatePassword(data.password);
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    });
  }, [data]);

  return (
    <div>
    <Toaster position="top-center" richColors  />
    <form
      action="#"
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={data.email}
            onBlur={(e) => handleBlur(e)}
          />
          {touched.email && <p className="text-red-500">{errors.email}</p>}

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={data.password}
            onBlur={(e) => handleBlur(e)}
          />
          {touched.password && (
            <p className="text-red-500">{errors.password}</p>
          )}

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          ¿No tienes cuenta?
          <a className="underline" href="/register">
            {" "}
            Regístrate
          </a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white disabled:text-gray-500"
          disabled={!canSubmit()}
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
  );
};

export default LoginForm;
