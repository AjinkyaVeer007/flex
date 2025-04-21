import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Editor from "./pages/Editor";
import Dashboard from "./pages/Dashboard";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/editor",
      element: <Editor />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
