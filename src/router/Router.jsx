import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Signup from "../components/Signup";
import NotFound from "../pages/NotFound";
import CartPage from "../pages/shop/CardPage";
import PrivateRouter from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import ManageItem from "../pages/dashboard/admin/ManageItem";
import ManageBooking from "../pages/dashboard/admin/ManageBooking";
import Login from "../components/Login";
import Payment from "../pages/shop/Payment";
import Order from "../pages/dashboard/Order";
import OurServices from "../pages/home/OurServices";
import Testimonials from "../pages/home/Testimonials";
import SpecialDishes from "../pages/home/SpecialDishes";
import ContactUs from "../pages/home/ContactUs";
import DisplayItem from "../pages/shop/DisplayItem";

const API = import.meta.env.VITE_API_URL;
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            index: true,
            element: <Home />,
          },
        {
            path: "/menu",
            element: <Menu />,
        },
        {
          path: "/services",
          element: <OurServices />,
        },
        {
          path: "/testimonials",
          element: <Testimonials />,
        },
        {
          path: "/special-dishes",
          element: <SpecialDishes />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "menu/:id",
          element: <DisplayItem />,
          loader: ({ params }) => fetch(`${API}/menu/${params.id}`),
        },
        {
          path: "/order",
          element:<PrivateRouter><Order/></PrivateRouter>
        },
        {
            path: "/cart-page",
            element: <CartPage />,
        },
        {
            path: "/process-checkout",
            element: <Payment />,
        },
        {
            path: "/update-profile",
            element: <UpdateProfile />,
        },
      ]
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",  // Fallback route for undefined paths
      element: <NotFound />,
    },
    
  // ADMIN ROUTES
  {
    path: "dashboard",
    element: (
      // <PrivateRouter>
        <DashboardLayout />
      // </PrivateRouter>
      
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-bookings",
        element: <ManageBooking />,
      },
      {
        path: "manage-items",
        element: <ManageItem />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) => fetch(`${API}/menu/${params.id}`),
      },
    ],
  },
  ]);

  export default router;