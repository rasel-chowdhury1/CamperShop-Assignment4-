import { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { useParams } from "react-router-dom";
import { SplOfferData } from "../../../constants";
type ProductType = {
  _id: string;
  img: string;
  productName: string;
  price: string;
  color: string;
  badge: boolean;
  des: string;
  cat: string;
};
const SpecialOffers = () => {
  const { category } = useParams();

  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    setData(SplOfferData);
  }, [data]);

  const catData = data.filter((item) => item.cat === category);
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-3 gap-10">
        {catData.map((data) => (
          <Product
            key={data._id}
            _id={data._id}
            img={data.img}
            productName={data.productName}
            price={data.price}
            color={data.color}
            badge={true}
            des={data.des}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
