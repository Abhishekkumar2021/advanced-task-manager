import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';

// We are defining rules for our router
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>Not found!</div>,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
