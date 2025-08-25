import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Shop from "./Pages/Shop";
import Acount from "./Pages/Acount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/acount",
    element: <Acount />,
  },
]);

export default router;
