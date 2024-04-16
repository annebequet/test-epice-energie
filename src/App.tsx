import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NotFound from './pages/NotFound'
import HomeContainer from './pages/Home/HomeContainer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeContainer />,
    errorElement: <NotFound />,
  },
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
