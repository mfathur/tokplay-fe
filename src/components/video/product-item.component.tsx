import Product from "types/product";
import { convertToRupiahOn } from "utils/formatter";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { name, imgUrl, rating, soldAmount, price, discount, link } = product;

  const discountedPrice = ((100 - discount) / 100) * price;

  const handleProductClick = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <div
      onClick={handleProductClick}
      className="w-44 bg-nobleblack hover:bg-gray-900 shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all"
    >
      <img className="w-full h-36" src={imgUrl} alt={name} />
      <div className="m-2 ">
        <p className="text-white text-xs">{name}</p>
        <p className="my-1 font-bold text-white text-sm">
          <span className="text-gray-600 line-through text-xs">
            {price !== discountedPrice ? convertToRupiahOn(price) : ""}
          </span>{" "}
          {convertToRupiahOn(discountedPrice)}
        </p>
        <p className="text-xs">
          {rating} | Sold {soldAmount}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
