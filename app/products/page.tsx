import Card from "@/components/Card/Card";

import CardList from "@/components/CardList/CardList";
import { getProducts } from "@/service/products";

const page = async () => {
  const products = await getProducts();
  return (
    <CardList>
      {products.map((product, i) => (
        <Card key={i} {...product} />
      ))}
    </CardList>
  );
};

export default page;