import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/blogs";

import Homepage from "../pages/Index";
import About from "../pages/About";
import Post from "../pages/blogs/_id";

import ErrorPage from "../components/ErrorPage";
import { posts, postById } from "../apis/loaders";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: posts,
      },
      {
        path: "/blog/:id",
        element: <Post></Post>,
        loader: postById,
      },
    ],
  },
]);
