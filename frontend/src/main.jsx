import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Error from './components/Error';

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
        }
      ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
