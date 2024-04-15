import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <NotFound />,
  },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
