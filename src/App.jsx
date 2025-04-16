import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Editor from "./pages/Editor";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/editor",
      element: <Editor />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
