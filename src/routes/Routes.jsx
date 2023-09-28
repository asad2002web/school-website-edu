import { createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "../shared";
import { Dashboard, MainLayouts } from "../layouts";
import { Home } from "../pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <h1>About</h1>
            }
        ]
    },
    {
        path: "/dashboard",
        element:<Dashboard />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/dashboard",
                element: <h1>Dashboard2</h1>
            }
        ]
    }
])