import React from "react";
import ProductItem from "./product-item.component";

type Props = {};

const ProductsSection = (props: Props) => {
  return (
    <div className="flex mt-4 gap-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductsSection;
