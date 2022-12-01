import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Update from "../components/Update";
import User from "../components/User";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/user"),
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
    ],
  },
]);
