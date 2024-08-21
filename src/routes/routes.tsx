import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Journal from "../pages/Journal/Journal";
import Offer from "../pages/Offer/Offer";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Payment from "../pages/payment/Payment";

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
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
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
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/paymentgateway",
          element: <Payment/>
        }
      ]
    },
  ]);

export default router;