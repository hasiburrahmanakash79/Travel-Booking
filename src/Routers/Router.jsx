import { createBrowserRouter } from "react-router";
import Signup from "../Pages/Authentication/Signup";
import SignIn from "../Pages/Authentication/SignIn";
import Main from "../Layouts/Main";
import Homepage from "../Pages/HomePage/Homepage";
import HotelRequest from "../Pages/HotelRequest/HotelRequest";
import Offers from "../Pages/Offers/Offers";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Faq from "../Pages/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/hotel-request",
        element: <HotelRequest />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
