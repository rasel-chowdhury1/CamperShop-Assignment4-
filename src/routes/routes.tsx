import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Journal from "../pages/Journal/Journal";
import Offer from "../pages/Offer/Offer";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

import Payment from "../pages/payment/Payment";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Cart from "../pages/Cart/Cart";
import CreateProduct from "../pages/CreateProduct/CreateProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/shop",
          element: <Shop/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/about",
          element: <About/>
        },
        
        {
          path: "/journal",
          element: <Journal/>
        },
        {
          path: "/category/:category",
          element: <Offer/>
        },
        {
          path: "/product/:_id",
          element: <ProductDetails/>
        },
        {
          path: "/paymentgateway",
          element: <Payment/>
        },
        {
          path: "/product-management",
          element: <ProductManagement/>
        },
        {
          path: "/create-product",
          element: <CreateProduct/>
        },
      ]
    },
  ]);

export default router;