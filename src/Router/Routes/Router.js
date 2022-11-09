import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Login from "../../Pages/Authentication/Login/Login";
import Registration from "../../Pages/Authentication/Registration/Registration";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import InvalidePage from "../../Pages/InvalidePage/InvalidePage";
import Profile from "../../Pages/Profile/Profile";
import ReviewsByEmailId from "../../Pages/ReviewsSection/ReviewByEmailId/ReviewsByEmailId";
import ServiceDetails from "../../Pages/ServiceDeatils/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://cleaning-server-ten.vercel.app/services/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRouter>
            <ReviewsByEmailId />
          </PrivateRouter>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRouter>
            <AddService />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <InvalidePage />,
  },
]);
