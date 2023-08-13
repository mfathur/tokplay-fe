import ProductItem from "./product-item.component";
import Product from "types/product";
import { useAxiosGet } from "hooks/useAxiosGet";

type Props = {
  videoId?: string;
};

const ProductsSection = ({ videoId }: Props) => {
  const { data: products, error } = useAxiosGet<Product[]>("/products", {
    params: { relatedVideoId: videoId },
  });

  return (
    <div className="flex mt-4 gap-4">
      {products && !error
        ? products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))
        : null}
    </div>
  );
};

export default ProductsSection;
