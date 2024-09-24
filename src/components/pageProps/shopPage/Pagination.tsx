import  { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { RootState } from "../../../redux/store";

type Item = {
  _id: string;
  img: string;
  productName: string;
  price: string;
  color: string;
  badge: boolean;
  des: string;
  pdf?: string;  // Optional field
  ficheTech?: { label: string; value: string; }[]; // Optional field
  brand?: string;  // Optional field to allow for undefined values
  cat?: string;    // Optional field to match possible missing data
};


const items: Item[] = paginationItems; // Specify type for items
console.log({ items });

type ItemsProps = {
  currentItems: Item[];
  selectedBrands: { title: string }[];
  selectedCategories: { title: string }[];
};

function Items({ currentItems, selectedBrands, selectedCategories }: ItemsProps) {
  console.log({currentItems, selectedBrands, selectedCategories})
  // Filter items based on selected brands and categories
  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => category.title === item.cat);
    

    return isBrandSelected && isCategorySelected;
  });

  console.log({filteredItems})

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item._id}
            img={item.img}
            productName={item.productName}
            price={item.price}
            color={item.color}
            badge={item.badge}
            des={item.des}
            pdf={item.pdf}
            ficheTech={item.ficheTech}
          />
        </div>
      ))}
    </>
  );
}

type PaginationProps = {
  itemsPerPage: number;
};

const Pagination = ({ itemsPerPage } : PaginationProps) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  console.log({itemOffset, endOffset})
  const currentItems = items.slice(itemOffset, endOffset);
  console.log({currentItems})
  const selectedBrands = useSelector(
    (state: RootState) => state.chowdhuryReducer.checkedBrands
  );
  const selectedCategories = useSelector(
    (state : RootState) => state.chowdhuryReducer.checkedCategorys
  );
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const newStart = newOffset + 1; // Adjust the start index

    setItemOffset(newOffset);
    setItemStart(newStart);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items
          currentItems={currentItems}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
        />{" "}
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Products from {itemStart} to {Math.min(endOffset, items.length)} of{" "}
          {items.length}
        </p>
        <button onClick={() => console.log(selectedBrands)}> test</button>
      </div>
    </div>
  );
};

export default Pagination;
