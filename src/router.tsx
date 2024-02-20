import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import PlaceDetails from "./pages/PlaceDetails/PlaceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
