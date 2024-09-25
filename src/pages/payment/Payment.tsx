import { SubmitHandler, useForm } from "react-hook-form";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/features/chowdhuy/chowdhurySlice";

interface PaymentFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentProcess?: boolean; // optional, as it's a checkbox
}

const Payment = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>();

  const onSubmit: SubmitHandler<PaymentFormInputs> = (data) => {
    console.log(data);
    // Handle form submission (e.g., place order)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your order successfully confirmed!!!",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(resetCart())
    navigate("/")
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Checkout</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8 border p-5 rounded">
              <h3 className="text-xl font-semibold mb-4">User Information</h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={`mt-1 block w-full p-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                        message: "Email is not valid",
                      },
                    })}
                    className={`mt-1 block w-full p-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Phone
                  </label>
                  <input
                    type="text"
                    {...register("phone", { required: "Phone number is required" })}
                    className={`mt-1 block w-full p-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Address
                  </label>
                  <input
                    type="text"
                    {...register("address", { required: "Address is required" })}
                    className={`mt-1 block w-full p-2 border ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    } rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500`}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-sm">{errors.address.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left">
                    Cash On Delivery
                  </label>
                  <input
                    type="checkbox"
                    {...register("paymentProcess", { required: "CashOnDelivery is required" })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.paymentProcess && (
                    <span className="text-red-500 text-sm">{errors.paymentProcess.message}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Uncomment and adjust this section based on your need for Order Summary */}
            {/* <div className="mb-8"> ... </div> */}

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
