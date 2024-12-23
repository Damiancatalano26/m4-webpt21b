import Card from "../components/Card/Card";
import CardList from "@/components/CardList/CardList";
import Hero from "@/components/Hero/Hero";
import { getFeaturedProducts } from "@/service/products";

const page = async () => {
  const products = await getFeaturedProducts()
  return (
    <>
      <Hero/>
      <CardList>
        {products.map((product, i) => (
          <Card key={i} {...product} />
        ))}
      </CardList>
    </>
  );
};
export default page;
