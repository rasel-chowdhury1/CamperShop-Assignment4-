
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div>
        <div className="mb-8 border p-5 rounded">
          <h3 className="text-xl font-semibold mb-4">User Information</h3>
          
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Cash On Delivery
              </label>
              <input
                type="checkbox"
                name="paymentProcess"
                placeholder="cash on delivery"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        {/* <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  Car
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  StartTime
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  endTime
                </th>
                <th className="text-left py-3 px-4 font-semibold text-sm">
                  PerHour
                </th>
              </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">{car?.name}</td>
                  <td className="py-3 px-4">{startTime}</td>
                  <td className="py-3 px-4">{endTime}</td>
                  <td className="py-3 px-4">{car?.pricePerHour}</td>
                </tr>

            </tbody>
          </table>

          <p className="mt-8"><span className="font-semibold text-lg">TotalCost :</span> {totalCost!.toFixed(2)}</p>
        </div> */}

        <div className="flex justify-end">
          <button
            // onClick={handleSubmit}
            className="bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Payment;
