import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import PlaceDetails from "./pages/PlaceDetails/PlaceDetails";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "places/:placeId",
        element: <PlaceDetails />,
      },
    ],
  },
]);
