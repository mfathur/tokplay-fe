type Props = {};

const ProductItem = (props: Props) => {
  return (
    <div className="w-44 bg-nobleblack hover:bg-gray-900 shadow-lg hover:shadow-2xl hover:cursor-pointer transition-all">
      <img
        src="https://amateurphotographer.com/wp-content/uploads/sites/7/2022/10/google-pixel-7pro-photo-joshua-waller-2560-AP-PXL_20221009_134807172.jpg?w=900"
        alt=""
      />
      <div className="m-2">
        <p className="text-white text-xs">Google Pixel</p>
        <p className="my-1 font-bold text-white text-sm">
          <span className="text-gray-600 line-through">Rp 120.000</span> Rp
          100.000
        </p>
        <p className="text-xs">4.7 | Sold 17</p>
      </div>
    </div>
  );
};

export default ProductItem;
