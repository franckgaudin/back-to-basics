import { createBrowserRouter } from "react-router-dom";

import Root from "./Root.tsx";
import ErrorPage from "../pages/Error.tsx";
import MainPage from "../pages/Main.tsx";
import ContactPage from "../pages/Contact.tsx";
import ButtonPage from "../pages/Button.tsx";
import ShadowPage from "../pages/Shadow.tsx";
import ColorsPage from "../pages/Colors.tsx";
import IsolationPage from "../pages/Isolation.tsx";
import ChallengeLayout from "../pages/challenges/Layout.tsx";
import ChallengePage from "../pages/challenges/Page.tsx";

export const routes = [
  {
    id: 1,
    path: "/colors",
    label: "Colors",
  },
  {
    id: 2,
    path: "/shadow",
    label: "Shadow",
  },
  {
    id: 3,
    path: "/button",
    label: "Button",
  },
  {
    id: 4,
    path: "/isolation",
    label: "Isolation",
  },
  {
    id: 5,
    path: "/challenge/day-1",
    label: "Day 1",
  }
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/button", element: <ButtonPage /> },
      { path: "/shadow", element: <ShadowPage /> },
      { path: "/colors", element: <ColorsPage /> },
      { path: "/isolation", element: <IsolationPage /> },
      { path: "/challenge",
        element: <ChallengeLayout />,
        children: [
          {
            path: "/challenge/:id",
            element: <ChallengePage />,
          }
        ],
      },
    ],
  },
]);
