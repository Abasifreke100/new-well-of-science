import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import PortfolioPage from "./pages/portfolio"
import PartnershipPage from "./pages/partnership"
import ContactPage from "./pages/contact"
import PartnerShipFormPage from "./pages/partnership-form"

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
])

function App() {
  return <RouterProvider router={router} />
}

export default App
