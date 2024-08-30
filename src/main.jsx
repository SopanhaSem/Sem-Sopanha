import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComponents from "./components/MainComponents.jsx";
import Education from "./pages/Education.jsx";
import Home from "./pages/Home.jsx";
import BlogSection from "./components/BlogSection.jsx";
import BlogsDetail from "./components/BlogsDetail.jsx";
import LikeSection from "./pages/LikeSectioin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainComponents />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <BlogSection />,
      },
      {
        path: "/blogs/:id",
        element: <BlogsDetail />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/favorite",
        element: <LikeSection />,
      },
    ],
  },
  {
    path: "/register",
    element: <h1>register</h1>,
  },
  {
    path: "/login",
    element: <h1>login</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
