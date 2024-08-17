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
import Categories from './pages/Catgories';
import Task from './pages/Task';
import Tasks from './pages/Tasks';
import Forms from './pages/Forms';

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
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/:id",
          element: <Category />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "tasks/:id",
          element: <Task />,
        }, 
        {
          path: "forms",
          element: <Forms />,
        }
      ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
