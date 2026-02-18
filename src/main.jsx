import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { store } from "./app/store";

import App from "./App";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/AuthLayout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },

      
      {
        path: "login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },

      
      {
        path: "products",
        element: (
          <AuthLayout authentication={true}>
            <Products />
          </AuthLayout>
        ),
      },

      
      {
        path: "dashboard",
        element: (
          <AuthLayout authentication={true} role="Manager">
            <Dashboard />
          </AuthLayout>
        ),
      },

      
      {
        path: "*",
        element: <h1 className="text-center mt-10 text-2xl">404 Not Found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
