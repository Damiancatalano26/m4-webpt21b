import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById } from "@/service/products";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
};

export default page;
