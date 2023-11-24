import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './routes/Root.tsx'
import ErrorPage from './pages/Error.tsx'
import ContactPage from './pages/Contact.tsx'

import './index.css'

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage />, children: [
    { path: "/contact", element: <ContactPage /> },
  ] },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
