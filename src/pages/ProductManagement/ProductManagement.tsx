import { Link, useNavigate } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { paginationItems } from "../../constants";
import Swal from "sweetalert2";
import { TProduct } from "../../types/product.type";
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";


const ProductManagement = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  const handleOpenModal = (car: any) => {
    setSelectedProduct(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleProductDetails = (data: TProduct) => {
    const _id = data.productName;
    const productItem = data;
  const idString = (_id: string) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

  const handleDeleteProduct = async ( productName: string) => {
    Swal.fire({
        title: "Are you sure?",
      text: `You want to delete your product ${productName}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your product is deleted!!!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/")
            } catch (error) {
                // console.log({error})
            }
        }
    });
}
    return (
        <>
  {/* Heading */}
  <h1
    data-aos="fade-up"
    className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center"
  >
    Manage Products
  </h1>
  <p
    data-aos="fade-up"
    aos-delay="400"
    className="text-sm pb-10 text-center"
  >
    Manage product data, create, update, or delete specific products. Just click a button!
  </p>

  <div className="overflow-x-auto shadow-xl rounded w-full m-4">
    {/* Add New Product Button */}
    <div className="my-4 text-right">
      <Link to="/create-product" className="btn bg-blue-500 text-white py-2 px-4 rounded-md">
        Add New Product
      </Link>
    </div>
    <table className="table-auto w-full text-left">
      {/* Table Head */}
      <thead className="text-xl bg-gray-100">
        <tr>
          <th className="p-4">
            <input type="checkbox" className="checkbox" />
          </th>
          <th className="p-4">Product Details</th>
          <th className="p-4">Color</th>
          <th className="p-4">Price</th>
          <th className="p-4">Actions</th>
        </tr>
      </thead>

      <tbody>
        {paginationItems &&
          (paginationItems || []).map((item: any) => (
            <tr key={item._id} className="border-b">
              <td className="p-4">
                <input type="checkbox" className="checkbox" />
              </td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12">
                    <img
                      className="object-cover rounded-full"
                      src={item?.img}
                      alt={item?.productName}
                    />
                  </div>
                  <div>
                    <div className="font-bold">{item?.productName}</div>
                    <div className="text-sm opacity-50">{item?.brand}</div>
                  </div>
                </div>
              </td>
              <td className="p-4 font-bold">{item?.color}</td>
              <td className="p-4 text-center font-semibold">
                {item?.price}
              </td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <button 
                     onClick={() => handleProductDetails(item)}
                     className="text-blue-500 hover:text-blue-700">
                      <BiDetail className="text-2xl" />
                  </button>
                  <button
                    className="text-yellow-500 hover:text-yellow-700"
                    onClick={() => handleOpenModal(item)}
                  >
                    <FaRegEdit className="text-xl" />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteProduct(item.productName)}
                  >
                    <MdDeleteForever className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
    
    

    {/* Modal */}
    {isModalOpen && selectedProduct && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
          <UpdateProduct
            previewsData={selectedProduct}
            onClose={handleCloseModal}
          />
          <button
            className="btn mt-4 bg-gray-400 text-white py-2 px-4 rounded-md"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
</>

    );
};

export default ProductManagement;