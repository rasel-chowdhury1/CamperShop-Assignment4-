import  { useState } from "react";
import { ImPlus } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import NavTitle from "./NavTitle";
import { toggleCategory } from "../../../../redux/features/chowdhuy/chowdhurySlice";
import { RootState } from "../../../../redux/store";


interface CategoryItem {
  _id: number;
  title: string;
}

interface CategoryProps {
  icons: boolean; // Define the icons prop
}

const Category = ({icons} : CategoryProps) => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);

  const checkedCategorys = useSelector(
    (state: RootState) => state.chowdhuryReducer.checkedCategorys
  );
  const dispatch = useDispatch();

  const category = [
    {
      _id: 9006,
      title: "Imprimante",
    },
    {
      _id: 9007,
      title: "Encre",
    },
    {
      _id: 9008,
      title: "Ruban",
    },
    {
      _id: 9009,
      title: "Bac de dechet"
    },
  ];

  const handleToggleCategory = (category: CategoryItem) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {category.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={String(item._id)}
                checked={checkedCategorys.some((b) => b._id === item._id)}
                onChange={() => handleToggleCategory(item)}
              />
              {item.title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
