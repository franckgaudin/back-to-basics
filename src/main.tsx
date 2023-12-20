import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root.tsx";
import ErrorPage from "./pages/Error.tsx";
import ContactPage from "./pages/Contact.tsx";
import ButtonPage from "./pages/Button.tsx";
import ShadowPage from "./pages/Shadow.tsx";
import ColorsPage from "./pages/Colors.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/contact", element: <ContactPage /> },
      { path: "/button", element: <ButtonPage /> },
      { path: "/shadow", element: <ShadowPage /> },
      { path: "/colors", element: <ColorsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
