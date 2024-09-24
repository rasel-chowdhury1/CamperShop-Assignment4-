import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type TProductFormInput = {
    _id: string;
    img: string;
    image?: string;
    productName: string;
    price: number;
    quantity?: number;
    color?: string;
    badge?: boolean;
    des: string;
    cat: string;
};

interface UpdateProductProps {
  previewsData: TProductFormInput;
  onClose: () => void;
}

const UpdateProduct= ({ previewsData,onClose }: UpdateProductProps) => {
    const navigate = useNavigate()
    console.log({previewsData})
  
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TProductFormInput>({
    defaultValues: previewsData, // Set default values when the form is initialized
  });

  // Update form values whenever previewsData changes
  useEffect(() => {
    if (previewsData) {
      reset(previewsData); // Reset the form with new default values
    }
  }, [previewsData, reset]);

  const onSubmit: SubmitHandler<TProductFormInput> = async (data) => {

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully updated the product",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      onClose();

      navigate("/")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div>
        <label htmlFor="name" className="label-text font-semibold">
          Car Name*
        </label>
        <input
          id="name"
          type="text"
          className="input input-bordered border-2 rounded-md border-gray-300 w-full my-2"
          {...register("productName", { required: "Car name is required" })}
          defaultValue={previewsData.productName} // Default value for the name field
        />
        {errors.productName && <p className="text-red-400">{errors.productName.message}</p>}
      </div>

      <div>
        <label htmlFor="description" className="label-text font-semibold">
          Description*
        </label>
        <textarea
          id="description"
          className="input input-bordered border-2 rounded-md border-gray-300 w-full my-2"
          {...register("des", { required: "Description is required" })}
          defaultValue={previewsData.des} // Default value for the description field
        />
        {errors.des && (
          <p className="text-red-400">{errors.des.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="color" className="label-text font-semibold">
          Color*
        </label>
        <input
          id="color"
          type="text"
          className="input input-bordered border-2 rounded-md border-gray-300 w-full my-2"
          {...register("color", { required: "Color is required" })}
          defaultValue={previewsData.color} // Default value for the color field
        />
        {errors.color && <p className="text-red-400">{errors.color.message}</p>}
      </div>

      <div>
        <label htmlFor="color" className="label-text font-semibold">
          Price
        </label>
        <input
          id="price"
          type="text"
          className="input input-bordered border-2 rounded-md border-gray-300 w-full my-2"
          {...register("price", { required: "Color is required" })}
          defaultValue={previewsData.color} // Default value for the color field
        />
        {errors.price && <p className="text-red-400">{errors.price.message}</p>}
      </div>

      

      <div className="bg-green-500 hover:bg-green-400 hover:text-white text-black text-center my-4 ">
        <button type="submit" className="py-2">
            Update Car
        </button>
      </div>
    </form>
  );
};

export default UpdateProduct;
