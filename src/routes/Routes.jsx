import { createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "../shared";
import { Dashboard, MainLayouts } from "../layouts";
import { About, Academic, AdmissionInfo, Contact, Home, Opportunities, Others, Results, Students } from "../pages";


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
                element: <About/>
            },
            {
                path:"/academic",
                element:<Academic />
            },
            {
                path:"/admission",
                element:<AdmissionInfo />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/opportunities",
                element:<Opportunities />
            },
            {
                path:"/others",
                element:<Others/>
            },
            {
                path:"/results",
                element:<Results/>
            },
            {
                path:"/students",
                element:<Students />
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