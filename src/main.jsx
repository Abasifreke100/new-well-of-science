import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import PartnershipPage from "./pages/partnership";
import ContactPage from "./pages/contact";
import PartnerShipFormPage from "./pages/partnership-form";
import BlogDetails from "./pages/blog-details";
import BlogPage from "./pages/blog";
import { UploadProvider } from "./hooks/UseContext";
import GreenClub from "./pages/green-club/page";




const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/partnership",
    element: <PartnershipPage />,
  },
  {
    path: "partnership-form",
    element: <PartnerShipFormPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogDetails />,
  },
  {
    path:"green-club-for-schools",
    element: <GreenClub />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <UploadProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
      </UploadProvider>
  </React.StrictMode>
);
