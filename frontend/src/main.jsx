import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Error from './pages/Error';
import Category from './pages/Category';

// We are defining rules for our router
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
            path: "",
            element: <Home />,
        },
        {
          path: "categories/:id",
          element: <Category />,
        }
      ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
