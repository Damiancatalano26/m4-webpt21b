/*
import { Product } from "@/app/interfaces";
import { productsMock } from "@/app/mocks/products";
const ffProductsMock = process.env.FF_PRODUCTS_MOCK || false;
const appiUrl = process.env.APPI_URL || "http://localhost:3001"

export const getProducts = async (): Promise<Product[]> => {
  let isFetchFailing = false;

  const res = await fetch(appiUrl+"/products", {
    cache: "no-store",
  }).then((res) => res.json())
  .catch(() => (isFetchFailing = true));

  if (isFetchFailing && ffProductsMock) {
    return productsMock;
  }

  return res;
};

export const getFeaturedProducts = async(): Promise<Product[]> => {
    const res = await getProducts();
    const featured = res.slice(0,3)
    return featured
}

export const getProductById = async(id:number): Promise<Product> => {
    const res = await getProducts();
    const product = res.filter((p) => p.id === id)[0];
    return product
}*/

import { Product } from "@/app/interfaces";
import { productsMock } from "@/app/mocks/products";

const ffProductsMock = process.env.FF_PRODUCTS_MOCK || false;
const appiUrl = process.env.APPI_URL || "http://localhost:3001";

export const getProducts = async (): Promise<Product[]> => {
  let isFetchFailing = false;

  const res = await fetch(appiUrl + "/products", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch(() => (isFetchFailing = true));

  // Si la solicitud falla y `ffProductsMock` es verdadero, devolvemos los productos simulados
  if (isFetchFailing && ffProductsMock) {
    return productsMock;
  }

  // Aseguramos que `res` siempre sea un array para evitar errores en `slice` y `filter`
  return Array.isArray(res) ? res : [];
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const res = await getProducts();
  // Aseguramos que `res` es un array y usamos `slice` solo si es así
  return Array.isArray(res) ? res.slice(0, 3) : [];
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  const res = await getProducts();
  // Aseguramos que `res` es un array y usamos `find` para buscar el producto por ID
  return Array.isArray(res) ? res.find((p) => p.id === id) : undefined;
};
