import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import LoginPage from './features/auth/LoginPage'
import Dashboard from './features/dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  }

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
