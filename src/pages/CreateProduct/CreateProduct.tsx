import axios, { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setLoading, setError } from "../../redux/features/chowdhuy/chowdhurySlice";

const img_hosting_token = "622e0d92c5c1dfc5ba8cf9cab3a6e860";
type FicheTech = {
  label: string;
  value: string;
};
interface ProductFormData {
  _id: string;
  img: FileList; // for image uploads
  productName: string;
  price: string;
  color: string;
  badge: boolean;
  brand: string;
  des: string;
  cat: string;
  pdf: FileList; // for PDF uploads
  ficheTech: FicheTech[]; // dynamic fields for technical data
}

const CreateProduct = () => {
  const CREATE_PRODUCT_URL = "http://localhost:5000/api/products/create-product";
  const dispatch = useDispatch()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<ProductFormData>();
    const [loadings, setLoadings] = useState<boolean>(false);
    const [uploadError, setUploadError] = useState<string | null>(null);
    

    
    const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
      console.log(data);
      
      dispatch(setLoading(true));
      try {
         await axios.post(CREATE_PRODUCT_URL, data);
        
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset()
      } catch (error) {
         // Narrowing the type of error
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data?.message || error.message;
      dispatch(setError(errorMessage));
      Swal.fire({
        icon: "error",
        title: "Error creating product",
        text: errorMessage,
      });
    } else {
      // Fallback for unknown error types
      const errorMessage = (error as Error).message || "Unknown error occurred";
      dispatch(setError(errorMessage));
      Swal.fire({
        icon: "error",
        title: "Error creating product",
        text: errorMessage,
      });
    }
      } finally {
        dispatch(setLoading(false));
        
      }
    };
  
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
  
      const formData = new FormData();
      formData.append('image', file);
  
      setLoadings(true);
      setUploadError(null);
  
      try {
        const response = await axios.post(img_hosting_url, formData);
        const imageUrl = response.data.data.url;
        setValue('img', imageUrl);  // Set the image URL in the form state
      } catch (error) {
        setUploadError('Failed to upload image. Please try again.');
      } finally {
        setLoadings(false);
      }
    };

    return (
        <div className='container mx-auto'>
        <div className="bg-gray-100 p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Add New Product</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 max-w-xl mx-auto space-y-6">
  <div className="space-y-2">
    <label htmlFor="productName" className="block text-sm font-medium">
      Product Name
    </label>
    <input
      {...register("productName", { required: "Product Name is required" })}
      id="productName"
      className="input input-bordered rounded-md w-full border-yellow-300 focus:border-blue-500 focus:ring-blue-500"
    />
    {errors.productName && <span className="text-red-500">{errors.productName.message}</span>}
  </div>

  <div className="space-y-2">
    <label htmlFor="price" className="block text-sm font-medium">
      Price
    </label>
    <input
      {...register("price", { required: "Price is required" })}
      id="price"
      type="text"
      className="input input-bordered rounded-md w-full"
    />
    {errors.price && <span className="text-red-500">{errors.price.message}</span>}
  </div>

  <div className="space-y-2">
    <label htmlFor="color" className="block text-sm font-medium">
      Color
    </label>
    <input
      {...register("color", { required: "Color is required" })}
      id="color"
      className="input input-bordered rounded-md w-full"
    />
    {errors.color && <span className="text-red-500">{errors.color.message}</span>}
  </div>

  <div className="space-y-2">
    <label htmlFor="brand" className="block text-sm font-medium">
      Brand
    </label>
    <input
      {...register("brand", { required: "Brand is required" })}
      id="brand"
      className="input input-bordered rounded-md w-full"
    />
    {errors.brand && <span className="text-red-500">{errors.brand.message}</span>}
  </div>

  <div className="space-y-2">
    <label htmlFor="badge" className="block text-sm font-medium">
      Badge
    </label>
    <input
      type="checkbox"
      {...register("badge")}
      id="badge"
      className="toggle toggle-primary"
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="img" className="block text-sm font-medium">
      Product Image
    </label>
    <input
      id="img"
      type="file"
      onChange={handleFileChange}
      className="file-input file-input-bordered rounded-md w-full"
    />
    {loadings && <p>Uploading...</p>}
    {uploadError && <p className="text-red-400">{uploadError}</p>}
  </div>

  <div className="space-y-2">
    <label htmlFor="des" className="block text-sm font-medium">
      Description
    </label>
    <textarea
      {...register("des", { required: "Description is required" })}
      id="des"
      className="textarea textarea-bordered rounded-md w-full"
    ></textarea>
    {errors.des && <span className="text-red-500">{errors.des.message}</span>}
  </div>

  <div className="space-y-2">
    <label htmlFor="cat" className="block text-sm font-medium">
      Category
    </label>
    <input
      {...register("cat", { required: "Category is required" })}
      id="cat"
      className="input input-bordered rounded-md w-full"
    />
    {errors.cat && <span className="text-red-500">{errors.cat.message}</span>}
  </div>

  <button type="submit" className="btn btn-accent bg-green-400 my-2 w-full">
    Submit Product
  </button>
</form>


    </div>
        </div>
    );
};

export default CreateProduct;



