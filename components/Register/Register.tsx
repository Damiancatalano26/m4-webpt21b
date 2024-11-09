"use client";
import {
  validateEmail,
  validatePassword,
  validateName,
  validateAddress,
  validatePhone,
} from "@/helpers/validation";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/service/auth";
import { Toaster, toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();
  const initialData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    name: false,
    address: false,
    phone: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await register(data);
    if (res.statusCode) {
      toast.error(res.message); // Muestra mensaje de error
    } else {
      toast.success("Registro exitoso"); // Muestra mensaje de éxito
      router.push("/login");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const canSubmit = () => {
    return (
      !validateEmail(data.email) &&
      !validatePassword(data.password) &&
      !validateName(data.name) &&
      !validateAddress(data.address) &&
      !validatePhone(data.phone)
    );
  };

  useEffect(() => {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password),
      name: validateName(data.name),
      address: validateAddress(data.address),
      phone: validatePhone(data.phone),
    });
  }, [data]);

  return (
    <div>
      <Toaster position="top-center" /> {/* Componente Toaster para las notificaciones */}
      <form
        action="#"
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={data.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
          />
          {touched.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={data.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
          />
          {touched.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="address" className="sr-only">
            Dirección
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={data.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
          />
          {touched.address && <p className="text-red-500">{errors.address}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Telefono
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={data.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
          />
          {touched.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={data.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full rounded-lg border-gray-900 p-4 pe-12 text-sm shadow-xl"
          />
          {touched.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white disabled:text-gray-500"
          disabled={!canSubmit()}
        >
          Registro
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
