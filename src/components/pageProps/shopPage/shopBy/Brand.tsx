import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/features/chowdhuy/chowdhurySlice";
import NavTitle from "./NavTitle";
import { RootState } from "../../../../redux/store";

interface Brand {
  _id: string; // Ensure IDs are strings
  title: string;
}

const Brand = () => {
  const [showBrands, setShowBrands] = useState(true);
  const checkedBrands = useSelector(
    (state: RootState) => state.chowdhuryReducer.checkedBrands
  );

  const dispatch = useDispatch();

  const brands: Brand[] = [
    { _id: "900", title: "Pantum" }, // Ensure IDs are strings
    { _id: "901", title: "Hp" },
    { _id: "902", title: "Epson" },
    { _id: "903", title: "Ricoh" },
  ];

  const handleToggleBrand = (brand: Brand) => {
    dispatch(toggleBrand(brand));
  };

  return (
    <div>
      <div onClick={() => setShowBrands(!showBrands)} className="cursor-pointer">
        <NavTitle title="Shop by Brand" icons={true} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brands.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input
                  type="checkbox"
                  id={item._id} // Use string as ID
                  checked={checkedBrands.some((b) => String(b._id) === item._id)} // Compare both as strings
                  onChange={() => handleToggleBrand(item)}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
